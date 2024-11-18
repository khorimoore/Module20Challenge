import models from "../models/index.js";
import { getDatabase } from "../config/connection.js";

export default async function cleanDb(
  modelName: keyof typeof models, // Ensure modelName matches keys in models
  collectionName: string
): Promise<void> {
  try {
    // Ensure the model name exists in the models object
    const model = models[modelName];
    if (!model) {
      throw new Error(`Model "${modelName}" does not exist.`);
    }

    // Get the database instance
    const db = getDatabase().useDb(process.env.DB_NAME || "techquiz");

  
    const collections = await db
      .listCollections;

    if (collections.length > 0) {
      // Drop the collection if it exists
      await db.dropCollection(collectionName);
      console.log(`Collection "${collectionName}" has been dropped.`);
    } else {
      console.log(`Collection "${collectionName}" does not exist.`);
    }
  } catch (err) {
    console.error("Error cleaning database:", err);
  }
}