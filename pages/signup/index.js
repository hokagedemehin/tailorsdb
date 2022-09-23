import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  // Alert,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  // Snackbar,
  Typography,
} from '@mui/material';
// import GoogleIcon from '@mui/icons-material/Google';
import { FcGoogle } from 'react-icons/fc';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AuthenticationLayoutComp from '../../components/layout/AuthLayoutComp';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [formValue, setFormValue] = useState({});
  const [selectValue, setSelectValue] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [_, setCookie] = useCookies(['tailors-db']);
  const [loadingState, setLoadingState] = useState(false);
  // const [isError, setIsError] = useState(null);
  // const [snackOpen, setSnackOpen] = useState(false);
  // const [snackText, setSnackText] = useState('');
  // const [snackSeverity, setSnackSeverity] = useState('info');

  console.log('formValue', formValue);
  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleSelectChange = (event) => {
    setSelectValue(event.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // const handleSnackOpen = (text, severity) => {
  //   // console.log('snack open');
  //   setSnackOpen(true);
  //   setSnackText(text);
  //   setSnackSeverity(severity);
  // };

  // const handleSnackClose = (event, reason) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }

  //   setSnackOpen(false);
  // };

  const handleSubmit = async () => {
    try {
      // todo: add validation - check if all the fields are filled

      const {
        first_name,
        last_name,
        email,
        password1,
        password2,
        phone,
        address,
        username,
        gender,
      } = formValue;
      if (password1 !== password2) {
        // handleSnackOpen('Passwords do not match', 'error');
        toast.error('Passwords do not match', {
          theme: 'colored',
        });
        return;
      } else if (
        first_name &&
        last_name &&
        email &&
        password1 &&
        password2 &&
        phone &&
        address &&
        username &&
        gender &&
        first_name !== '' &&
        last_name !== '' &&
        email !== '' &&
        password1 !== '' &&
        password2 !== '' &&
        phone !== '' &&
        address !== '' &&
        username !== '' &&
        gender !== ''
      ) {
        setLoadingState(true);
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/dj-rest-auth/registration/`,
          {
            ...formValue,
            is_tailor: true,
          }
        );
        console.log('res :>> ', res);
        setCookie('tailors-db', res?.data?.key);
        // handleSnackOpen(
        //   'Account created successfully. Check email for confirmation link.',
        //   'success'
        // );
        toast.success(
          'Account created successfully. Check email for confirmation link.',
          {
            theme: 'colored',
          }
        );
        router.push('/clients');
      } else {
        // alert('Please fill all the fields');
        // <Alert severity="error">Please fill all the fields </Alert>

        // handleSnackOpen('Please fill all the fields', 'error');
        toast.error('Please fill all the fields', {
          theme: 'colored',
        });
        return;
      }
    } catch (error) {
      // setIsError(error.response.data);
      console.error(error.response.data);

      if (
        typeof error.response.data === 'object' &&
        error.response.data !== null
      ) {
        Object.values(error.response.data).forEach((value) => {
          value.forEach((val) => {
            // handleSnackOpen(val, 'error');
            // console.log('val', val);
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

      // handleSnackOpen(error.response.data, 'error');
    } finally {
      setLoadingState(false);
    }
  };

  return (
    <AuthenticationLayoutComp>
      <div className='tw-mx-2 tw-mt-[3rem] tw-mb-[1.5rem]'>
        <div className='tw-mx-auto tw-flex  tw-max-w-screen-sm tw-flex-col'>
          <div className='  tw-flex tw-w-full tw-flex-col tw-items-center tw-rounded-lg tw-border-x-0  tw-border-t-[8px] tw-border-b-0 tw-border-solid tw-border-emerald-500  tw-pt-4 tw-shadow-lg'>
            {/* title \ description */}
            <div className='tw-px-4 '>
              <Typography className='tw-text-center tw-font-fam1 tw-text-2xl tw-font-bold md:tw-text-3xl'>
                Create a Tailor&#39;s DB account
              </Typography>
              <Typography className='tw-text-center tw-font-fam1 tw-text-xs tw-text-gray-400 md:tw-text-sm'>
                To start saving your clients measurements
              </Typography>
            </div>
            {/* form */}
            <div className='tw-mt-8 tw-grid tw-w-full tw-grid-cols-1 tw-gap-x-4 tw-gap-y-2 tw-px-4 sm:tw-grid-cols-2 '>
              {/* first_name */}
              <div className='tw-flex tw-flex-col tw-space-y-1'>
                <label
                  className='tw-font-fam1 tw-text-gray-500'
                  htmlFor='first_name'
                >
                  First Name
                </label>
                <OutlinedInput
                  id='first_name'
                  name='first_name'
                  type='text'
                  size='small'
                  onChange={handleChange}
                  // placeholder='Email'
                />
              </div>
              {/* last_name */}
              <div className='tw-flex tw-flex-col tw-space-y-1'>
                <label
                  className='tw-font-fam1 tw-text-gray-500'
                  htmlFor='last_name'
                >
                  Last name
                </label>
                <OutlinedInput
                  id='last_name'
                  name='last_name'
                  type='text'
                  size='small'
                  onChange={handleChange}
                  // placeholder='Email'
                />
              </div>
              {/* email */}
              <div className='tw-flex tw-flex-col tw-space-y-1'>
                <label
                  className='tw-font-fam1 tw-text-gray-500'
                  htmlFor='email'
                >
                  Business Email
                </label>
                <OutlinedInput
                  id='email'
                  name='email'
                  type='email'
                  size='small'
                  onChange={handleChange}
                  // placeholder='Email'
                />
              </div>
              {/* username */}
              <div className='tw-flex tw-flex-col tw-space-y-1'>
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
                  // placeholder='Email'
                />
              </div>
              {/* password 1 */}
              <div className='tw-flex tw-flex-col tw-space-y-1'>
                <label
                  className='tw-font-fam1 tw-text-gray-500'
                  htmlFor='password1'
                >
                  Password
                </label>
                <OutlinedInput
                  id='password1'
                  name='password1'
                  type={showPassword ? 'text' : 'password'}
                  onChange={handleChange}
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
              </div>
              {/* confirm password */}
              <div className='tw-flex tw-flex-col tw-space-y-1'>
                <label
                  className='tw-font-fam1 tw-text-gray-500'
                  htmlFor='password2'
                >
                  Confirm Password
                </label>
                <OutlinedInput
                  id='password2'
                  name='password2'
                  type={showPassword ? 'text' : 'password'}
                  onChange={handleChange}
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
              </div>
              {/* phone number */}
              <div className='tw-flex tw-flex-col tw-space-y-1'>
                <label
                  className='tw-font-fam1 tw-text-gray-500'
                  htmlFor='phone'
                >
                  Phone Number
                </label>
                <OutlinedInput
                  id='phone'
                  name='phone'
                  type='tel'
                  size='small'
                  onChange={handleChange}
                  // placeholder='Email'
                />
              </div>
              {/* gender */}
              <div className='tw-flex tw-flex-col tw-space-y-1'>
                <label
                  className='tw-font-fam1 tw-text-gray-500'
                  htmlFor='gender'
                >
                  Gender
                </label>
                <Select
                  id='gender'
                  name='gender'
                  value={selectValue}
                  size='small'
                  onChange={(e) => {
                    handleSelectChange(e);
                    handleChange(e);
                  }}
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value='Male'>Male</MenuItem>
                  <MenuItem value='Female'>Female</MenuItem>
                </Select>
              </div>
              {/* address */}
              <div className='tw-col-span-1 tw-flex tw-flex-col tw-space-y-1 sm:tw-col-span-2'>
                <label
                  className='tw-font-fam1 tw-text-gray-500'
                  htmlFor='address'
                >
                  Business Address
                </label>
                <OutlinedInput
                  multiline
                  id='address'
                  name='address'
                  type='text'
                  size='small'
                  onChange={handleChange}
                  // placeholder='Email'
                />
              </div>
            </div>
            {/* submit button */}
            <div className='tw-mt-8 tw-flex tw-w-full tw-justify-center tw-px-4 '>
              <LoadingButton
                loading={loadingState}
                variant='outlined'
                color='success'
                onClick={() => handleSubmit()}
                className='tw-w-[60%] tw-rounded-lg tw-bg-emerald-500 tw-py-2 tw-font-fam1 tw-text-sm tw-font-bold tw-capitalize tw-text-white hover:tw-bg-emerald-600 md:tw-text-base'
              >
                Create Account
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
                <Link href='/login' passHref>
                  <a className='tw-font-bold tw-text-emerald-500'>Sign in</a>
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

export default SignUpPage;

export async function getServerSideProps(context) {
  // console.log('context', context.req.cookies['tailors-db']);
  if (context.req.cookies['tailors-db']) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: {}, // will be passed to the page component as props
  };
}
