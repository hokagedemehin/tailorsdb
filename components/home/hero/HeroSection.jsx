import React from 'react';
import Image from 'next/image';
// import { useRouter } from 'next/router';
import { Button, Typography } from '@mui/material';
import hero6 from '../../../public/home/hero/hero6.jpg';

const HeroSection = () => {
  // const router = useRouter();
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   router.push('/clients');
  //   // console.log(router.push("/services"));
  // };
  return (
    <div>
      <div className='tw-mx-4 tw-mt-7 tw-flex tw-flex-col tw-items-center tw-space-y-4 md:tw-flex-row md:tw-justify-between md:tw-space-x-6 md:tw-space-y-0'>
        {/* content */}
        <div className='tw-w-full md:tw-w-[60%] '>
          <div className='tw-flex tw-w-[100%] tw-flex-col tw-items-center tw-space-y-4 md:tw-items-start'>
            <div className='tw-flex tw-flex-col tw-items-center tw-justify-center tw-space-y-0 tw-text-2xl tw-font-black md:tw-items-start md:tw-text-4xl'>
              <span className='tw-text-center md:tw-text-start'>
                Revolutionary way to
              </span>{' '}
              <div className='tw-flex tw-items-center tw-space-x-2'>
                <span className=' tw-text-emerald-500'>store</span>
                <span>client&apos;s</span>
              </div>
              <span className='tw-text-purple-600'>measurements</span>
            </div>
            <Typography
              variant='body2'
              className='tw-w-[90%] tw-text-center tw-font-fam2 tw-text-xs tw-font-bold tw-text-gray-400 sm:tw-w-[70%] md:tw-text-left md:tw-text-base'
            >
              Get and save all your client&apos;s measurements safely and access
              them anytime, anywhere. No more lost data. No more stress.
            </Typography>
            <div className='tw-py-3 md:tw-pt-6'>
              <Button
                variant='outlined'
                color='success'
                className='tw-w-fit tw-border-indigo-500 tw-px-8 tw-font-fam6 tw-capitalize tw-text-indigo-500 hover:tw-border-indigo-500 hover:tw-bg-indigo-500 hover:tw-text-white'
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
        {/* hero image */}
        <div className=''>
          <div className='tw-relative tw-h-[18rem] tw-w-[20rem] tw-overflow-hidden tw-rounded-xl tw-shadow-lg md:tw-h-[25rem] md:tw-w-[25rem]'>
            <Image
              layout='fill'
              src={hero6}
              placeholder='blur'
              alt='Hero image'
              objectFit='cover'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
