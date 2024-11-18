import dotenv from "dotenv";
import mongoose, { Connection } from "mongoose";

// Load environment variables from .env file
dotenv.config();

// Initialize the connection variable
let database: Connection;

/**
 * Connects to the MongoDB database using Mongoose
 */
export async function connectToDatabase(): Promise<void> {
  try {
    // Connect to the MongoDB server
    const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/techquiz";
    await mongoose.connect(mongoUri);

    database = mongoose.connection;

    // Event listeners for the connection
    database.on("connected", () => console.log("MongoDB connected successfully."));
    database.on("error", (err) => console.error("MongoDB connection error:", err));
    database.on("disconnected", () => console.warn("MongoDB disconnected."));

    console.log("Database connection established!");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit the application if the connection fails
  }
}

/**
 * Returns the active database connection
 * @returns {Connection} - Mongoose database connection
 */
export function getDatabase(): Connection {
  if (!database) {
    throw new Error("Database connection not initialized. Call connectToDatabase first.");
  }
  return database;
}

// Default export for Mongoose connection
export default mongoose.connection;