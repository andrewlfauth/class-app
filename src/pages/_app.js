import Head from 'next/head'

import '../styles/globals.css'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
