import { ThemeContext } from '../context/ThemeProvider';
import { CssBaseline, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import { useContext, useMemo } from 'react';
import Examples from '../components/Examples/Examples';
import Guide from '../components/Guide/Guide';
import Header from '../components/Header/Header';
import Welcome from '../components/Header/Welcome/Welcome';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from "../styles/Home.module.css";
export default function Home({ domain }) {

  const {state} = useContext(ThemeContext);
  const theme =useMemo(
    () =>
      createTheme({
        palette: {
          mode: state,
        },
      }),
    [state],
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>شهر و استان های ایران</title>
        <meta name="description" content="مستندات ای پی آی شهر و استان های ایران " />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Grid width="100%" display="flex" justifyContent="center" container height="100vh" className={state === "light" ? styles.darkWelcome : styles.lightWelcome}>
        <Header />
        <Welcome />
      </Grid>
      <Examples />
      <Guide domain={domain} />
    </ThemeProvider>
  )
}


export async function getServerSideProps({ req }) {
  const domain = req.headers.host;

  return { props: { domain } };
}