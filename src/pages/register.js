import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'

import CreateTeacher from '../components/CreateTeacher'
import getFormData from '../utils/getFormData'

export default function Register() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    const data = getFormData(e)
    console.log(data)
    setLoading(true)

    const res = await fetch('/api/create-teacher', {
      method: 'POST',
      body: JSON.stringify(data),
    })

    setLoading(false)

    if (res.status !== 200) {
      let { error } = await res.json()
      return setError(error)
    }

    router.push('/dashboard')
  }

  return (
    <div>
      <Head>
        <title>Get Started | Classroom App</title>
        <meta name='description' content='Login to Classroom App' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex items-center justify-center py-20'>
        {loading && 'Loading'}
        {error && error}
        <CreateTeacher handleSubmit={handleSubmit} />
      </main>
    </div>
  )
}
