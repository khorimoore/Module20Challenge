import type { Request, Response } from 'express';
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import apiRoutes from './api/index.js'; // Assuming you have a file structure for `api`

const router = express.Router();

// Use Node.js functions to manage paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// API Routes
router.use('/api', apiRoutes);

// Serve React front-end in production
router.use((req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

export default router;