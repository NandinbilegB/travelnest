import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Handle user registration logic
    // You might need to save user data to a database here
    res.status(201).json({ message: 'User registered successfully' });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
