import React, { useContext } from "react";
import { Toolbar, IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { MdMenu } from "react-icons/md";
import { ThemeContext } from "../../context/ThemeProvider";
import * as SC from "./styles";
import Image from "next/image";
import Link from "next/link";

export const DocumentationHeader = ({ setDrawerOpen }) => {
  const { state, setState } = useContext(ThemeContext);

  const isDark = state === "dark";
  const handleClickToggleTheme = () => {
    setState(isDark ? "light" : "dark");
  };
  return (
    <SC.HeaderContainer isDark={isDark} position="static">
      <Toolbar>
        <Link href="/">
          <Image
            src="/logo.png"
            width={70}
            height={30}
            className="logo"
            alt="website logo"
          />
        </Link>
        <IconButton
          edge="start"
          className="menu-open-button"
          color="inherit"
          aria-label="menu"
          onClick={() => setDrawerOpen((prevOpen) => !prevOpen)}
        >
          <MdMenu />
        </IconButton>
        <SC.HeaderText isDark={isDark} variant="h6">
          مستندات وب سرویس
        </SC.HeaderText>
        <IconButton
          onClick={handleClickToggleTheme}
          edge="end"
          color="inherit"
          aria-label="menu"
        >
          {isDark ? <DarkModeIcon /> : <LightModeIcon className="light-icon" />}
        </IconButton>
      </Toolbar>
    </SC.HeaderContainer>
  );
};
