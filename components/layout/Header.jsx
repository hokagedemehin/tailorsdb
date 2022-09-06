import { cloneElement, useEffect, useState } from 'react';
// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import IconButton from '@mui/material/IconButton';
import { Avatar, Drawer } from '@mui/material';
import { faker } from '@faker-js/faker';
import MobileNavContent from './MobileNavContent';

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Header = (props) => {
  const router = useRouter();

  const [headerColor, setHeaderColor] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      if (!headerColor) setHeaderColor(true);
    } else {
      setHeaderColor(false);
    }
  };

  const [avatarInfo] = useState({
    name: faker.name.firstName(),
    image: faker.image.avatar(),
  });

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleMobileOpen = () => {
    setMobileOpen(true);
  };

  const handleMobileClose = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar
          className={`${
            !headerColor
              ? 'tw-bg-transparent'
              : 'tw-bg-white tw-bg-opacity-60 tw-backdrop-blur-lg tw-backdrop-filter'
          } tw-text-black `}
        >
          <Container maxWidth='xl'>
            <Toolbar disableGutters className=''>
              {/* large screens */}
              <div className='md:tw-flex md:tw-w-full '>
                <div className='tw-grow'>
                  <div
                    className='tw-relative tw-hidden tw-h-[2rem] tw-w-[2rem] tw-cursor-pointer  tw-overflow-hidden tw-rounded-full md:tw-flex'
                    onClick={() => router.push('/')}
                  >
                    <Image
                      src='https://res.cloudinary.com/dnc04r7sc/image/upload/v1662029267/tailors/icons/apple-icon-120x120_elwzmj.png'
                      alt='website logo'
                      layout='fill'
                      objectFit='cover'
                      placeholder='blur'
                      blurDataURL='https://res.cloudinary.com/dnc04r7sc/image/upload/v1662029266/tailors/icons/apple-icon-76x76_twlcsx.png'
                    />
                  </div>
                </div>

                <Box className='tw-hidden  md:tw-flex md:tw-space-x-4'>
                  <Link href='/' passHref>
                    <a
                      className={`tw-rounded-lg tw-border tw-border-x-0 tw-border-t-0  tw-py-1 tw-px-6 tw-font-fam6 tw-shadow-lg tw-transition-all tw-duration-300 tw-ease-in hover:tw-bg-gray-100 ${
                        router.asPath == '/' ? 'tw-border-solid' : ''
                      }`}
                    >
                      Home
                    </a>
                  </Link>
                  <Link href='/customers' passHref>
                    {/*  */}
                    <a
                      className={`tw-rounded-lg tw-border tw-border-x-0 tw-border-t-0  tw-py-1 tw-px-6 tw-font-fam6 tw-shadow-lg tw-transition-all tw-duration-300 tw-ease-in hover:tw-bg-gray-100 ${
                        router.asPath == '/customers' ? 'tw-border-solid' : ''
                      }`}
                    >
                      Customers
                    </a>
                  </Link>
                  <Link href='/login' passHref>
                    <a
                      className={`tw-rounded-lg tw-border tw-border-x-0  tw-border-t-0 tw-py-1 tw-px-6 tw-font-fam6 tw-shadow-lg tw-transition-all tw-duration-300 tw-ease-in hover:tw-bg-gray-100 ${
                        router.asPath == '/login' ? 'tw-border-solid' : ''
                      }`}
                    >
                      Login
                    </a>
                  </Link>
                </Box>
              </div>

              {/* small screens */}
              <div className='tw-flex tw-w-full tw-items-center tw-justify-between md:tw-hidden'>
                {/* icon button */}
                <div className='tw-w-full'>
                  <IconButton className='' onClick={handleMobileOpen}>
                    <MenuOpenIcon />
                  </IconButton>
                </div>
                <div className='tw-flex tw-w-full tw-justify-center'>
                  <div
                    className='tw-relative tw-h-[2.5rem] tw-w-[2.5rem] tw-cursor-pointer tw-overflow-hidden tw-rounded-full '
                    onClick={() => router.push('/')}
                  >
                    <Image
                      src='https://res.cloudinary.com/dnc04r7sc/image/upload/v1662029267/tailors/icons/apple-icon-120x120_elwzmj.png'
                      alt='website logo'
                      layout='fill'
                      objectFit='cover'
                      placeholder='blur'
                      blurDataURL='https://res.cloudinary.com/dnc04r7sc/image/upload/v1662029266/tailors/icons/apple-icon-76x76_twlcsx.png'
                    />
                  </div>
                </div>
                <div className='tw-flex tw-w-full tw-justify-end'>
                  <IconButton className=''>
                    <Avatar
                      alt={avatarInfo?.name}
                      src={avatarInfo?.image}
                      className='tw-h-[2rem] tw-w-[2rem]'
                    />
                  </IconButton>
                </div>
                <Drawer
                  anchor='left'
                  open={mobileOpen}
                  onClose={handleMobileClose}
                >
                  <MobileNavContent />
                </Drawer>
              </div>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
    </>
  );
};

export default Header;
