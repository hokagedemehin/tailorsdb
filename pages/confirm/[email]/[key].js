import { Button, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const EmailConfirmationPage = () => {
  const router = useRouter();
  const [loadingState, setloadingState] = useState(false);
  const [emailCheck, setEmailCheck] = useState([]);
  // console.log(router);
  const emailQuery = router.query.email;
  console.log('emailCheck :>> ', emailCheck);
  useEffect(() => {
    // perform axios get on /sers/emails/
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users?email=${emailQuery}`)
      .then((res) => {
        // console.log(res);
        setEmailCheck(res.data);
      });
  }, [emailQuery]);

  const handleSubmit = async () => {
    try {
      setloadingState(true);
      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/dj-rest-auth/registration/verify-email/`,
        {
          key: router?.query?.key,
        }
      );
      toast.success(
        'Your email has been verified. Kindly login to your account.',
        {
          theme: 'colored',
        }
      );
      router.push('/profile');
    } catch (error) {
      console.error(error);
      toast.error(
        'There was an error verifying your email. Kindly try again or request for a new link in your profile.',
        {
          theme: 'colored',
        }
      );
    } finally {
      setloadingState(false);
    }
  };

  const handleProfileRedirect = () => {
    router.push('/profile');
  };

  return (
    <div>
      <div
        className=' tw-mt-6 tw-flex tw-flex-col tw-items-center tw-justify-center tw-p-4'
        role='main'
      >
        <div className='tw-relative tw-h-[8rem] tw-w-[8rem] tw-overflow-hidden tw-rounded-full tw-border tw-border-dotted tw-shadow-md'>
          <Image
            alt='Tailors DB Logo'
            src='https://res.cloudinary.com/dnc04r7sc/image/upload/v1662029268/tailors/icons/ms-icon-310x310_npff2f.png'
            layout='fill'
          />
        </div>

        <Typography className='tw-mt-6 tw-font-fam4 tw-text-xl tw-font-extrabold tw-text-purple-500 md:tw-text-3xl'>
          Confirm E-mail Address
        </Typography>

        {emailCheck.length === 0 && (
          <div className='tw-flex tw-flex-col tw-space-y-3'>
            <Typography className='tw-my-2 tw-text-center tw-text-sm tw-font-semibold md:tw-text-base'>
              This link is invalid or has expired. Kindly request for a new link
              in your profile.
            </Typography>
            <div className='tw-flex tw-justify-center'>
              <Button
                onClick={handleProfileRedirect}
                endIcon={<ArrowForwardIcon />}
                className=' tw-rounded-lg tw-bg-sky-500 tw-px-6 tw-py-1 tw-text-xl tw-font-semibold tw-normal-case tw-text-white tw-transition-all tw-duration-300 tw-ease-in hover:tw-bg-sky-600'
              >
                Go to profile page
              </Button>
            </div>
          </div>
        )}

        {emailCheck.length > 0 && !emailCheck[0]?.verified && (
          <div className='tw-flex tw-flex-col tw-space-y-1'>
            <Typography className='tw-my-2 tw-text-center tw-text-sm tw-font-semibold md:tw-text-base'>
              Please confirm your email address by clicking the button below.
            </Typography>
            <div className='tw-flex tw-items-center tw-justify-center tw-space-x-2'>
              <Typography>
                <span className='tw-font-semibold'>Email:</span>{' '}
              </Typography>
              <Typography>{emailCheck[0]?.user?.email}</Typography>
            </div>
            <div className='tw-flex tw-items-center tw-justify-center tw-space-x-2'>
              <Typography>
                <span className='tw-font-semibold'>Username:</span>{' '}
              </Typography>
              <Typography>{emailCheck[0]?.user?.username}</Typography>
            </div>
            <div className='tw-flex tw-items-center tw-justify-center tw-space-x-2'>
              <Typography>
                <span className='tw-font-semibold'>Name:</span>{' '}
              </Typography>
              <div className='tw-flex tw-space-x-1'>
                {' '}
                <Typography>{emailCheck[0]?.user?.first_name}</Typography>
                <Typography>{emailCheck[0]?.user?.last_name}</Typography>
              </div>
            </div>
            <div className='tw-flex tw-justify-center'>
              <LoadingButton
                loading={loadingState}
                onClick={handleSubmit}
                className=' tw-rounded-lg tw-bg-emerald-500 tw-px-6 tw-py-1 tw-text-xl tw-font-semibold tw-normal-case tw-text-white tw-transition-all tw-duration-300 tw-ease-in hover:tw-bg-emerald-600'
              >
                Confirm Email
              </LoadingButton>
            </div>
          </div>
        )}

        {emailCheck.length > 0 && emailCheck[0]?.verified && (
          <div className='tw-flex tw-flex-col tw-space-y-3'>
            <Typography className='tw-my-2 tw-text-center tw-text-sm tw-font-semibold md:tw-text-base'>
              Your email has already been verified. Kindly login to your
              profile.
            </Typography>
            <div className='tw-flex tw-justify-center'>
              <Button
                onClick={handleProfileRedirect}
                endIcon={<ArrowForwardIcon />}
                className=' tw-rounded-lg tw-bg-sky-500 tw-px-6 tw-py-1 tw-text-xl tw-font-semibold tw-normal-case tw-text-white tw-transition-all tw-duration-300 tw-ease-in hover:tw-bg-sky-600'
              >
                Go to profile page
              </Button>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default EmailConfirmationPage;

// /dj-rest-auth/registration/verify-email/
