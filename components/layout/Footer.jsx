import {
  SiNextdotjs,
  SiVercel,
  SiInstagram,
  SiTwitter,
  SiLinkedin,
  SiGithub,
} from 'react-icons/si';
import { GrAdd } from 'react-icons/gr';
import { Divider } from '@mui/material';
import Link from 'next/link';
const Footer = () => {
  const year = new Date();
  return (
    <div className=''>
      <div className='tw-bg-white tw-pt-4 sm:tw-pt-10 lg:tw-pt-12'>
        <Divider className='tw-bg-gray-50' />
        <footer className='tw-px-4 md:tw-px-8'>
          <div className=' tw-mx-auto tw-flex tw-max-w-screen-xl tw-flex-col tw-items-center tw-justify-between tw-gap-4 tw-border-t tw-border-b tw-py-6 md:tw-flex-row'>
            {/* <!-- nav - start --> */}
            <nav className='tw-flex tw-flex-wrap tw-justify-center tw-gap-x-4 tw-gap-y-2 md:tw-justify-start md:tw-gap-6'>
              <Link href='/' passHref>
                <a className='tw-text-gray-500 tw-transition tw-duration-300 hover:-tw-translate-y-1 hover:tw-text-sky-500 active:tw-text-sky-600'>
                  Home
                </a>
              </Link>
              <Link href='/customers' passHref>
                <a className='tw-text-gray-500 tw-transition tw-duration-300 hover:-tw-translate-y-1 hover:tw-text-sky-500 active:tw-text-sky-600'>
                  Customers
                </a>
              </Link>
              <Link href='#' passHref>
                <a className='tw-text-gray-500 tw-transition tw-duration-300 hover:-tw-translate-y-1 hover:tw-text-sky-500 active:tw-text-sky-600'>
                  Sponsor
                </a>
              </Link>

              {/* <a
                href='#'
                className='tw-text-gray-500 tw-transition tw-duration-300 hover:-tw-translate-y-1 hover:tw-text-sky-500 active:tw-text-sky-600'
              >
                Sponsor
              </a> */}
            </nav>
            {/* <!-- nav - end --> */}
            {/* <!-- social - start --> */}
            <div className='tw-flex tw-items-center tw-justify-center tw-gap-4'>
              <a
                href='#'
                target='_blank'
                className='tw-text-xl tw-text-gray-400 tw-transition tw-duration-300 hover:-tw-translate-y-1 hover:tw-text-gray-500 active:tw-text-gray-600'
              >
                <SiInstagram />
              </a>

              <a
                href='#'
                target='_blank'
                className='tw-text-xl tw-text-gray-400 tw-transition tw-duration-300 hover:-tw-translate-y-1 hover:tw-text-gray-500 active:tw-text-gray-600'
              >
                <SiTwitter />
              </a>

              <a
                href='#'
                target='_blank'
                className='tw-text-xl tw-text-gray-400 tw-transition tw-duration-300 hover:-tw-translate-y-1 hover:tw-text-gray-500 active:tw-text-gray-600'
              >
                <SiLinkedin />
              </a>

              <a
                href='#'
                target='_blank'
                className='tw-text-xl tw-text-gray-400 tw-transition tw-duration-300 hover:-tw-translate-y-1 hover:tw-text-gray-500 active:tw-text-gray-600'
              >
                <SiGithub />
              </a>
            </div>
            {/* <!-- social - end --> */}
          </div>

          <div className='tw-py-2 tw-text-center tw-text-sm tw-text-gray-400'>
            © {year.getFullYear()} - Tailors DB. All rights reserved.
          </div>
        </footer>
      </div>
      <div className='tw-flex tw-items-center tw-justify-center tw-space-x-2 tw-bg-gray-100 tw-py-2'>
        <p className='tw-text-gray-500'>Powered by </p>
        <a
          href='https://nextjs.org/learn/foundations/about-nextjs?utm_source=next-site&utm_medium=homepage-cta&utm_campaign=next-website'
          target='_blank'
          rel='noopener noreferrer'
          className='tw-flex tw-items-center tw-justify-center tw-space-x-1'
        >
          <SiNextdotjs /> <span>Next.js</span>
        </a>
        <GrAdd />
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          className='tw-flex tw-items-center tw-justify-center tw-space-x-1'
          rel='noopener noreferrer'
        >
          <SiVercel /> <span>Vercel</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
