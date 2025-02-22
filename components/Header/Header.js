import DarkModeIcon from '@mui/icons-material/DarkMode';
import GitHubIcon from '@mui/icons-material/GitHub';
import HelpIcon from '@mui/icons-material/Help';
import InfoIcon from '@mui/icons-material/Info';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Container,
  Grid,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import React, { useContext, useState } from 'react';

import { ThemeContext } from '../../context/ThemeProvider';

const Header = () => {

  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);


  const { state, setState } = useContext(ThemeContext);

  const handleClickToggleTheme = () => {
    setState(state === 'dark' ? 'light' : 'dark');
  };


  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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
                className="desktop-menu"
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
                <Button onClick={handleClickToggleTheme} className='desktop-theme'>
                  {state === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
                </Button>
                <Box className="mobile-menu">
                  <IconButton edge="end" color="inherit" onClick={handleMenuOpen}>
                    <MenuIcon />
                  </IconButton>
                  <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                    <MenuItem onClick={handleMenuClose}>
                      <HelpIcon sx={{ ml: 1 }} />
                      <Link href="/documentation">{t('header:nav.help')}</Link>
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose}>
                      <GitHubIcon sx={{ ml: 1 }} />
                      <Link href="https://github.com/hamidrezaramzani/iran-locations-api">
                        {t('header:nav.github')}
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose}>
                      <InfoIcon sx={{ ml: 1 }} />
                      <Link href="https://github.com/hamidrezaramzani/hamidrezaramzani">
                        {t('header:nav.aboutMe')}
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={() => { handleClickToggleTheme(); handleMenuClose(); }}>
                      {state === 'dark' ? <DarkModeIcon sx={{ ml: 1 }} /> : <LightModeIcon sx={{ ml: 1 }} />}
                      {state === 'dark' ? t('header:nav.dark') : t('header:nav.light')}
                    </MenuItem>
                  </Menu>
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Container>
    </Grid>
  );
};

export default Header;
