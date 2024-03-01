import { Button, ButtonGroup, Grid } from "@mui/material";
import React from "react";
import Link from "next/link";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
const SocialMediaList = () => {
  return (
    <Grid
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap="10px"
    >
      <ButtonGroup variant="text" color="inherit" sx={{ direction: "ltr" }}>
        <Button>
          <Link passHref href="https://twitter.com/iamhamidreza_">
            <TwitterIcon />
          </Link>
        </Button>
        <Button>
          <Link passHref href="https://github.com/hamidrezaramzani">
            <GitHubIcon />
          </Link>
        </Button>
        <Button>
          <Link passHref href="https://t.me/hamidrezaramzani">
            <TelegramIcon />
          </Link>
        </Button>
      </ButtonGroup>
      <a href="https://daramet.com/iamhamidreza">
        <Image
          src="/donation.png"
          alt="donation"
          width={160}
          height={30}
          layout="fixed"
        />
      </a>
    </Grid>
  );
};

export default SocialMediaList;
