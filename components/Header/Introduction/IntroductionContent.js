import { Box, Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

const useStyles = makeStyles(() => ({
  button: {
    background: "#2b3de2",
    fontFamily: "iran-yekan",
    "&:hover": {
      background: "#1d2fd4",
    },
  },
}));
const Introduction = () => {
  const classes = useStyles();

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

        <Box display="flex" marginTop="20px" justifyContent="center">
          <Button
            variant="contained"
            color="info"
            width="50"
            className={classes.button}
          >
            <Link href="/#guide">ادامه مطلب</Link>
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default Introduction;
