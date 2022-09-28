import Head from 'next/head'
import { useRouter } from 'next/router'

import getFormData from '../utils/getFormData'
import CreateTeacher from '../components/CreateTeacher'

export default function Home() {
  const router = useRouter()

  // async function handleSubmit(e) {
  //   const data = getFormData(e)
  //   await fetch('/api/create-teacher', {
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  // }

  return (
    <div>
      <Head>
        <title>Classroom App</title>
        <meta
          name='description'
          content='App for teachers to help manage classrooms'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className='text-6xl font-bold'>
          Managing your class just became easy
        </h1>
      </main>
      {/* <CreateTeacher handleSubmit={handleSubmit} /> */}
    </div>
  )
}
