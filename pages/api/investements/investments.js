import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const investments = await prisma.investment.findMany();
    res.status(200).json(investments);
  } else if (req.method === 'POST') {
    const { amount, date, realEstateId, investorId } = req.body;
    const investment = await prisma.investment.create({
      data: {
        amount,
        date,
        realEstate: { connect: { id: realEstateId } },
        investor: { connect: { id: investorId } },
      },
    });

    const estate = await prisma.realEstate.findFirst({
      where: {
        realEstateId
      }
    })

    if (amount + estate.amount > 100) {
      return res.status(400).send("CANNOT BUY MORE THAN 100%")
    }

    await prisma.realEstate.update({
      where: {
        realEstateId
      },
      data: {
        amount: estate.amount + amount
      }
    })

    res.status(201).json(investment);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
