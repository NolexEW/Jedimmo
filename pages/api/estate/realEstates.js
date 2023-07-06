import { PrismaClient } from '@prisma/client'
export
const prisma = new PrismaClient();


export default async function handler(req, res) {
  if (req.method === 'GET') {
    const realEstates = await prisma.realEstate.findMany();
    res.status(200).json(realEstates);
  } else if (req.method === 'POST') {
    const { title, description, area, price, rent, address, city, postalCode, country, type, expirationDate, photoUrls } = req.body;
    const realEstate = await prisma.realEstate.create({
      data: {
        title,
        description,
        area,
        price,
        rent,
        address,
        city,
        postalCode,
        country,
        type,
        expirationDate,
        photoUrls,
      },
    });
    res.status(201).json(realEstate);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

// Update real estate by ID
export async function updateRealEstate(req, res) {
  const { id } = req.query;
  const { title, description, area, price, rent, address, city, postalCode, country, type, expirationDate, photoUrls } = req.body;
  
  try {
    const updatedRealEstate = await prisma.realEstate.update({
      where: { id: parseInt(id) },
      data: {
        title,
        description,
        area,
        price,
        rent,
        address,
        city,
        postalCode,
        country,
        type,
        expirationDate,
        photoUrls,
      },
    });
    res.status(200).json(updatedRealEstate);
  } catch (error) {
    res.status(400).json({ message: 'Failed to update real estate' });
  }
}

// Get real estate by ID
export async function getRealEstateById(req, res) {
  const { id } = req.query;
  
  try {
    const realEstate = await prisma.realEstate.findUnique({
      where: { id: parseInt(id) },
    });
    res.status(200).json(realEstate);
  } catch (error) {
    res.status(404).json({ message: 'Real estate not found' });
  }
}
