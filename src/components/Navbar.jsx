import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'

function Navbar() {
  const { data: session } = useSession()
  return (
    <div className='bg-purple-500'>
      <nav className='px-4 flex justify-between items-center sm:px-6 lg:px-8 mx-auto max-w-7xl py-2'>
        {session ? (
          <button onClick={() => signOut()}>Sign out</button>
        ) : (
          <button onClick={() => signIn()}>Sign in</button>
        )}
        {session && (
          <div>
            <h1>{session?.user.name}</h1>
            <h1>{session?.user.email}</h1>
            <Image src={session?.user.image} width={20} height={20} />
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar
