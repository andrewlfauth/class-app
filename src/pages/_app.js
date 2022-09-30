import { SessionProvider } from 'next-auth/react'

import '../styles/globals.css'
import Navbar from '../components/Navbar'
import AuthWrapper from '../components/AuthWrapper'

function MyApp({ Component, pageProps, session }) {
  return (
    <>
      <SessionProvider session={session}>
        <AuthWrapper>
          <Navbar />
          <Component {...pageProps} />
        </AuthWrapper>
      </SessionProvider>
    </>
  )
}

export default MyApp
