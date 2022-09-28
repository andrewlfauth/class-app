import { prisma } from '../../db'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return null
  }

  const body = req.body
  await prisma.teacher.create({
    data: body,
  })
}
