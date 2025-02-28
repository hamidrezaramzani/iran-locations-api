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
      <div className="introduction-container">
        <div className="introduction">
          <Typography component="h1" className="main-title">
            <Trans
              i18nKey="introduction:content.title"
              components={{
                span: <span className="welcome-span" />,
              }}
            />
          </Typography>
          <Typography
            color={state === "light" ? "black" : "white"}
            className="secondary-title"
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
        </div>
      </div>
    </SC.Introduction>
  );
};
