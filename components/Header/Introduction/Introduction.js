import { Box, Grid } from "@mui/material";
import React from "react";
import IntroductionContent from "./IntroductionContent";
import { IranMap } from "../IranMap/IranMap";
const Introduction = ({ domain }) => {
  return (
    <Box xs={12} md={12} container textAlign="center">
      <IranMap domain={domain} />
      <IntroductionContent />
    </Box>
  );
};

export default Introduction;
