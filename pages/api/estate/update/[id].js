// pages/api/realEstates/page.js
import { updateRealEstate } from '../realEstates';

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    await updateRealEstate(req, res, id);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
