import { PrismaClient } from '@prisma/client'
import { isTokenValid } from '../../jwthandler';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const token = req.headers.authorization; 

  if(isTokenValid(token) === false) {
    return res.status(401).send('Invalid JWT');
  }else{ 
  if (req.method === 'GET') {
    const messages = await prisma.message.findMany();
    res.status(200).json(messages);
  } else if (req.method === 'POST') {
    const { content, date, authorId, discussionId } = req.body;
    const message = await prisma.message.create({
      data: {
        content,
        date,
        author: { connect: { id: authorId } },
        discussion: { connect: { id: discussionId } },
      },
    });
    res.status(201).json(message);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
}
