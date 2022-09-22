import { OutlinedInput, Typography } from '@mui/material';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingButton from '@mui/lab/LoadingButton';

const ForgotPasswordPage = () => {
  const [formValue, setFormValue] = useState({
    email: '',
  });
  const [loadingState, setLoadingState] = useState(false);
  const [emailCheck, setEmailCheck] = useState([]);
  console.log(emailCheck);
  const router = useRouter();

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/`).then((res) => {
      setEmailCheck(res.data);
    });
  }, []);

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    // check if the email is in the database
    setLoadingState(true);
    try {
      const emailCheckResult = emailCheck.filter(
        (email) => email.email === formValue.email
      );
      // check if the formvalue is empty
      if (formValue.email === '') {
        toast.error('Please enter your email', {
          theme: 'colored',
        });
        // check if the email follows the email format
      } else if (
        formValue.email.includes('@') &&
        formValue.email.includes('.')
      ) {
        // check if the email is in the database
        if (emailCheckResult.length > 0) {
          axios
            .post(
              `${process.env.NEXT_PUBLIC_BACKEND_URL}/dj-rest-auth/password/reset/`,
              formValue
            )
            .then(() => {
              toast.success('Email sent', {
                theme: 'colored',
              });
              router.push('/forgotpassword/emailsent');
            });
        } else {
          toast.error('Email not found. Please provide your registered email', {
            theme: 'colored',
          });
        }
      } else {
        toast.error('Please provide a valid email', {
          theme: 'colored',
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingState(false);
    }
  };

  return (
    <div className='tw-mx-auto tw-max-w-xl'>
      {/* back button to login page */}
      <div className='tw-flex tw-h-[5vh] tw-items-end tw-px-4 '>
        <div className='tw-flex tw-items-center tw-justify-center tw-text-xs md:tw-text-sm'>
          <Link href='/login' passHref>
            <a className='tw-text-gray-400'>
              <ArrowBackIcon />
            </a>
          </Link>
        </div>
      </div>
      <div className='tw-mx-auto tw-flex tw-h-[95vh] tw-max-w-screen-sm tw-flex-col tw-items-center tw-justify-center tw-px-3'>
        <div className='  tw-flex tw-w-full tw-flex-col tw-items-center tw-rounded-lg tw-border-x-0 tw-border-t-[8px] tw-border-b-0 tw-border-solid tw-border-emerald-500 tw-p-4 tw-shadow-lg sm:tw-w-[80%]'>
          {/* title \ description */}
          <div className=' '>
            <Typography className='tw-text-center tw-font-fam1 tw-text-2xl tw-font-bold sm:tw-text-3xl'>
              Forgot Password
            </Typography>
            <Typography className='tw-text-center tw-font-fam1 tw-text-xs tw-text-gray-400 sm:tw-text-sm '>
              Enter your email here and we&apos;ll forward you a link to reset
              your password
            </Typography>
          </div>
          {/* form */}
          <div className='tw-mt-8 tw-flex tw-w-full tw-flex-col tw-space-y-4  sm:tw-w-[70%]'>
            {/* email */}
            <div className='tw-flex tw-flex-col tw-space-y-1'>
              <label htmlFor='email' className='tw-font-fam1 tw-text-gray-500'>
                Email
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
          </div>
          {/* submit button */}
          <div className='tw-mt-8 tw-flex tw-w-full tw-justify-center  '>
            <LoadingButton
              onClick={() => handleSubmit()}
              loading={loadingState}
              variant='text'
              className='tw-w-[60%] tw-rounded-lg tw-bg-emerald-500 tw-py-2 tw-font-fam1 tw-text-sm tw-font-bold tw-capitalize tw-text-white hover:tw-bg-emerald-600 md:tw-text-base '
              // type='submit'
            >
              Next
            </LoadingButton>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ForgotPasswordPage;
