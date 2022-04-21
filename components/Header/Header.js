import { AppBar, Container, Grid, Toolbar, Typography, Button, Box } from '@mui/material'
import React from 'react';
import Link from "next/link";
import LightModeIcon from '@mui/icons-material/LightMode';
const Header = () => {
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
                <img src="/logo.png" width="70px" />
              </Typography>
              <Box sx={{ flexGrow: 1, fontSize: "14px", gap: "15px", display: "flex" }}>
                <Link href="/">راهنما</Link>
                <Link href="/">گیت هاب</Link>
                <Link href="/">درباره من</Link>
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Button>
                  <LightModeIcon />
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