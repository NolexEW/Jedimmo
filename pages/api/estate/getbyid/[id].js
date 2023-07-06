// pages/api/realEstates/page.js
import { getRealEstateById } from '../realEstates';

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    await getRealEstateById(req, res, id);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
