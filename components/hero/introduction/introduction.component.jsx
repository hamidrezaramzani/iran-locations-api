import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React, { useContext } from "react";
import { Trans, useTranslation } from "react-i18next";

import { ThemeContext } from "../../../context/ThemeProvider";
import * as SC from "./introduction.style";

export const Introduction = () => {
  const { state } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <SC.Introduction>
      <Grid
        xs={12}
        md={12}
        flexDirection="column"
        justifyContent="center"
        display="flex"
        item
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
            paddingX="8px"
          >
            <Trans
              i18nKey="introduction:content.title"
              components={{
                span: <span className="welcome-span" />,
              }}
            />
          </Typography>
          <Typography
            color={state === "light" ? "black" : "white"}
            textAlign="center"
            paddingY="15px"
            fontSize="14px"
            fontFamily="iran-yekan"
            width={["80%", "100"]}
          >
            {t("introduction:content.description")}
          </Typography>

          <Button
            variant="contained"
            color="primary"
            LinkComponent={Link}
            href="/documentation"
          >
            {t("introduction:content.startButton")}
          </Button>
        </Box>
      </Grid>
    </SC.Introduction>
  );
};
