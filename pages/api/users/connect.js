import mw from "../../../src/middlewares/mw";
import { PrismaClient } from '@prisma/client'
import validatePassword from "@/utils/validatePassword";
require('dotenv').config()

const prisma = new PrismaClient();

const handler = mw({
  POST: [
    async (req, res) => {
      const { email, password } = req.body
      if (!email || !password) {
        return res.status(404).send("MISSING CREDENTIALS")
      }

      const user = await prisma.user.findFirst({
        where: {
          email
        }
      })

      if (!user) {
        return res.status(404).send("USER NOT FOUND")
      }

      const isPasswordValid = await validatePassword(user.password, password)
      if (!isPasswordValid) {
        return res.status(404).send("PASSWORD INVALID")
      }

      const jwt = require('jsonwebtoken')

      const token = jwt.sign({
            user: {
              id: user.id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              balance : user.balance
            }
          }, process.env.JWT_SECRET
      )

      return res.send({token: token})
    }
  ]
})

export default handler