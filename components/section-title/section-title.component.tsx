import { Typography } from '@mui/material';
import * as SC from './section-title.style';
import { SectionTitleProps } from './section-title.type';

export const SectionTitle = ({ title, description }: SectionTitleProps) => (
  <SC.SectionTitle>
    <Typography variant="h4" className="title__h4">
      {title}
    </Typography>
    <Typography variant="body1" className="title__body">
      {description}
    </Typography>
  </SC.SectionTitle>
);
