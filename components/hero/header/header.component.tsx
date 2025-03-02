import React, { useContext, useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import GitHubIcon from "@mui/icons-material/GitHub";
import HelpIcon from "@mui/icons-material/Help";
import InfoIcon from "@mui/icons-material/Info";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Container,
  Toolbar,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import * as SC from "./head.style";
import { ColorModeContext } from "../../../providers/color-mode-provider/color-mode-provider.component";

export const Header = () => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);

  const { state, setState } = useContext(ColorModeContext);

  const handleClickToggleTheme = () => {
    setState(state === "dark" ? "light" : "dark");
  };

  const handleMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <SC.Header isDark={state === "dark"}>
      <Container>
        <AppBar className="header__app-bar" color="transparent">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Link href="/" className="app-bar__a">
                <Image
                  src="/logo.png"
                  width={70}
                  height={30}
                  alt="website logo"
                />
              </Link>
              <Box className="desktop-menu">
                <Link href="/documentation">{t("header:nav.help")}</Link>
                <Link href="https://github.com/hamidrezaramzani/iran-locations-api">
                  {t("header:nav.github")}
                </Link>
                <Link href="https://github.com/hamidrezaramzani/hamidrezaramzani">
                  {t("header:nav.aboutMe")}
                </Link>
              </Box>

              <Box className="app-bar_left-box">
                <Button
                  onClick={handleClickToggleTheme}
                  className="desktop-theme"
                >
                  {state === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
                </Button>
                <Box className="mobile-menu">
                  <IconButton
                    edge="end"
                    color="inherit"
                    onClick={handleMenuOpen}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                  >
                    <MenuItem
                      onClick={handleMenuClose}
                      className="app-bar__menu-icon"
                    >
                      <HelpIcon />
                      <Link href="/documentation">{t("header:nav.help")}</Link>
                    </MenuItem>
                    <MenuItem
                      onClick={handleMenuClose}
                      className="app-bar__menu-icon"
                    >
                      <GitHubIcon />
                      <Link href="https://github.com/hamidrezaramzani/iran-locations-api">
                        {t("header:nav.github")}
                      </Link>
                    </MenuItem>
                    <MenuItem
                      onClick={handleMenuClose}
                      className="app-bar__menu-icon"
                    >
                      <InfoIcon />
                      <Link href="https://github.com/hamidrezaramzani/hamidrezaramzani">
                        {t("header:nav.aboutMe")}
                      </Link>
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleClickToggleTheme();
                        handleMenuClose();
                      }}
                    >
                      {state === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
                      {state === "dark"
                        ? t("header:nav.dark")
                        : t("header:nav.light")}
                    </MenuItem>
                  </Menu>
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Container>
    </SC.Header>
  );
};
