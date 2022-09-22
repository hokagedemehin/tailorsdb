import { Button, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import mailSent from '../../public/forgotPassword/mailSent.png';
const EmailSentPage = () => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push('/login');
  };

  return (
    <div>
      <div className='tw-mx-auto tw-flex tw-h-screen tw-max-w-screen-sm tw-flex-col tw-items-center tw-justify-center tw-px-3'>
        <div className='  tw-items-centers tw-flex tw-w-full tw-flex-col'>
          {/* Image */}
          <div className=' tw-relative tw-h-[15rem] tw-w-full sm:tw-h-[20rem]'>
            <Image
              placeholder='blur'
              objectFit='contain'
              layout='fill'
              src={mailSent}
              alt='email sent'
            />
          </div>
          {/* title \ description */}
          <div className=' '>
            <Typography className='tw-text-center tw-font-fam1 tw-text-2xl tw-font-bold sm:tw-text-3xl'>
              Password reset email sent!
            </Typography>
            <Typography className='tw-text-center tw-font-fam1 tw-text-xs tw-text-gray-400 sm:tw-text-sm '>
              Check your email and follow the instructions to reset your
              password.
            </Typography>
          </div>

          {/* submit button */}
          <div className='tw-mt-10 tw-flex tw-w-full tw-justify-center  '>
            <Button
              onClick={() => handleSubmit()}
              variant='text'
              className='tw-w-[60%] tw-rounded-lg tw-bg-emerald-500 tw-py-2 tw-font-fam1 tw-text-sm tw-font-bold tw-capitalize tw-text-white hover:tw-bg-emerald-600 md:tw-text-base '
              // type='submit'
            >
              Back to Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSentPage;
