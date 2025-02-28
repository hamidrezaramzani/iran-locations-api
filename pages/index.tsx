import { CssBaseline, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useContext, useMemo } from "react";

import {
  Header,
  Introduction,
  Facilities,
  Faq,
  Head,
  Footer,
} from "../components";
import { ThemeContext } from "../context/ThemeProvider";
import { getMuiTheme } from "../lib/theme.js";
import styles from "../styles/Home.module.css";
export default function Home() {
  const { state } = useContext(ThemeContext);
  const theme = useMemo(() => getMuiTheme(state), [state]);

  const META_TITLE =
    "وب سرویس شهرها و استان‌های ایران | اطلاعات جامع شهری و استانی";
  const META_DESCRIPTION =
    "وب سرویس شهرها و استان‌های ایران: دسترسی به اطلاعات جامع و به‌روز درباره شهرها و استان‌های ایران. انواع داده ها بر اساس دسته بندی های متفاوت را میتوانید داشته باشید.";

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
          state === "light" ? styles.backgroundLight : styles.backgroundDark
        } ${state === "light" ? styles.darkWelcome : styles.lightWelcome}`}
      >
        <Header />
        <Introduction />
      </Grid>
      <Facilities />
      <Faq />
      <Footer />
    </ThemeProvider>
  );
}
