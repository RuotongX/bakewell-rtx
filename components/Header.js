import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import "@fontsource/syne/700.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";


function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  height: 120,
  color: "#FFFFFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  letterSpacing: 3,
}));

export default function Header(props) {
  const [display, setdisplay] = React.useState(true);
  const theme = createTheme({
    typography: {
      fontFamily: "Syne",
      fontSize: 16,
      color: "#FFFFFF",
      
    },
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar style={{ "background": "linear-gradient( #00000040, transparent)" }} elevation={0}>
          
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ flexGrow: 1 }} padding={0}>
              <Grid container spacing={0}>
                <Grid xs={2.25}>
                    <Item sx={{ boxShadow: 0 }} onClick={()=>setdisplay(!display)}>
                      {display && <div>EXPERTISE</div>}
                    </Item>
                </Grid>
                <Grid xs={2.25}>
                  <Item sx={{ boxShadow: 0 }}>PORTFOLIO</Item>
                </Grid>
                <Grid xs={3}>
                  <Item sx={{ boxShadow: 0 }}>
                    <img src="/Logo.svg" />
                  </Item>
                </Grid>
                <Grid xs={2.25}>
                  <Item sx={{ boxShadow: 0 }}>AWARDS</Item>
                </Grid>
                <Grid xs={2.25}>
                  <Item sx={{ boxShadow: 0 }}>CONTACT US</Item>
                </Grid>
              </Grid>
            </Box>
          </ThemeProvider>
          
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
