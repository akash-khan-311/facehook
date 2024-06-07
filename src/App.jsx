import { Route, Routes } from 'react-router-dom'
import HomePages from './Pages/HomePages'
import LoginPage from './Pages/LoginPage'
import ProfilePage from './Pages/ProfilePage'
import NotFoundPage from './Pages/NotFoundPage'
import RegisterPage from './Pages/RegisterPage'
import PrivateRoutes from './routes/PrivateRoutes'

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path='/' element={<HomePages />} exact />
          <Route path='/me' element={<ProfilePage />} />
        </Route>
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </>
  )
}
export default App
