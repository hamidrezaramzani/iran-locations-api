import { Typography } from "@mui/material";
import * as SC from "./section-title.style";

export const SectionTitle = ({ title, description }) => (
  <SC.SectionTitle>
    <Typography variant="h4" className="title__h4">
      {title}
    </Typography>
    <Typography variant="body1" className="title__body">
      {description}
    </Typography>
  </SC.SectionTitle>
);
