import { PrismaClient } from '@prisma/client';
import { isTokenValid } from '../../../jwthandler';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;
  const token = req.headers.authorization; 

  if(isTokenValid(token) === false) {
    return res.status(401).send('Invalid JWT');
  }else{ 
  if (req.method === 'GET') {
    try {
      const discussion = await prisma.discussion.findUnique({
        where: { id: parseInt(id) },
        include: { messages: true, participants: true },
      });
      res.status(200).json(discussion);
    } catch (error) {
      res.status(404).json({ message: 'Discussion not found' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
}
