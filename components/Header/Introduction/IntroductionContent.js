import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import styles from "./styles.module.css";

const Introduction = () => {
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
          color="#686868"
          textAlign="right"
          paddingY="15px"
          fontSize="14px"
          fontFamily="iran-yekan"
        >
          با استفاده از سرویس API ما به ‌راحتی میتوانید به اطلاعات تمامی استان‌
          ها و تمامی شهر‌ها در شرایط مختلف دست یابید. استفاده از این سرویس کامل
          رایگان است.
        </Typography>
      </Box>
    </Grid>
  );
};

export default Introduction;
