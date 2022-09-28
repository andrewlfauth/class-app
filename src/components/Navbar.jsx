import Link from 'next/link'

function Navbar() {
  return (
    <div className='bg-purple-500'>
      <nav className='px-4 flex justify-between items-center sm:px-6 lg:px-8 mx-auto max-w-7xl py-2'>
        <Link href='/'>LOGO</Link>

        <ul>
          <li>
            <Link href='/'>test</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
