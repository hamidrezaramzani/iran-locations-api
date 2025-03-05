import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

import * as SC from './faq-item.style';
import { useContext } from 'react';
import { ColorModeContext } from '../../../providers/color-mode-provider/color-mode-provider.component';
import { FaqItemProps } from './faq-item.type';

export const FaqItem = ({ title, description }: FaqItemProps) => {
  const { state } = useContext(ColorModeContext);
  return (
    <SC.FaqItem isDark={state === 'dark'}>
      <Accordion className="accordion">
        <AccordionSummary>{title}</AccordionSummary>
        <AccordionDetails className="accordion-details">
          {description}
        </AccordionDetails>
      </Accordion>
    </SC.FaqItem>
  );
};
