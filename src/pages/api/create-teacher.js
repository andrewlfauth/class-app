import { prisma } from '../../db'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return null
  }

  const body = JSON.parse(req.body)

  await prisma.teacher.create({
    data: body,
  })

  res.status(200)
}
