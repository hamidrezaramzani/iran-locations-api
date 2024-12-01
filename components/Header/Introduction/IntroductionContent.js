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
          width={["80%", "100"]}
        >
          وب‌سایت وب سرویس شهر و استان‌های ایران API‌ای برای دریافت اطلاعات
          شهرها و استان‌ها، شامل نام، کد و موقعیت جغرافیایی، ارائه می‌دهد.
        </Typography>
      </Box>
    </Grid>
  );
};

export default Introduction;
