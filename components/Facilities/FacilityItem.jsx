import { Box, Card, CardContent, Typography } from "@mui/material";
import * as SC from "./styles";
import { useContext} from "react";
import { ThemeContext } from "../../context/ThemeProvider";

export const FacilityItem = ({ title, description, icon: Icon }) => {
  const { state } = useContext(ThemeContext);
  return (
    <SC.FacilityItem isDark={state === "dark"}>
      <Card className="card">
        <CardContent>
          <Box mb="30px">
            <Icon fontSize={45} />
          </Box>
          <Typography mb="5px" variant="h6">
            {title}
          </Typography>
          <Typography className="description" variant="body2">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </SC.FacilityItem>
  );
};
