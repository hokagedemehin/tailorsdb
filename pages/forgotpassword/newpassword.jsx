import {
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useRouter } from 'next/router';

const NewPasswordPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  });

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
  const handleSubmit = () => {
    router.push('/login');
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
                htmlFor='confirmPassword'
                className='tw-font-fam1 tw-text-gray-500'
              >
                Confirm Password
              </label>
              <OutlinedInput
                id='confirmPassword'
                name='confirmPassword'
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
            <Button
              onClick={() => handleSubmit()}
              variant='text'
              className='tw-w-[60%] tw-rounded-lg tw-bg-emerald-500 tw-py-2 tw-font-fam1 tw-text-sm tw-font-bold tw-capitalize tw-text-white hover:tw-bg-emerald-600 md:tw-text-base '
              // type='submit'
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPasswordPage;
