import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@mui/material";

import * as SC from "./styles";

export const FaqItem = ({ title, description }) => (
  <SC.FaqItem>
    <Accordion className="accordion">
      <AccordionSummary>{title}</AccordionSummary>
      <AccordionDetails className="accordion-details">
        {description}
      </AccordionDetails>
    </Accordion>
  </SC.FaqItem>
);
