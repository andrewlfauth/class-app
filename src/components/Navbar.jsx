import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'

function Navbar() {
  const { data: session } = useSession()
  return (
    <div className='bg-purple-500'>
      <nav className='px-4 flex justify-between items-center sm:px-6 lg:px-8 mx-auto max-w-7xl py-2'>
        <div className='flex items-end space-x-1'>
          <Image
            src='https://res.cloudinary.com/dpnkrz8c8/image/upload/v1664499443/classroom/favicon_ojxbho.png'
            alt='logo'
            width={30}
            height={30}
          />
          <span className='text-gray-100 font-bold tracking-tight text-lg'>
            Classrooms
          </span>
        </div>

        {session ? (
          <div className='flex items-center'>
            <button
              className='text-white rounded py-1 w-24 mr-4 font-semibold bg-purple-900'
              onClick={() => signOut()}
            >
              Sign out
            </button>
            <Image
              className='rounded-full'
              src={session?.user.image}
              width={30}
              height={30}
              alt='profile'
            />
          </div>
        ) : (
          <button onClick={() => signIn()}>Sign in</button>
        )}
        {/* {session && (
          <div>
            <Image
              className='rounded-full'
              src={session?.user.image}
              width={30}
              height={30}
              alt='profile'
            />
          </div>
        )} */}
      </nav>
    </div>
  )
}

export default Navbar
