import "dotenv/config";
import express from "express";
import cors from "cors";
import enquiryRoutes from "./routes/enquiryRoutes.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";
import { rateLimit } from "./middleware/rateLimit.js";
import { connectDB } from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 5000;

// ── Security & parsing ────────────────────────────────────────
app.disable("x-powered-by");

const allowedOrigins = (process.env.CORS_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow non-browser tools (no Origin header) and whitelisted origins
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
  })
);

app.use(express.json({ limit: "50kb" }));

// ── Routes ────────────────────────────────────────────────────
app.get("/api/health", (req, res) => {
  res.json({ success: true, status: "ok", uptime: process.uptime() });
});

app.use("/api/enquiries", rateLimit({ windowMs: 60_000, max: 10 }), enquiryRoutes);

// ── Errors ────────────────────────────────────────────────────
app.use(notFound);
app.use(errorHandler);

// ── Start ─────────────────────────────────────────────────────
// MongoDB is optional: the API runs (and the frontend keeps working)
// even when MONGO_URI is not configured.
connectDB().finally(() => {
  app.listen(PORT, () => {
    console.log(`Kapilesh Learning API listening on http://localhost:${PORT}`);
  });
});
