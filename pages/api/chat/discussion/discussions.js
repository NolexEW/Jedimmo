import { PrismaClient } from '@prisma/client';
import { isTokenValid } from '../../jwthandler';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const token = req.headers.authorization; 

  if(isTokenValid(token) === false) {
    return res.status(401).send('Invalid JWT');
  }else{ 
    if (req.method === 'GET') {
      const discussions = await prisma.discussion.findMany();
      res.status(200).json(discussions);
    } else if (req.method === 'POST') {
      const { participantIds } = req.body;
      
      const discussion = await prisma.discussion.create({
        data: {
          participants: { connect: participantIds.map((id) => ({ id })) },
        },
        include: { participants: true },
      });
      
      res.status(201).json(discussion);
    } else if (req.method === 'DELETE') {
      const { idDiscussion } = req.query;
      
      try {
        // Supprimer les messages de la discussion
        await prisma.message.deleteMany({
          where: { discussionId: parseInt(idDiscussion) },
        });
        
        // Supprimer la discussion
        await prisma.discussion.delete({
          where: { id: parseInt(idDiscussion) },
        });
        
        res.status(204).end();
      } catch (error) {
        res.status(404).json({ message: 'Discussion not found' });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
}
}
