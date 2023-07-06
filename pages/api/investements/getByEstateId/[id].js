import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { id } = req.query

    const investement = await prisma.investement.findFirst({
      where: {
        realEstateId: id
      }
    })

    if (!investement) {
      return res.status(404).send("investement NOT FOUND")
    }

    return res.send({ investement })
  }
}