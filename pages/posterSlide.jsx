import Image from "next/image";
import style from "../styles/posterSlide.module.css";
import React from "react";
import "@fontsource/oxygen-mono/400.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useSpring, animated,config } from "react-spring";

function Posterslide(props) {
  const titleAnimate = useSpring({
    to: { opacity: 1, y: 0 },
    from: { opacity: 0, y:20 },
    config: {duration: 2000},
  });
  const theme = createTheme({
    typography: {
      fontFamily: "Oxygen mono",
      fontSize: 12,
      color: "#FFFFFF",
    },
  });
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
    ...theme.typography.body2,
    height: 13,
    color: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    letterSpacing: 2,
  }));

  return (
    <React.Fragment>
      <div className={style.container}>
        {/* <animated.div style={{...titleAnimate}}> */}
        <div className={style.details}>
          <animated.div style={titleAnimate}>
            <img src="/LogoLarge.svg" alt='title' className={style.logo} />
          </animated.div>
          <ThemeProvider theme={theme}>
            <Box className={style.box} sx={{ flexGrow: 2 }} padding={0}>
              <Grid container spacing={0}>
                <Grid item={true} xs={4}>
                  <Item
                    sx={{ boxShadow: 0 }}
                    style={{ justifyContent: "start" }}
                  >
                    +64 9 480 6800
                  </Item>
                </Grid>
                <Grid item={true} xs={4}>
                  <Item sx={{ boxShadow: 0 }}>
                    BAKEWELL-WHITE YACHT DESIGN LTD
                  </Item>
                </Grid>
                <Grid item={true} xs={4}>
                  <Item sx={{ boxShadow: 0 }} style={{ justifyContent: "end" }}>
                    EST. 1994
                  </Item>
                </Grid>
                <Grid item={true} xs={4}>
                  <Item
                    sx={{ boxShadow: 0 }}
                    style={{ justifyContent: "start" }}
                  >
                    INFO@BAKEWELL-WHITE.COM
                  </Item>
                </Grid>
                <Grid item={true} xs={4}>
                  <Item sx={{ boxShadow: 0 }}>PACE WITH GRACE / © 2022</Item>
                </Grid>
                <Grid item={true} xs={4}>
                  <Item sx={{ boxShadow: 0 }} style={{ justifyContent: "end" }}>
                    AUCKLAND / NEW ZEALAND
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </ThemeProvider>
        </div>
        {/* </animated.div> */}
      </div>
    </React.Fragment>
  );
}
export default Posterslide;
