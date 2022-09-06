import React from 'react';
import Image from 'next/image';
import form from '../../../public/home/content/form.png';
import cloud from '../../../public/home/content/cloud.png';
import search from '../../../public/home/content/search.png';
import allscreens from '../../../public/home/content/allscreens.png';

import { Typography } from '@mui/material';
const ContentComponent = () => {
  return (
    <div className='tw-mt-8 tw-bg-white tw-pb-6 sm:tw-pb-8 md:tw-mt-12 lg:tw-pb-12 xl:tw-mt-16'>
      <div className='tw-mx-auto tw-max-w-screen-2xl tw-space-y-10 tw-px-4 md:tw-space-y-20 md:tw-px-8'>
        {/* record keeping */}
        <div className='tw-flex tw-flex-col-reverse tw-items-center md:tw-flex-row'>
          <div
            data-aos='fade-up'
            data-aos-duration='2000'
            className='tw-relative tw-h-[10rem] tw-w-[20rem] tw-overflow-hidden tw-rounded-lg tw-shadow-md md:tw-h-[15rem]  md:tw-w-fit md:tw-flex-1 lg:tw-h-[20rem]  '
          >
            <Image
              layout='fill'
              objectFit='contain'
              className=''
              src={form}
              alt='content image'
              placeholder='blur'
            />
          </div>
          <div
            data-aos='fade-down'
            data-aos-duration='2000'
            className='tw-mb-4 tw-space-y-2 tw-px-3 md:tw-mb-0 md:tw-flex-1 lg:tw-px-6'
          >
            <Typography className='tw-pt-3 tw-pb-3 tw-font-fam3 tw-text-2xl tw-font-black tw-text-purple-600 lg:tw-pt-6 lg:tw-text-4xl'>
              Record Keeping
            </Typography>
            <Typography className='tw-pb-3 tw-font-fam1 tw-text-sm tw-font-semibold tw-text-gray-500 md:tw-text-justify lg:tw-text-lg '>
              {' '}
              Select the right form based on your client needs and collect your
              clients measurement in a more concise way
            </Typography>
          </div>
        </div>
        {/* safe & secure */}
        <div className='tw-safe tw-flex tw-h-full  tw-flex-col-reverse tw-items-center md:tw-flex-row-reverse '>
          <div
            data-aos='fade-down'
            data-aos-duration='2000'
            className='tw-relative tw-h-[10rem] tw-w-[20rem] tw-overflow-hidden tw-rounded-lg tw-shadow-md md:tw-h-[15rem]  md:tw-w-fit md:tw-flex-1 lg:tw-h-[20rem] '
          >
            <Image
              layout='fill'
              objectFit='contain'
              className=''
              src={cloud}
              placeholder='blur'
              alt='content image'
            />
          </div>
          <div
            data-aos='fade-up'
            data-aos-duration='2000'
            className='tw-mb-4 tw-px-3 md:tw-mb-0 md:tw-flex-1 lg:tw-px-6'
          >
            <Typography className='tw-pt-3 tw-pb-3 tw-font-fam3 tw-text-2xl tw-font-black tw-text-purple-500 lg:tw-pt-6 lg:tw-text-4xl'>
              Safe & Secure
            </Typography>
            <Typography className='tw-pb-3 tw-font-fam1 tw-text-sm tw-font-semibold tw-text-gray-500 md:tw-text-justify lg:tw-text-lg '>
              Never lose your clients measurements again. All information
              collected is stored in a safe and robust database that can scale
              on request
            </Typography>
          </div>
        </div>
        {/* quick search */}
        <div className='tw-flex tw-h-full tw-flex-col-reverse tw-items-center md:tw-flex-row '>
          <div
            data-aos='fade-up'
            data-aos-duration='2000'
            className='tw-relative tw-h-[10rem] tw-w-[20rem] tw-overflow-hidden tw-rounded-lg tw-shadow-md md:tw-h-[15rem]  md:tw-w-fit md:tw-flex-1 lg:tw-h-[20rem] '
          >
            <Image
              layout='fill'
              objectFit='contain'
              className=''
              src={search}
              placeholder='blur'
              alt='content image'
            />
          </div>
          <div
            data-aos='fade-down'
            data-aos-duration='2000'
            className='tw-mb-4 tw-px-3 md:tw-mb-0 md:tw-flex-1 lg:tw-px-6'
          >
            <Typography className='tw-pt-3 tw-pb-3 tw-font-fam3 tw-text-2xl tw-font-black tw-text-purple-500 lg:tw-pt-6 lg:tw-text-4xl'>
              Quick Search
            </Typography>
            <Typography className='tw-pb-3 tw-font-fam1 tw-text-sm tw-font-semibold tw-text-gray-500 md:tw-text-justify lg:tw-text-lg '>
              Easily search through your list of clients and find the right
              details that you need in seconds
            </Typography>
          </div>
        </div>
        {/* full access */}
        <div className='tw-screens tw-flex tw-h-full tw-flex-col-reverse tw-items-center md:tw-flex-row-reverse  '>
          <div
            data-aos='fade-down'
            data-aos-duration='2000'
            className='tw-relative tw-h-[10rem] tw-w-[20rem] tw-overflow-hidden tw-rounded-lg tw-shadow-md md:tw-h-[15rem]  md:tw-w-fit md:tw-flex-1 lg:tw-h-[20rem] '
          >
            <Image
              layout='fill'
              objectFit='contain'
              className=''
              src={allscreens}
              placeholder='blur'
              alt='content image'
            />
          </div>
          <div
            data-aos='fade-up'
            data-aos-duration='2000'
            className='tw-mb-4 tw-px-3 md:tw-mb-0 md:tw-flex-1 lg:tw-px-6'
          >
            <Typography className='tw-pt-3 tw-pb-3 tw-font-fam3 tw-text-2xl tw-font-black tw-text-purple-500 lg:tw-pt-6 lg:tw-text-4xl'>
              Full Access
            </Typography>
            <Typography className='tw-pb-3 tw-font-fam1 tw-text-sm tw-font-semibold tw-text-gray-500 md:tw-text-justify lg:tw-text-lg '>
              Access all your clients measurements from any device, any where in
              the world at any time.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentComponent;
