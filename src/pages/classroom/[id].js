import { useRouter } from 'next/router'

function Index() {
  const router = useRouter()
  const { id } = router.query
  return <div>id: {id}</div>
}

export default Index
