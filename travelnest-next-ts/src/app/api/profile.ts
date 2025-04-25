import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Fetch user profile data (e.g., from database)
    res.status(200).json({ id: 1, username: 'JohnDoe', email: 'john@example.com' });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
