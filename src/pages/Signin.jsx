import { LockClosedIcon } from '@heroicons/react/solid';
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Loader from '../components/Loader';

const SigninPage = ({ login }) => {
  const [data, setData] = useState({ email: '', password: '' });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const history = useHistory();

  const handleChange = (key, value) => setData({ ...data, [key]: value });

  const handleSubmit = async () => {
    setError(false);
    setLoading(true);
    try {
      const response = await axios.post('https://yeshirts-server.herokuapp.com/user/login', data);
      login(response.data);
      history.push('/');
    } catch (err) {
      handleChange('password', '');
      setError(true);
    }
    setLoading(false);
  };

  if (loading) return <Loader />;

  return (
    <>
      <div className='h-screen min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8' style={{ background: 'radial-gradient(#fff, #ffd6d6)' }}>
        <div className='max-w-md w-full space-y-8'>
          <div className='flex flex-col justify-center items-center text-red-700 cursor-pointer '>
            <Link to={'/'}>
              <svg className='max-auto w-auto h-14 w-14 hover:text-red-800' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </Link>
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-800'>Sign in to your account</h2>
            <p className='mt-2 text-center text-sm text-gray-600'>
              Or{' '}
              <Link to='/register' className='font-medium text-red-600 hover:text-red-500'>
                Register yourself
              </Link>
            </p>
          </div>

          <form className='mt-8 space-y-6' action='#' method='POST'>
            <input type='hidden' name='remember' defaultValue='true' />
            <div className='rounded-md shadow-sm -space-y-px'>
              <div>
                <label htmlFor='email-address' className='sr-only'>
                  Email address
                </label>
                <input
                  id='email-address'
                  name='email'
                  type='email'
                  autoComplete='email'
                  value={data.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  required
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm'
                  placeholder='Email address'
                />
              </div>
              <div>
                <label htmlFor='password' className='sr-only'>
                  Password
                </label>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  value={data.password}
                  onChange={(e) => handleChange('password', e.target.value)}
                  required
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm'
                  placeholder='Password'
                />
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <input id='remember-me' name='remember-me' type='checkbox' className='h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded' />
                <label htmlFor='remember-me' className='ml-2 block text-sm text-gray-900'>
                  Remember me
                </label>
              </div>

              <div className='text-sm'>
                <a href='#' className='font-medium text-red-600 hover:text-red-500'>
                  Forgot your password?
                </a>
              </div>
            </div>

            {error && (
              <div>
                <p className='text-red-700 font-bold'>*Invalid credentials</p>
              </div>
            )}

            <div>
              <button
                type='submit'
                onClick={handleSubmit}
                className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'>
                <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                  <LockClosedIcon className='h-5 w-5 text-red-500 group-hover:text-red-400' aria-hidden='true' />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SigninPage;
