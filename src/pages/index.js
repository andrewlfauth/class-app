import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'

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

      <main className='flex flex-col items-center'>
        <h1 className='text-4xl md:text-6xl max-w-3xl mx-auto font-bold text-center tracking-tight'>
          Managing your classroom just became easy
        </h1>

        <div className='mt-10 flex space-x-4'>
          <Link href='register'>
            <a className='bg-purple-500 text-gray-100 rounded py-4 text-xl font-semibold w-44 text-center block'>
              Get Started
            </a>
          </Link>
          <Link href='login'>
            <a className='bg-gray-200 text-gray-600 rounded py-4 text-xl font-semibold w-44 text-center block'>
              Login
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
