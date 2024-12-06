import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@mui/material";

import * as SC from "./styles";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

export const FaqItem = ({ title, description }) => {
  const { state } = useContext(ThemeContext);
  return (
    <SC.FaqItem isDark={state === "dark"}>
      <Accordion className="accordion">
        <AccordionSummary>{title}</AccordionSummary>
        <AccordionDetails className="accordion-details">
          {description}
        </AccordionDetails>
      </Accordion>
    </SC.FaqItem>
  );
};
