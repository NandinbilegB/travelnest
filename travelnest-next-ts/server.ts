import { NextApiRequest, NextApiResponse } from 'next';
import travelRequests from '../../data/travelRequests.json';

interface TravelRequest {
  id: number;
  destination: string;
  days: number;
  // Add other fields from your travelRequests.json if necessary
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    if (req.query.id) {
      const item = (travelRequests as TravelRequest[]).find(
        (request) => request.id === parseInt(req.query.id as string)
      );
      if (!item) return res.status(404).send('Not found');
      return res.status(200).json(item);
    }
    return res.status(200).json(travelRequests);
  } else {
    // Handle other HTTP methods if necessary
    res.status(405).end(); // Method Not Allowed
  }
}
