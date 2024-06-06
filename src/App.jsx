import { Route, Routes } from 'react-router-dom'
import HomePages from './Pages/HomePages'
import LoginPage from './Pages/LoginPage'
import ProfilePage from './Pages/ProfilePage'
import NotFoundPage from './Pages/NotFoundPage'
import RegisterPage from './Pages/RegisterPage'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePages />} exact />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/me' element={<ProfilePage />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </>
  )
}
export default App
