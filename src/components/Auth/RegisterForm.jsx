import { useForm } from 'react-hook-form'
import Field from '../common/Field'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const RegisterForm = () => {
  const navigate = useNavigate()
  const [seePassword, setSeePassword] = useState(true)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm()
  const submitForm = async formData => {
    try {
      let response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/register`,
        formData
      )
      if (response.status === 201) {
        navigate('/login')
      }
    } catch (error) {
      setError('root.random', {
        type: 'random',
        message: `Something Went Wrong: ${error.message}`
      })
    }
  }
  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className='border-b border-[#3F3F3F] pb-10 lg:pb-[30px]'
    >
      {/* First Name Field */}
      <div className='flex flex-col md:flex-row gap-x-0 md:gap-x-5 md:justify-between'>
        <Field label={'First Name'} error={errors.firstName}>
          <input
            className={`auth-input ${
              !!errors?.firstName ? 'border-red-500' : 'border-gray-200'
            }`}
            type='firstName'
            name='firstName'
            id='firstName'
            {...register('firstName', { required: 'First Name  is Required' })}
          />
        </Field>
        {/* Last Name Field */}
        <Field label={'Last Name'} error={errors.lastName}>
          <input
            className={`auth-input ${
              !!errors?.lastName ? 'border-red-500' : 'border-gray-200'
            }`}
            type='lastName'
            name='lastName'
            id='lastName'
            {...register('lastName', { required: 'Last Name  is Required' })}
          />
        </Field>
      </div>

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
      <button
        className='auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90'
        type='submit'
      >
        Register
      </button>
      <p className='text-red-500 text-lg'>{errors?.root?.random?.message}</p>
    </form>
  )
}
export default RegisterForm
