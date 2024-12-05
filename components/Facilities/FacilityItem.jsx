import { Box, Card, CardContent, Typography } from "@mui/material";
import * as SC from "./styles";

export const FacilityItem = ({ title, description, icon: Icon }) => (
  <SC.FacilityItem>
    <Card className="card">
      <CardContent>
        <Box mb="30px">
          <Icon fontSize={45} />
        </Box>
        <Typography mb="5px" variant="h6">
          {title}
        </Typography>
        <Typography color="#cdcdcd" variant="body2">
          {description}
        </Typography>
      </CardContent>
    </Card>
  </SC.FacilityItem>
);
