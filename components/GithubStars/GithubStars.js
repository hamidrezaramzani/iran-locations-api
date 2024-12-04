import { Star } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";

export const GithubStars = ({ starCount }) => {
  return (
    <Button
      LinkComponent={Link}
      href="https://github.com/hamidrezaramzani/iran-locations-api/stargazers"
      endIcon={<Star fontSize="15" color="warning" />}
      target="blank"
      variant="outlined"
    >
      <Typography
        ml="10px"
        mt="3px"
        fontSize={15}
        className="iran-yekan"
        color="GrayText"
      >
        {starCount}
      </Typography>
    </Button>
  );
};
