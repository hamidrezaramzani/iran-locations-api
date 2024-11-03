"use client";
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import styles from "./styles.module.css";
import { Trans, useTranslation } from "next-i18next";

const Introduction = () => {
  const { t } = useTranslation();
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
          <Trans
            i18nKey="introduction:content.title"
            components={{
              span: <span />,
            }}
          />
        </Typography>
        <Typography
          color="#686868"
          textAlign="right"
          paddingY="15px"
          fontSize="14px"
          fontFamily="iran-yekan"
        >
          {t("introduction:content.description")}
        </Typography>
      </Box>
    </Grid>
  );
};

export default Introduction;
