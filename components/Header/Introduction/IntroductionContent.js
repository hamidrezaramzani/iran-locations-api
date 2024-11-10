import React, { useContext } from "react";
import { Box, Grid, Typography } from "@mui/material";
import styles from "./styles.module.css";
import { ThemeContext } from "../../../context/ThemeProvider";

const Introduction = () => {
  const { state } = useContext(ThemeContext);

  return (
    <Grid
      xs={12}
      md={12}
      flexDirection="column"
      justifyContent="center"
      display="flex"
      item
      className={styles.welcome}
      marginTop={2}
    >
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <Typography
          component="h1"
          textAlign="center"
          fontFamily="iran-yekan-bold"
          fontSize="35px"
        >
          {" "}
          وب سرویس
          <span> ‌شهر و استان </span>
          های ایران
        </Typography>
        <Typography
          color={state === "light" ? "black" : "white"}
          textAlign="center"
          paddingY="15px"
          fontSize="14px"
          fontFamily="iran-yekan"
          width="50%"
        >
          وب‌سایت &qout;وب سرویس شهر و استان‌های ایران&qout; API‌ای برای دسترسی
          به اطلاعات شهرها و استان‌های ایران فراهم می‌کند، که شامل نام، کد و
          موقعیت جغرافیایی آن‌هاست. این سرویس در اپلیکیشن‌های مختلف مانند
          حمل‌ونقل، رزرو و فروشگاه‌های آنلاین قابل استفاده است.
        </Typography>
      </Box>
    </Grid>
  );
};

export default Introduction;
