import { Grid, Typography } from '@mui/material'
import Head from 'next/head'
import Examples from '../components/Examples/Examples';
import Guide from '../components/Guide/Guide';
import Header from '../components/Header/Header';
import Welcome from '../components/Header/Welcome/Welcome';
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <>
      <Head>
        <title>API - iran state and cities</title>
        <meta name="description" content="مستندات ای پی آی شهر و استان های ایران " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid width="100%" display="flex" justifyContent="center" container height="100vh" className={styles.welcome}>
        <Header />
        <Welcome />
      </Grid>
      <Examples />
      <Guide />
    </>
  )
}
