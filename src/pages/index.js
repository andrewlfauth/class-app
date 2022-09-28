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
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        <main className='flex flex-col items-center py-20 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
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
    </div>
  )
}
