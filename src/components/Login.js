import React, { useRef, useState } from 'react'
import Header from './Header'
import { emailValidation, passwordValidation } from '../utils/validation'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true)
  const [name, setName] = useState({
    firstName: '',
    lastName: ''
  })
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const email = useRef(null);
  const password = useRef(null);
  const toggleSigninButton = () => {
    setIsSignIn(!isSignIn);
  }
  const handleButton = () => {

    const enteredEmail = email.current.value
    const enteredPassword = password.current.value
    const isEmailValid = emailValidation(enteredEmail)
    const isPasswordValid = passwordValidation(enteredPassword)
    if (!isSignIn) {
      if (!isEmailValid || !isPasswordValid) {
        setError('email or password is not valid')
        return
      }

      createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          // ...
          setError('')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setError(errorMessage)
        });

    } else {
      signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
          setError('')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage)
        });
    }
  }
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className='fixed inset-0'>
        <img className='h-full w-full object-cover'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/ab1fe332-993a-44d1-b60b-cd4f8d11b96e/web/IN-en-20260928-TRIFECTA-perspective_85aef51c-94d6-41ea-a1ea-1e77199158f1_medium.jpg'
          alt='logo'
        />
      </div>
      <div className='absolute w-full max-w-md my-36 p-12 mx-auto right-0 left-0 bg-black bg-opacity-80 rounded-lg'>
        <form className='text-white'
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className='py-4 text-3xl font-bold'>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
          {!isSignIn && <>
            <input onChange={(e) => setName({ ...name, firstName: e.target.value })} className='p-2 my-2 w-full bg-gray-700 rounded-lg' type='text' placeholder='first name' />
            <input onChange={(e) => setName({ ...name, lastName: e.target.value })} className='p-2 my-2 w-full bg-gray-700 rounded-lg' type='text' placeholder='last name' />
          </>
          }
          <input ref={email} className='p-2 my-2 w-full bg-gray-700 rounded-lg' type='text' placeholder='email' />
          <div className='relative my-2'>
            <input ref={password} className='p-2 pr-10 w-full bg-gray-700 rounded-lg' type={showPassword ? 'text' : 'password'} placeholder='password'/>
            <button
              type='button'
              className='absolute inset-y-0 right-0 px-3 text-gray-300 hover:text-white'
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              <svg className='w-5 h-5' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
                <path d='M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z' />
                <circle cx='12' cy='12' r='3' />
                {showPassword && <path d='M3 3l18 18' />}
              </svg>
            </button>
          </div>
          {
            error && <p>{error}</p>
          }
          <button
            className='p-2 my-4 w-full bg-red-500 rounded-lg'
            onClick={handleButton}
          >
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </button>
          <div className='flex gap-2'>
            <p>{isSignIn ? 'New to netflix ?' : 'Already a user ?'}</p>
            <p className='cursor-pointer underline' onClick={toggleSigninButton}>{isSignIn ? 'Sign Up' : 'Sign In'}</p>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Login
