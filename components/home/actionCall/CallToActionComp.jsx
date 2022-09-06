import React from 'react';
// import { useRouter } from 'next/router';
import Image from 'next/image';
import { Button, Typography } from '@mui/material';
import action2 from '../../../public/home/actioncall/action2.jpg';
const CallToActionComponent = () => {
  // const router = useRouter();
  // const handleClick = (e, href) => {
  //   e.preventDefault();
  //   router.push(href);
  //   // console.log("router: ", router.pathname);
  // };

  return (
    <div>
      <div
        data-aos='fade-up'
        data-aos-duration='2000'
        className='tw-bg-white tw-py-6 sm:tw-py-8 lg:tw-py-12'
      >
        <div className='tw-mx-auto tw-max-w-screen-2xl tw-px-4 md:tw-px-8'>
          <div className='tw-flex tw-flex-col tw-overflow-hidden tw-rounded-lg tw-bg-gray-200 sm:tw-flex-row md:tw-h-80'>
            {/* <!-- image - start --> */}
            <div className='tw-relative tw-order-first tw-h-48 tw-w-full tw-bg-gray-300 sm:tw-order-none sm:tw-h-auto sm:tw-w-1/2 lg:tw-w-2/5'>
              <Image
                src={action2}
                placeholder='blur'
                layout='fill'
                objectFit='cover'
                loading='lazy'
                alt='Call to action'
                // className="w-full h-full object-cover object-center"
              />
            </div>
            {/* <!-- image - end --> */}

            {/* <!-- content - start --> */}
            <div className='tw-flex tw-w-full tw-flex-col tw-p-4 sm:tw-w-1/2 sm:tw-p-8 lg:tw-w-3/5'>
              <Typography
                variant='h2'
                className='tw-mb-4 tw-font-fam1 tw-text-xl tw-font-bold tw-text-gray-800 md:tw-text-2xl lg:tw-text-4xl'
              >
                Join Now
              </Typography>

              <Typography className='tw-mb-8 tw-max-w-md tw-font-fam3 tw-text-base tw-text-gray-600 md:tw-text-lg'>
                Begin your journey in discovering a flexible way to get and
                store your clients measurements forever
              </Typography>

              <div className='tw-mt-auto '>
                <Button className='tw-rounded-lg tw-bg-purple-500 tw-px-10 tw-py-2 tw-font-fam6 tw-capitalize tw-text-white tw-shadow-md tw-transition-all tw-duration-300 tw-ease-in hover:tw-bg-purple-600'>
                  Start Now
                </Button>
              </div>
            </div>
            {/* <!-- content - end --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionComponent;
