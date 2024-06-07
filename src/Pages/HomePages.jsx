import { Link } from 'react-router-dom'
import Header from '../components/common/Header'
import useAuth from '../hooks/useAuth'

const HomePages = () => {
  const { auth } = useAuth()
  console.log(auth)
  return (
    <>
      <p>Home Page</p>
      <Link to={'/me'}>Go to Profile</Link>
      Welcome to HomePages
    </>
  )
}
export default HomePages
