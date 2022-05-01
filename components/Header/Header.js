import { AppBar, Container, Grid, Toolbar, Typography, Button, Box } from '@mui/material'
import React, { useContext } from 'react';
import Link from "next/link";
import { ThemeContext } from "../../context/ThemeProvider";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode'
const Header = () => {

  const { state, setState } = useContext(ThemeContext);

  const handleClickToggleTheme = () => {
    setState(state === "dark" ? "light" : "dark");
  }
  return (
    <Grid container fontFamily="iran-yekan" xs="12" height="50px" paddingY="20px" justifyContent="center" gap="10px">
      <Container>
        <AppBar position="static" color="default" sx={{ boxShadow: "none", borderRadius: "5px" }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1 }}
              >
                <img src="/logo.png" width="70px" alt="website logo" />
              </Typography>
              <Box sx={{ flexGrow: 1, fontSize: "14px", gap: "15px", display: "flex" }}>
                <Link href="/#guide">راهنما</Link>
                <Link href="https://github.com/hamidrezaramzani/iran-locations-api">گیت هاب</Link>
                <Link href="https://github.com/hamidrezaramzani/hamidrezaramzani">درباره من</Link>
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Button onClick={handleClickToggleTheme}>
                  {state === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Container>
    </Grid>
  )
}

export default Header