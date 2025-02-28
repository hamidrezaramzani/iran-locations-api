import React, { useContext } from "react";
import { Toolbar, IconButton } from "@mui/material";
import { MdMenu } from "react-icons/md";
import * as SC from "./documentation-header.style";
import { ThemeContext } from "../../../context/ThemeProvider";
import { DocumentationHeaderProps } from "./documentation-header.type";

export const DocumentationHeader = ({
  setDrawerOpen,
}: DocumentationHeaderProps) => {
  const { state } = useContext(ThemeContext);
  const isDark = state === "dark";
  return (
    <SC.DocumentationHeader isDark={isDark} position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className="menu-open-button"
          color="inherit"
          aria-label="menu"
          onClick={() => setDrawerOpen((prevOpen: boolean) => !prevOpen)}
        >
          <MdMenu />
        </IconButton>
      </Toolbar>
    </SC.DocumentationHeader>
  );
};
