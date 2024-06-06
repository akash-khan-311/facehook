import { useForm } from 'react-hook-form'
import Field from '../common/Field'

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { error }
  } = useForm()

  const submitForm = formData => {
    console.log(formData)
  }
  return (
    <form
      className='border-b border-[#3F3F3F] pb-10 lg:pb-[60px]'
      onSubmit={handleSubmit(submitForm)}
    >
      {/* Email Field */}
      <Field label={'Email'}>
        <input
          className={`auth-input ${
            !!error?.email ? 'border-red-500' : 'border-gray-200'
          }`}
          type='email'
          name='email'
          id='email'
          {...register('email', { required: 'Email Adress is Required' })}
        />
      </Field>
      {/* Password Field */}
      <Field label={'Password'}>
        <input
          className={`auth-input ${
            !!error?.password ? 'border-red-500' : 'border-gray-200'
          }`}
          type='password'
          name='password'
          id='password'
          {...register('password', { required: 'Password is Required' })}
        />
      </Field>
    </form>
  )
}
export default LoginForm
