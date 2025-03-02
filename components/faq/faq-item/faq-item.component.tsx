import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@mui/material";

import * as SC from "./faq-item.style";
import { useContext } from "react";
import { ColorModeContext } from "../../../providers/color-mode-provider/color-mode-provider.component";

export const FaqItem = ({ title, description }) => {
  const { state } = useContext(ColorModeContext);
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
