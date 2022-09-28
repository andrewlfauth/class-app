import '../styles/globals.css'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className='py-20 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
