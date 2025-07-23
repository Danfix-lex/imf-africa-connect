import express from 'express';
import { authenticateJWT, AuthRequest } from '../middleware/auth';

const router = express.Router();

router.get('/profile', authenticateJWT, (req: AuthRequest, res) => {
  res.json({ user: req.user });
});

export default router; 