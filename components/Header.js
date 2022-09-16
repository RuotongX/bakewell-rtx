import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

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
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'transparent',
    ...theme.typography.body2,
    height: 50,
    textAlign: 'center',
    color: theme.palette.text.sencondary,
  }));

export default function Header(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar  color="transparent" elevation={0}>
            
            <Box sx={{ flexGrow: 1 }} padding={0}>
                <Grid container spacing={0}>
                    <Grid xs={2.25}>
                        <Item>xs=8</Item>
                    </Grid>
                    <Grid xs={2.25}>
                        <Item>xs=4</Item>
                    </Grid>
                    <Grid xs={3}>
                        <Item>xs=4</Item>
                    </Grid>
                    <Grid xs={2.25}>
                        <Item>xs=8</Item>
                    </Grid>
                    <Grid xs={2.25}>
                        <Item>xs=8</Item>
                    </Grid>
                </Grid>
            </Box>
            
        </AppBar>
      </HideOnScroll>
      <Toolbar />
     
    </React.Fragment>
  );
}