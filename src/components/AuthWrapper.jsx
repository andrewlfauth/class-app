import { useSession } from 'next-auth/react'

function AuthWrapper({ children }) {
  const { status } = useSession()

  if (status === 'loading') return null

  return <>{children}</>
}

export default AuthWrapper
