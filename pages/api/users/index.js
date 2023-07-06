import { PrismaClient } from '@prisma/client'
import hashPassword from '../../../src/utils/hashPassword'

const prisma = new PrismaClient();
export default async function handler(req, res) {
  if (req.method === 'GET') {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } else if (req.method === 'POST') {
    const { firstName, lastName, email, password, passwordc } = req.body;
    console.log(req.body)

    if (!firstName || !lastName || !email || !password || !passwordc) {
      return res.status(404).send("MISSING CREDENTIALS")
    }

    if (password !== passwordc) {
      return res.status(401).send("UNAUTHORIZED")
    }

    const hashedPassword = await hashPassword(password)
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
      },
    });
    res.status(201).json(user);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

// Update user by ID
export async function updateUser(req, res) {
  const { id } = req.query;
  const { firstName, lastName, email, password } = req.body;

  try {
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id) },
      data: {
        firstName,
        lastName,
        email,
        password,
      },
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: 'Failed to update user' });
  }
}

// Get user by ID
export async function getUserById(req, res) {
  const { id } = req.query;

  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: 'User not found' });
  }
}
