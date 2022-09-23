import React from 'react';
import { useRouter } from 'next/router';
import { Button, Typography } from '@mui/material';
import Image from 'next/image';
import Image404 from '../public/404/Image404.svg';
const Custom404 = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/');
  };
  return (
    <div>
      <div className='tw-bg-white'>
        <div className='tw-mx-auto tw-flex tw-min-h-screen tw-max-w-screen-lg tw-items-center tw-justify-center tw-px-4 md:tw-px-8'>
          <div className='tw-grid tw-gap-8 sm:tw-grid-cols-2'>
            {/* <!-- content - start --> */}
            <div className='tw-flex tw-flex-col tw-items-center tw-justify-center sm:tw-items-start md:tw-py-[4rem] lg:tw-py-[5rem]'>
              <Typography className='tw-mb-4 tw-text-3xl tw-font-semibold tw-uppercase tw-text-red-500 md:tw-text-4xl'>
                Hold Up!!!
              </Typography>
              <Typography className='tw-mb-2 tw-text-center tw-text-2xl tw-font-bold tw-text-gray-800 sm:tw-text-left md:tw-text-3xl'>
                Page not found
              </Typography>

              <Typography className='tw-mb-8 tw-text-center tw-text-gray-500 sm:tw-text-left md:tw-text-lg'>
                The page you&apos;re looking for doesn&apos;t exist.
              </Typography>

              <Button
                onClick={() => handleClick()}
                className='tw-transform tw-rounded tw-bg-emerald-500 tw-py-2 tw-px-4 tw-text-sm tw-font-medium tw-capitalize tw-text-white tw-shadow-sm tw-transition tw-duration-300 tw-ease-in-out hover:tw-scale-105 hover:tw-bg-emerald-600'
              >
                Go Back Home
              </Button>
            </div>
            {/* <!-- content - end --> */}

            {/* <!-- image - start --> */}
            <div className='tw-relative tw-h-80  tw-overflow-hidden  md:tw-h-auto'>
              <Image
                src={Image404}
                layout='fill'
                objectFit='contain'
                alt='404 Page'
                // className='w-full h-full object-contain object-center absolute inset-0'
              />
            </div>
            {/* <!-- image - end --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
