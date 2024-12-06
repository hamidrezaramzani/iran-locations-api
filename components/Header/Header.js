import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {
  AppBar,
  Container,
  Grid,
  Toolbar,
  Typography,
  Button,
  Box,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import React, { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeProvider';

const Header = () => {
  const { state, setState } = useContext(ThemeContext);

  const handleClickToggleTheme = () => {
    setState(state === 'dark' ? 'light' : 'dark');
  };

  const { t } = useTranslation();

  return (
    <Grid
      container
      fontFamily="iran-yekan"
      xs="12"
      height="50px"
      paddingY="20px"
      justifyContent="center"
      gap="10px"
    >
      <Container>
        <AppBar
          position="static"
          color="transparent"
          sx={{ boxShadow: 'none', borderRadius: '5px' }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1 }}
              >
                <Image
                  src="/logo.png"
                  width={70}
                  height={30}
                  alt="website logo"
                />
              </Typography>
              <Box
                sx={{
                  flexGrow: 1,
                  fontSize: '14px',
                  gap: '15px',
                  display: 'flex',
                }}
              >
                <Link href="/documentation">{t('header:nav.help')}</Link>
                <Link href="https://github.com/hamidrezaramzani/iran-locations-api">
                  {t('header:nav.github')}
                </Link>
                <Link href="https://github.com/hamidrezaramzani/hamidrezaramzani">
                  {t('header:nav.aboutMe')}
                </Link>
              </Box>

              <Box sx={{ display: 'flex', flexGrow: 0, alignItems: 'center' }}>
                <Button onClick={handleClickToggleTheme}>
                  {state === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Container>
    </Grid>
  );
};

export default Header;
