import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Button,
  Divider,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from '@mui/material';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import AuthenticationLayoutComp from '../../components/layout/AuthLayoutComp';
import { useCookies } from 'react-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingButton from '@mui/lab/LoadingButton';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  // eslint-disable-next-line no-unused-vars
  const [_, setCookie] = useCookies(['tailors-db']);
  const [formValue, setFormValue] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [loadingState, setLoadingState] = useState(false);

  console.log('formValue', formValue);

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async () => {
    try {
      const { email, password } = formValue;

      if (email && password && email !== '' && password !== '') {
        setLoadingState(true);
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/dj-rest-auth/login/`,
          formValue
        );
        // console.log('res :>> ', res);
        setCookie('tailors-db', res?.data?.key);
        router.push('/clients');
        toast.success('Login Successful', {
          theme: 'colored',
        });
      } else {
        toast.error('Please fill all fields', {
          theme: 'colored',
        });
      }
    } catch (error) {
      console.error(error.response.data);
      if (
        typeof error.response.data === 'object' &&
        error.response.data !== null
      ) {
        Object.values(error.response.data).forEach((value) => {
          value.forEach((val) => {
            toast.error(val, {
              theme: 'colored',
            });
          });
        });
      } else {
        toast.error('Something went wrong', {
          theme: 'colored',
        });
      }
    } finally {
      setLoadingState(false);
    }
  };

  return (
    <AuthenticationLayoutComp>
      <div className='tw-mx-2 tw-mt-[3rem] tw-mb-[1.5rem] '>
        <div className='tw-mx-auto tw-flex tw-max-w-screen-sm tw-flex-col tw-items-center'>
          <div className='  tw-flex tw-w-full tw-flex-col tw-items-center tw-rounded-lg tw-border-x-0 tw-border-t-[8px] tw-border-b-0 tw-border-solid tw-border-emerald-500 tw-pt-4 tw-shadow-lg sm:tw-w-[80%]'>
            {/* title \ description */}
            <div className='tw-px-4 '>
              <Typography className='tw-text-center tw-font-fam1 tw-text-2xl tw-font-bold sm:tw-text-3xl'>
                Welcome Back!
              </Typography>
              <Typography className='tw-text-center tw-font-fam1 tw-text-xs tw-text-gray-400 sm:tw-text-sm'>
                Fill these details to sign into your account
              </Typography>
            </div>
            {/* form */}
            <div className='tw-mt-8 tw-flex tw-w-full tw-flex-col tw-space-y-4 tw-px-4 sm:tw-w-[70%]'>
              {/* username */}
              {/* <div className='tw-flex tw-flex-col tw-space-y-1'>
                <label
                  className='tw-font-fam1 tw-text-gray-500'
                  htmlFor='username'
                >
                  Username
                </label>
                <OutlinedInput
                  id='username'
                  name='username'
                  type='text'
                  size='small'
                  onChange={handleChange}
                  value={formValue?.username}
                  // placeholder='Email'
                />
              </div> */}
              {/* email */}
              <div className='tw-flex tw-flex-col tw-space-y-1'>
                <label
                  className='tw-font-fam1 tw-text-gray-500'
                  htmlFor='email'
                >
                  Email
                </label>
                <OutlinedInput
                  id='email'
                  name='email'
                  type='email'
                  size='small'
                  onChange={handleChange}
                  value={formValue?.email}
                  // placeholder='Email'
                />
              </div>
              {/* password */}
              <div className='tw-flex tw-flex-col tw-space-y-1'>
                <label
                  htmlFor='password'
                  className='tw-font-fam1 tw-text-gray-500'
                >
                  Password
                </label>
                <OutlinedInput
                  id='password'
                  name='password'
                  type={showPassword ? 'text' : 'password'}
                  onChange={handleChange}
                  value={formValue?.password}
                  size='small'
                  // placeholder='Password'
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge='end'
                      >
                        {showPassword ? (
                          <VisibilityOff className='tw-text-sm md:tw-text-base' />
                        ) : (
                          <Visibility className='tw-text-sm md:tw-text-base' />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <div className='tw-flex tw-justify-end tw-pt-1'>
                  <Link href='/forgotpassword' passHref>
                    <a className='tw-text-xs tw-text-gray-400'>
                      Forgot Password?
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            {/* submit button */}
            <div className='tw-mt-8 tw-flex tw-w-full tw-justify-center tw-px-4 '>
              <LoadingButton
                loading={loadingState}
                onClick={() => handleSubmit()}
                variant='text'
                className='tw-w-[60%] tw-rounded-lg tw-bg-emerald-500 tw-py-2 tw-font-fam1 tw-text-sm tw-font-bold tw-capitalize tw-text-white hover:tw-bg-emerald-600 md:tw-text-base'
              >
                Sign In
              </LoadingButton>
            </div>

            {/* divider */}
            <div className='tw-my-6 tw-w-full tw-px-4'>
              <Divider className='tw-text-fam1 tw-text-sm tw-text-gray-400'>
                Or
              </Divider>
            </div>

            {/* sign in with social media */}
            <div className=' tw-flex tw-w-full tw-justify-center  '>
              <Button
                variant='text'
                startIcon={<FcGoogle />}
                className='tw-w-[60%] tw-rounded-full tw-bg-gray-100 tw-py-2 tw-font-fam1 tw-text-sm tw-font-bold tw-capitalize  tw-text-gray-500 md:tw-text-base'
                type='submit'
              >
                Continue with Google
              </Button>
            </div>

            {/* already have an account */}
            <div className='tw-mt-[4rem] tw-w-full tw-rounded-b-lg tw-border-x-0 tw-border-t tw-border-b-0 tw-border-solid tw-border-gray-300 tw-py-6'>
              <div className='tw-flex tw-items-center tw-justify-center tw-space-x-2 tw-text-xs  md:tw-text-sm'>
                <span className='tw-text-gray-400'>Got an account?</span>
                <Link href='/signup' passHref>
                  <a className='tw-font-bold tw-text-emerald-500'>Sign Up</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </AuthenticationLayoutComp>
  );
};

export default LoginPage;

// export async function getServerSideProps(context) {
//   // console.log('context', context.req.cookies['tailors-db']);
//   if (context.req.cookies['tailors-db']) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }
