import {
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingButton from '@mui/lab/LoadingButton';
import axios from 'axios';

const PasswordResetFormComp = () => {
  const router = useRouter();
  // const reset =
  // console.log(router);
  const [showPassword, setShowPassword] = useState(false);
  const [loadingState, setLoadingState] = useState(false);
  const [formValue, setFormValue] = useState({
    new_password1: '',
    new_password2: '',
    uid: '',
    token: '',
  });

  console.log(formValue);

  useEffect(() => {
    if (router.query.reset) {
      setFormValue({
        ...formValue,
        uid: router.query.reset[0],
        token: router.query.reset[1],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

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
    setLoadingState(true);
    try {
      const {
        new_password1,
        new_password2,
        // uid,
        // token
      } = formValue;
      // check if the password fields are empty
      if (new_password1 === '' || new_password2 === '') {
        toast.error('Kindly fill the two password fields', {
          theme: 'coloured',
        });
      } else if (new_password1 !== new_password2) {
        toast.error('Passwords do not match', {
          theme: 'colored',
        });
      } else {
        await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/dj-rest-auth/password/reset/confirm/`,
          formValue
        );
        toast.success(
          'Password reset successful. You can login with your new credentials',
          {
            theme: 'colored',
          }
        );
        router.push('/login');
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
    <div>
      {' '}
      <div className='tw-mx-auto tw-flex tw-h-screen tw-max-w-screen-sm tw-flex-col tw-items-center tw-justify-center tw-px-3'>
        <div className='  tw-flex tw-w-full tw-flex-col tw-items-center tw-rounded-lg tw-border-x-0 tw-border-t-[8px] tw-border-b-0 tw-border-solid tw-border-emerald-500 tw-p-4 tw-shadow-lg sm:tw-w-[80%]'>
          {/* title \ description */}
          <div className=' '>
            <Typography className='tw-text-center tw-font-fam1 tw-text-2xl tw-font-bold sm:tw-text-3xl'>
              Enter your new password
            </Typography>
            <Typography className='tw-text-center tw-font-fam1 tw-text-xs tw-text-gray-400 sm:tw-text-sm '>
              Your new password would be used to login to your account
            </Typography>
          </div>
          {/* form */}
          <div className='tw-mt-8 tw-flex tw-w-full tw-flex-col tw-space-y-4  sm:tw-w-[70%]'>
            {/* password */}
            <div className='tw-flex tw-flex-col tw-space-y-1'>
              <label
                htmlFor='new_password1'
                className='tw-font-fam1 tw-text-gray-500'
              >
                Password
              </label>
              <OutlinedInput
                id='new_password1'
                name='new_password1'
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
                htmlFor='new_password2'
                className='tw-font-fam1 tw-text-gray-500'
              >
                Confirm Password
              </label>
              <OutlinedInput
                id='new_password2'
                name='new_password2'
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
          </div>
          {/* submit button */}
          <div className='tw-mt-8 tw-flex tw-w-full tw-justify-center  '>
            <LoadingButton
              loading={loadingState}
              onClick={() => handleSubmit()}
              variant='text'
              className='tw-w-[60%] tw-rounded-lg tw-bg-emerald-500 tw-py-2 tw-font-fam1 tw-text-sm tw-font-bold tw-capitalize tw-text-white hover:tw-bg-emerald-600 md:tw-text-base '
              // type='submit'
            >
              Save
            </LoadingButton>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PasswordResetFormComp;
