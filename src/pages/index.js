import Head from 'next/head'
import { useRouter } from 'next/router'

import getFormData from '../utils/getFormData'
import CreateTeacher from '../components/CreateTeacher'

export default function Home() {
  const router = useRouter()

  async function handleSubmit(e) {
    const data = getFormData(e)
    console.log('A')
    await fetch('/api/create-teacher', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    router.push('/')
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <CreateTeacher handleSubmit={handleSubmit} />
    </div>
  )
}
