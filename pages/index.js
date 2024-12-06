import { CssBaseline, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useContext, useMemo } from 'react';

import { Facilities } from '../components/Facilities/Facilities.jsx';
import { Faq } from '../components/FAQ/Faq.jsx';
import Footer from '../components/Footer/Footer';
import { Head } from '../components/Head/Head.jsx';
import Header from '../components/Header/Header';
import Introduction from '../components/Header/Introduction/Introduction';
import { ThemeContext } from '../context/ThemeProvider';
import { getMuiTheme } from '../lib/theme.js';
import styles from '../styles/Home.module.css';
export default function Home({ domain }) {
  const { state } = useContext(ThemeContext);
  const theme = useMemo(() => getMuiTheme(state), [state]);

  const META_TITLE =
    'وب سرویس شهرها و استان‌های ایران | اطلاعات جامع شهری و استانی';
  const META_DESCRIPTION =
    'وب سرویس شهرها و استان‌های ایران: دسترسی به اطلاعات جامع و به‌روز درباره شهرها و استان‌های ایران. انواع داده ها بر اساس دسته بندی های متفاوت را میتوانید داشته باشید.';

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head title={META_TITLE} description={META_DESCRIPTION} />
      <Grid
        width="100%"
        display="flex"
        justifyContent="center"
        container
        height="100vh"
        className={`${
          state === 'light' ? styles.backgroundLight : styles.backgroundDark
        } ${state === 'light' ? styles.darkWelcome : styles.lightWelcome}`}
      >
        <Header />
        <Introduction domain={domain} />
      </Grid>
      <Facilities />
      <Faq />
      <Footer />
    </ThemeProvider>
  );
}

export async function getServerSideProps({ req }) {
  const domain = req.headers.host;

  return {
    props: {
      domain,
    },
  };
}
