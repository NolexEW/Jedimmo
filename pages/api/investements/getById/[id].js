// pages/api/realEstates/page.js


export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { id } = req.query

    const investement = await prisma.investement.findFirst({
      where: {
        id
      }
    })

    if (!investement) {
      return res.status(404).send("INVESTEMENT NOT FOUND")
    }

    return res.send(investement)
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}