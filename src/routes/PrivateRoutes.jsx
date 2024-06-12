import ProfileProvider from '../Providers/ProfileProvider'
import Header from '../components/common/Header'
import useAuth from '../hooks/useAuth'
import { Outlet, Navigate } from 'react-router-dom'
const PrivateRoutes = () => {
  const { auth } = useAuth()
  console.log('token ===========> ', auth.authToken)
  return (
    <>
      {auth.authToken ? (
        <>
          <ProfileProvider>
            <Header />
            <main className='mx-auto max-w-[1020px] py-8'>
              <div className='container'>
                <Outlet />
              </div>
            </main>
          </ProfileProvider>
        </>
      ) : (
        <Navigate to='/login' replace />
      )}
    </>
  )
}
export default PrivateRoutes
