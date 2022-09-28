import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Classroom App</title>
        <meta
          name='description'
          content='App for teachers to help manage classrooms'
        />
      </Head>

      <div>
        <main className='flex flex-col items-center px-4 py-20 mx-auto lg:py-32 sm:px-6 lg:px-8 max-w-7xl'>
          <h1 className='max-w-3xl mx-auto text-4xl font-bold tracking-tight text-center md:text-6xl'>
            Managing your classroom just became easy
          </h1>

          <div className='flex mt-10 space-x-4'>
            <Link href='register'>
              <a className='block py-4 text-xl font-semibold text-center text-gray-100 bg-purple-500 rounded w-44'>
                Get Started
              </a>
            </Link>
            <Link href='login'>
              <a className='block py-4 text-xl font-semibold text-center text-gray-600 bg-gray-200 rounded w-44'>
                Login
              </a>
            </Link>
          </div>
        </main>
      </div>
    </div>
  )
}
