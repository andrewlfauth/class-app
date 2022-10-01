import { getSession } from 'next-auth/react'

import prisma from '../../prismadb'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return null
  }
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
