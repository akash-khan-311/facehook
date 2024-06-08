import { useForm } from 'react-hook-form'
import Field from '../common/Field'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import axios from 'axios'

const LoginForm = () => {
  const navigate = useNavigate()
  const [seePassword, setSeePassword] = useState(true)
  const { setAuth } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm()

  const submitForm = async formData => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`,
        formData
      )
      if (response.status === 200) {
        const { token, user } = response.data
        if (token) {
          const authToken = token?.token
          const refreshToken = token.refreshToken
          console.log('login time auth token', authToken)
          setAuth({ user, authToken, refreshToken })
          navigate('/')
        }
      }
    } catch (error) {
      setError('root.random', {
        type: 'random',
        message: `User with Email ${formData.email} not found`
      })
      console.log(error)
    }
  }
  return (
    <form
      className='border-b border-[#3F3F3F] pb-10 lg:pb-[60px]'
      onSubmit={handleSubmit(submitForm)}
    >
      {/* Email Field */}
      <Field label={'Email'} error={errors.email}>
        <input
          className={`auth-input ${
            !!errors?.email ? 'border-red-500' : 'border-gray-200'
          }`}
          type='email'
          name='email'
          id='email'
          {...register('email', { required: 'Email Adress is Required' })}
        />
      </Field>
      {/* Password Field */}
      <Field label={'Password'} error={errors.password}>
        <div className='relative'>
          <input
            className={`auth-input  ${
              !!errors?.password ? 'border-red-500' : 'border-gray-200'
            }`}
            type={seePassword ? 'password' : 'text'}
            name='password'
            id='password'
            {...register('password', {
              required: 'Password is Required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters'
              }
            })}
          />
          {seePassword ? (
            <FaEye
              className='absolute right-3 top-4 cursor-pointer text-xl'
              onClick={() => setSeePassword(false)}
            />
          ) : (
            <FaEyeSlash
              className='absolute right-3 top-4 cursor-pointer text-xl'
              onClick={() => setSeePassword(true)}
            />
          )}
        </div>
      </Field>
      <p className='text-red-500 text-lg'>{errors?.root?.random?.message}</p>
      <Field>
        <button
          type='submit'
          className='auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90'
        >
          Login
        </button>
      </Field>
    </form>
  )
}
export default LoginForm
