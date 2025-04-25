import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Handle password reset (e.g., send reset link to user's email)
    res.status(200).json({ message: 'Password reset email sent' });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
