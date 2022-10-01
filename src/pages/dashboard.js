import { getSession } from 'next-auth/react'
import { PrismaClient } from '@prisma/client'

import CreateClassroom from '../components/CreateClassroom'
import ClassroomCard from '../components/ClassroomCard'

export default function Dashboard(props) {
  return (
    <div className='px-4 py-10 sm:px-6 lg:px-8'>
      <h1>DASHBOARD FOR {props.user.name}</h1>
      <CreateClassroom />
      {props.classrooms.map((c, i) => (
        <ClassroomCard key={c.id} classroom={c} i={i} />
      ))}
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  const prisma = new PrismaClient()

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  })

  const existingClassrooms = await prisma.classroom.findMany({
    where: {
      userId: user.id,
    },
  })

  return {
    props: {
      user: session.user,
      classrooms: existingClassrooms,
    },
  }
}
