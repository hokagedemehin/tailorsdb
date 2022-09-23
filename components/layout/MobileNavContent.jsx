import { Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
// import InputIcon from '@mui/icons-material/Input';
// import { useContextData } from '../../lib/GlobalContext';

const MobileNavContent = () => {
  const router = useRouter();
  // const { userProfile } = useContextData();

  return (
    <div className='tw-w-[15rem] '>
      {/* logo & name */}
      <div className='tw-flex tw-items-center tw-space-x-2 tw-p-3'>
        <div className='tw-relative tw-h-[3rem] tw-w-[3rem] tw-cursor-pointer tw-overflow-hidden tw-rounded-full '>
          <Image
            src='https://res.cloudinary.com/dnc04r7sc/image/upload/v1662029267/tailors/icons/apple-icon-120x120_elwzmj.png'
            alt='website logo'
            layout='fill'
            objectFit='cover'
            placeholder='blur'
            blurDataURL='https://res.cloudinary.com/dnc04r7sc/image/upload/v1662029266/tailors/icons/apple-icon-76x76_twlcsx.png'
          />
        </div>
        <Typography className='tw-bg-gradient-to-r tw-from-pink-500 tw-to-violet-500 tw-bg-clip-text tw-font-fam4 tw-text-xl tw-font-bold tw-tracking-wider tw-text-transparent'>
          Tailors DB
        </Typography>
      </div>
      {/* links */}
      <div className='tw-mt-4 tw-flex tw-flex-col tw-space-y-2'>
        {/* home */}
        <div className=''>
          <Link href='/' passHref>
            <a
              className={`${
                router.asPath == '/'
                  ? 'tw-bg-purple-500 tw-text-white hover:tw-bg-purple-600'
                  : 'tw-text-gray-500 hover:tw-text-purple-500'
              } tw-flex tw-items-center tw-space-x-4 tw-px-4 tw-py-2  tw-transition-all tw-duration-300 tw-ease-in  `}
            >
              <HomeIcon />
              <span
                className={`tw-font-fam1 tw-text-lg tw-font-bold tw-tracking-wider`}
              >
                Home
              </span>
            </a>
          </Link>
        </div>
        {/* clients */}
        <div className=''>
          <Link href='/clients' passHref>
            <a
              className={`${
                router.asPath == '/clients'
                  ? 'tw-bg-purple-500 tw-text-white hover:tw-bg-purple-600'
                  : 'tw-text-gray-500 hover:tw-text-purple-500'
              } tw-flex tw-items-center tw-space-x-4 tw-px-4 tw-py-2  tw-transition-all tw-duration-300 tw-ease-in  `}
            >
              <PeopleAltIcon />
              <span
                className={`tw-font-fam1 tw-text-lg tw-font-bold tw-tracking-wider`}
              >
                Clients
              </span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNavContent;
