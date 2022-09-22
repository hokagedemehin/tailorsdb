import Head from 'next/head';
import '../styles/globals.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';
import { Router } from 'next/router';
import TopBarProgress from 'react-topbar-progress-indicator';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import GlobalContext from '../lib/GlobalContext';
import { CssBaseline } from '@mui/material';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import UserProvider from "../services/context/userContext";
import { SWRConfig } from 'swr';
// const progress = new ProgressBar({
//   size: 4,
//   color: "#2563eb",
//   className: "z-50",
//   delay: 100,
// });

// Router.events.on("routeChangeStart", progress.start);

// Router.events.on("routeChangeComplete", progress.finish);

// Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(false);

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
      },
    },
    palette: {
      mode: 'light',
    },
  });

  useEffect(() => {
    // gsap.to(boxRef.current, { rotation: '360' });
    AOS.init({
      easing: 'ease-out-back',
    });
  }, []);

  Router.events.on('routeChangeStart', () => {
    setProgress(true);
  });

  Router.events.on('routeChangeComplete', () => {
    setProgress(false);
  });

  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      {progress && <TopBarProgress />}
      <StyledEngineProvider injectFirst>
        <DefaultSeo {...SEO} />
        <SWRConfig>
          <GlobalContext>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <Component {...pageProps} />
              </LocalizationProvider>
            </ThemeProvider>
          </GlobalContext>
        </SWRConfig>
      </StyledEngineProvider>
    </>
    // <UserProvider>
    //   <Component {...pageProps} />
    // </UserProvider>
  );
}

export default MyApp;
