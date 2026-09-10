import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Linkedin,
  Mail,
  Phone,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";
import Seo from "../lib/Seo";
import { professionalServiceSchema, breadcrumbSchema } from "../lib/schema";
import PageHero from "../components/PageHero";
import { contact, areasOfInterest } from "../data/content";
import { fadeUp, stagger, viewport } from "../lib/motion";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    professionalServiceSchema,
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
    ]),
  ],
};

const API_BASE = import.meta.env.VITE_API_URL || "";

const initialForm = {
  name: "",
  organisation: "",
  designation: "",
  email: "",
  phone: "",
  areaOfInterest: "",
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Please share your name.";
  if (!form.organisation.trim())
    errors.organisation = "Please tell us which organisation you represent.";
  if (!form.email.trim()) {
    errors.email = "An email address helps us respond to you.";
  } else if (!EMAIL_RE.test(form.email.trim())) {
    errors.email = "That email address doesn't look quite right.";
  }
  if (form.phone.trim() && !/^[+\d][\d\s\-()]{6,19}$/.test(form.phone.trim())) {
    errors.phone = "That phone number doesn't look quite right.";
  }
  if (!form.message.trim()) {
    errors.message = "Tell us a little about the challenge you're facing.";
  } else if (form.message.trim().length < 20) {
    errors.message =
      "A few more words will help us prepare a useful response (20+ characters).";
  }
  return errors;
}

function Field({ label, name, error, children, optional = false }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="eyebrow mb-3 block !text-[10.5px] text-white/60"
      >
        {label}
        {optional && (
          <span className="ml-2 normal-case tracking-normal text-white/30">
            (optional)
          </span>
        )}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            id={`${name}-error`}
            role="alert"
            className="mt-2 flex items-center gap-1.5 text-[13px] text-gold-soft"
          >
            <AlertCircle size={13} aria-hidden="true" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputClass =
  "w-full border border-white/15 bg-white/[0.04] px-5 py-4 text-[15px] text-white placeholder:text-white/25 transition-colors duration-300 focus:border-gold focus:outline-none";

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [serverMessage, setServerMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const first = Object.keys(nextErrors)[0];
      document.getElementById(first)?.focus();
      return;
    }

    setStatus("loading");
    setServerMessage("");
    try {
      const res = await fetch(`${API_BASE}/api/enquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) {
        throw new Error(
          data.message || `The server responded with status ${res.status}.`
        );
      }
      setStatus("success");
      setServerMessage(data.message || "Your enquiry has been received.");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setServerMessage(
        err instanceof TypeError
          ? "We couldn't reach the server. Please check your connection and try again — or reach out directly on WhatsApp or email."
          : err.message
      );
    }
  };

  return (
    <>
      <Seo
        title="Contact"
        description="Start a conversation about your organisation's capability challenge. Reach Kapilesh Learning by enquiry form, phone, email or LinkedIn."
        path="/contact"
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow="Contact"
        title={["Let's talk about", "the capability challenge."]}
        intro="Share the context — where the business is going and where capability is holding it back. Every engagement starts with that conversation."
      />

      <section className="bg-navy pb-28 sm:pb-36">
        <div className="mx-auto grid max-w-7xl gap-20 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 lg:px-12">
          {/* Direct channels */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.p variants={fadeUp} className="eyebrow text-gold">
              Direct Channels
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-6 font-serif text-3xl tracking-tight text-white"
            >
              Prefer to reach out directly?
            </motion.h2>
            <motion.ul variants={fadeUp} className="mt-10 list-none space-y-1">
              {[
                {
                  icon: Phone,
                  label: "Phone",
                  value: contact.phoneDisplay,
                  href: `tel:+${contact.phoneRaw}`,
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: contact.email,
                  href: `mailto:${contact.email}?subject=${encodeURIComponent(
                    "Consulting Enquiry — Kapilesh Learning"
                  )}`,
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: "kapileshthemotivator",
                  href: contact.linkedin,
                  external: true,
                },
              ].map((channel) => (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    {...(channel.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex items-center justify-between border-b border-white/10 py-5 transition-colors hover:border-gold/50"
                  >
                    <span className="flex items-center gap-4">
                      <channel.icon
                        size={17}
                        className="text-gold"
                        aria-hidden="true"
                      />
                      <span>
                        <span className="eyebrow block !text-[10px] text-white/40">
                          {channel.label}
                        </span>
                        <span className="mt-1 block text-[15px] text-white/85">
                          {channel.value}
                        </span>
                      </span>
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-white/25 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </motion.ul>
            <motion.p
              variants={fadeUp}
              className="mt-10 max-w-sm text-sm leading-relaxed text-white/40"
            >
              Enquiries are typically about building an L&amp;D function,
              strengthening leadership, improving sales capability,
              transforming culture or exploring AI-enabled learning.
            </motion.p>
          </motion.div>

          {/* Enquiry form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="border border-white/10 bg-white/[0.02] p-7 sm:p-12"
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-[420px] flex-col items-center justify-center text-center"
                role="status"
              >
                <CheckCircle2 size={44} className="text-gold" aria-hidden="true" />
                <h2 className="mt-7 font-serif text-3xl tracking-tight text-white">
                  Thank you.
                </h2>
                <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-white/60">
                  {serverMessage} We'll be in touch shortly to understand the
                  challenge in more depth.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="eyebrow mt-10 border-b border-gold/50 pb-1 text-gold transition-colors hover:border-gold"
                >
                  Send another enquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <p className="eyebrow text-gold">Enquiry</p>
                <h2 className="mt-4 font-serif text-3xl tracking-tight text-white">
                  Start the conversation.
                </h2>

                <div className="mt-10 grid gap-7 sm:grid-cols-2">
                  <Field label="Name" name="name" error={errors.name}>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Your full name"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                  </Field>
                  <Field
                    label="Organisation"
                    name="organisation"
                    error={errors.organisation}
                  >
                    <input
                      id="organisation"
                      name="organisation"
                      type="text"
                      autoComplete="organization"
                      value={form.organisation}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Company or institution"
                      aria-invalid={Boolean(errors.organisation)}
                      aria-describedby={
                        errors.organisation ? "organisation-error" : undefined
                      }
                    />
                  </Field>
                  <Field
                    label="Designation"
                    name="designation"
                    optional
                    error={errors.designation}
                  >
                    <input
                      id="designation"
                      name="designation"
                      type="text"
                      autoComplete="organization-title"
                      value={form.designation}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Your role"
                    />
                  </Field>
                  <Field label="Email" name="email" error={errors.email}>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="you@organisation.com"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                  </Field>
                  <Field label="Phone" name="phone" optional error={errors.phone}>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="+91 ..."
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                    />
                  </Field>
                  <Field
                    label="Area of Interest"
                    name="areaOfInterest"
                    optional
                  >
                    <select
                      id="areaOfInterest"
                      name="areaOfInterest"
                      value={form.areaOfInterest}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none bg-navy [&>option]:bg-navy`}
                    >
                      <option value="">Select an area</option>
                      {areasOfInterest.map((area) => (
                        <option key={area} value={area}>
                          {area}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <div className="mt-7">
                  <Field label="Message" name="message" error={errors.message}>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-y`}
                      placeholder="Tell us about the capability challenge, the business context and what you'd like to change."
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={
                        errors.message ? "message-error" : undefined
                      }
                    />
                  </Field>
                </div>

                <AnimatePresence>
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      role="alert"
                      className="mt-7 flex items-start gap-3 border border-red-400/30 bg-red-400/10 p-4 text-[14px] leading-relaxed text-red-200"
                    >
                      <AlertCircle
                        size={17}
                        className="mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      {serverMessage}
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group mt-10 inline-flex items-center gap-3 bg-gold px-8 py-4.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-navy transition-all duration-300 hover:bg-gold-soft disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2
                        size={15}
                        className="animate-spin"
                        aria-hidden="true"
                      />
                      Sending…
                    </>
                  ) : (
                    <>
                      Start the Conversation
                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
