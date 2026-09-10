import mongoose from "mongoose";

let connected = false;

/**
 * Connect to MongoDB when MONGO_URI is provided.
 * The application degrades gracefully without a database:
 * enquiries are logged and acknowledged, never dropped with an error.
 */
export async function connectDB() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.log(
      "MONGO_URI not set — running without a database (enquiries will be logged to the console)."
    );
    return;
  }
  try {
    await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
    connected = true;
    console.log("MongoDB connected.");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    console.log("Continuing without a database.");
  }
}

export function isDbConnected() {
  return connected && mongoose.connection.readyState === 1;
}
