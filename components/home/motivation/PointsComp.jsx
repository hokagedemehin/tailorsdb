import { Typography } from '@mui/material';
import React from 'react';

const PointsComp = () => {
  return (
    <div>
      <div className='tw-bg-white tw-py-6 sm:tw-py-8 lg:tw-py-12'>
        <div className='tw-mx-auto tw-max-w-screen-2xl tw-px-4 md:tw-px-8'>
          {/* <!-- text - start --> */}
          <div
            data-aos='zoom-in'
            data-aos-duration='2000'
            className='tw-mb-10 md:tw-mb-16'
          >
            <Typography className='tw-mx-auto tw-max-w-screen-md tw-text-center tw-font-fam1 tw-text-lg tw-font-bold tw-text-gray-600 md:tw-text-2xl '>
              We want to provide the right tools for you to be able to zero in
              on what matters in your business
            </Typography>
          </div>
          {/* <!-- text - end --> */}

          <div className='tw-grid tw-gap-4 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4'>
            {/* <!-- feature - start --> */}
            <div
              data-aos='zoom-in'
              data-aos-duration='2000'
              data-aos-delay='100'
              className='md:tw-space-8 tw-flex tw-items-center tw-space-x-4'
            >
              <div className='tw-flex tw-h-12 tw-w-12 tw-flex-shrink-0 tw-items-center tw-justify-center tw-rounded-lg tw-bg-indigo-500 tw-text-white tw-shadow-lg md:tw-h-14 md:tw-w-14 md:tw-rounded-xl'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='tw-h-6 tw-w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
                  />
                </svg>
              </div>

              <div>
                <Typography className='tw-text-lg tw-font-semibold tw-text-emerald-600 md:tw-text-xl'>
                  Growth
                </Typography>
                <Typography className='tw-text-xs tw-text-gray-500'>
                  Focus more on growing your clientele and revenue.
                </Typography>
              </div>
            </div>
            {/* <!-- feature - end --> */}

            {/* <!-- feature - start --> */}
            <div
              data-aos='zoom-in'
              data-aos-duration='2000'
              data-aos-delay='200'
              className='md:tw-space-8 tw-flex tw-items-center tw-space-x-4'
            >
              <div className='tw-flex tw-h-12 tw-w-12 tw-flex-shrink-0 tw-items-center tw-justify-center tw-rounded-lg tw-bg-indigo-500 tw-text-white tw-shadow-lg md:tw-h-14 md:tw-w-14 md:tw-rounded-xl'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='tw-h-6 tw-w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                  />
                </svg>
              </div>

              <div>
                <Typography className='tw-text-lg tw-font-semibold tw-text-emerald-600 md:tw-text-xl'>
                  Security
                </Typography>
                <Typography className='tw-text-xs tw-text-gray-500'>
                  Safely secure your clients measurements.
                </Typography>
              </div>
            </div>
            {/* <!-- feature - end --> */}
            {/* <!-- feature - start --> */}
            <div
              data-aos='zoom-in'
              data-aos-duration='2000'
              data-aos-delay='300'
              className='md:tw-space-8 tw-flex tw-items-center tw-space-x-4'
            >
              <div className='tw-flex tw-h-12 tw-w-12 tw-flex-shrink-0 tw-items-center tw-justify-center tw-rounded-lg tw-bg-indigo-500 tw-text-white tw-shadow-lg md:tw-h-14 md:tw-w-14 md:tw-rounded-xl'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='tw-h-6 tw-w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z'
                  />
                </svg>
              </div>

              <div>
                <Typography className='tw-text-lg tw-font-semibold tw-text-emerald-600 md:tw-text-xl'>
                  Cloud
                </Typography>
                <Typography className='tw-text-xs tw-text-gray-500'>
                  Faster and easier way to add new clients
                </Typography>
              </div>
            </div>
            {/* <!-- feature - end --> */}
            {/* <!-- feature - start --> */}
            <div
              data-aos='zoom-in'
              data-aos-duration='2000'
              data-aos-delay='400'
              className='md:tw-space-8 tw-flex tw-items-center tw-space-x-4'
            >
              <div className='tw-flex tw-h-12 tw-w-12 tw-flex-shrink-0 tw-items-center tw-justify-center tw-rounded-lg tw-bg-indigo-500 tw-text-white tw-shadow-lg md:tw-h-14 md:tw-w-14 md:tw-rounded-xl'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='tw-h-6 tw-w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M13 10V3L4 14h7v7l9-11h-7z'
                  />
                </svg>
              </div>

              <div>
                <Typography className='tw-text-lg tw-font-semibold tw-text-emerald-600 md:tw-text-xl'>
                  Speed
                </Typography>
                <Typography className='tw-text-xs tw-text-gray-500'>
                  Quickly retrieve any client detail in seconds from your phone.
                </Typography>
              </div>
            </div>
            {/* <!-- feature - end --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointsComp;
