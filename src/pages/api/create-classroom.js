import { PrismaClient } from '@prisma/client'
import { getSession } from 'next-auth/react'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return null
  }
  const prisma = new PrismaClient()
  const session = await getSession({ req })

  const body = JSON.parse(req.body)

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  })

  await prisma.classroom.create({
    data: {
      userId: user.id,
      name: body.name,
      grade: body.grade,
    },
  })

  res.status(200).send({ done: `Created ${body.name} classroom` })
}
