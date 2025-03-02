import { Grid } from "@mui/material";
import { useContext } from "react";

import {
  Header,
  Introduction,
  Facilities,
  Faq,
  Head,
  Footer,
} from "../components";
import { ColorModeContext } from "../providers/color-mode-provider/color-mode-provider.component";
import styles from "../styles/Home.module.css";
export default function Home() {
  const { state } = useContext(ColorModeContext);

  const META_TITLE =
    "وب سرویس شهرها و استان‌های ایران | اطلاعات جامع شهری و استانی";
  const META_DESCRIPTION =
    "وب سرویس شهرها و استان‌های ایران: دسترسی به اطلاعات جامع و به‌روز درباره شهرها و استان‌های ایران. انواع داده ها بر اساس دسته بندی های متفاوت را میتوانید داشته باشید.";

  return (
    <>
      <Head title={META_TITLE} description={META_DESCRIPTION} />
      <Grid
        width="100%"
        display="flex"
        justifyContent="center"
        container
        height="100vh"
        className={`${
          state === "light" ? styles.backgroundLight : styles.backgroundDark
        } ${state === "light" ? styles.darkWelcome : styles.lightWelcome}`}
      >
        <Header />
        <Introduction />
      </Grid>
      <Facilities />
      <Faq />
      <Footer />
    </>
  );
}
