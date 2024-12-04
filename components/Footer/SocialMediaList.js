import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button, ButtonGroup, Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const SocialMediaList = () => (
  <Grid
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    gap="10px"
  >
    <ButtonGroup variant="text" color="inherit" sx={{ direction: 'ltr' }}>
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
        src="/pizza-donation.png"
        alt="donation"
        width={160}
        height={30}
        layout="fixed"
      />
    </a>
  </Grid>
);

export default SocialMediaList;
