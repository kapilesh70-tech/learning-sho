import Enquiry from "../models/Enquiry.js";
import { isDbConnected } from "../config/db.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FIELD_LIMITS = {
  name: 120,
  organisation: 160,
  designation: 120,
  email: 254,
  phone: 20,
  areaOfInterest: 120,
  message: 4000,
};

/** Trim, strip control characters and cap length. */
function sanitize(value, maxLength) {
  if (typeof value !== "string") return "";
  return value
    .replace(/[\u0000-\u001f\u007f]/g, "")
    .trim()
    .slice(0, maxLength);
}

function validateEnquiry(body) {
  const data = {};
  for (const [field, limit] of Object.entries(FIELD_LIMITS)) {
    data[field] = sanitize(body?.[field], limit);
  }

  const errors = {};
  if (!data.name) errors.name = "Name is required.";
  if (!data.organisation) errors.organisation = "Organisation is required.";
  if (!data.email) {
    errors.email = "Email is required.";
  } else if (!EMAIL_RE.test(data.email)) {
    errors.email = "Please provide a valid email address.";
  }
  if (data.phone && !/^[+\d][\d\s\-()]{6,19}$/.test(data.phone)) {
    errors.phone = "Please provide a valid phone number.";
  }
  if (!data.message) errors.message = "Message is required.";

  return { data, errors };
}

/**
 * POST /api/enquiries
 * Accepts a consulting enquiry. Persists to MongoDB when available;
 * otherwise logs it so no enquiry is silently lost.
 *
 * Email notification hook: when SMTP_* env vars are configured, plug a
 * transport (e.g. nodemailer) into `notifyByEmail` below — the structure
 * is ready, no credentials are hardcoded.
 */
export async function createEnquiry(req, res, next) {
  try {
    const { data, errors } = validateEnquiry(req.body);

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        success: false,
        message: "Please correct the highlighted fields.",
        errors,
      });
    }

    if (isDbConnected()) {
      await Enquiry.create(data);
    } else {
      // Database not configured — keep a trace in the server log.
      console.log("New enquiry (no DB configured):", JSON.stringify(data));
    }

    await notifyByEmail(data);

    return res.status(201).json({
      success: true,
      message: "Your enquiry has been received.",
    });
  } catch (err) {
    next(err);
  }
}

/**
 * Placeholder for the email notification integration.
 * Reads SMTP_HOST / SMTP_PORT / SMTP_USER / SMTP_PASSWORD / CONTACT_EMAIL
 * from the environment. Intentionally a no-op until a mail transport
 * is wired in — never hardcode credentials here.
 */
async function notifyByEmail(enquiry) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, CONTACT_EMAIL } =
    process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD || !CONTACT_EMAIL) {
    return; // Email not configured — skip silently.
  }
  // TODO: integrate a mail transport (e.g. nodemailer) and send `enquiry`
  // to CONTACT_EMAIL using the SMTP settings above.
}
