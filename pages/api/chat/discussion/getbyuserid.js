import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
import { getUserIdFromToken } from '../../jwthandler';


export default async function handler(req, res) {
  const token = req.headers.authorization; 

  if (!token) {
    return res.status(401).send('JWT not provided');
  }

  const userId = getUserIdFromToken(token);

  if (!userId) {
    return res.status(401).send('Invalid JWT : ' + userId);
  }

  if (req.method === 'GET') {
    try {
      const discussions = await prisma.discussion.findMany({
        where: { participants: { some: { id: userId } } },
        include: { participants: true, messages: true },
      });
      res.status(200).json(discussions);
    } catch (error) {
      res.status(404).json({ message: 'Discussions not found' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
