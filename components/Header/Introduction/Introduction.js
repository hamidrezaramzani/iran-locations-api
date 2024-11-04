import { Box, Grid } from "@mui/material";
import React from "react";
import IntroductionContent from "./IntroductionContent";
import { IranMap } from "../IranMap/IranMap";
const Introduction = ({ domain, starCount }) => {
  return (
    <Box xs={12} md={12} container textAlign="center">
      <IranMap domain={domain} />
      <IntroductionContent starCount={starCount} />
    </Box>
  );
};

export default Introduction;
