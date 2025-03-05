import { Box, Card, CardContent, Typography } from '@mui/material';
import * as SC from './facility-item.style';
import { useContext } from 'react';
import { ColorModeContext } from '../../../providers/color-mode-provider/color-mode-provider.component';
import { FacilityItemProps } from './facility-item.type';

export const FacilityItem = ({
  title,
  description,
  icon: Icon,
}: FacilityItemProps) => {
  const { state } = useContext(ColorModeContext);
  return (
    <SC.FacilityItem isDark={state === 'dark'}>
      <Card className="card">
        <CardContent>
          <Box className="card__icon-container">
            <Icon className="card__icon" />
          </Box>
          <Typography className="card__title" variant="h6">
            {title}
          </Typography>
          <Typography className="card__description" variant="body2">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </SC.FacilityItem>
  );
};
