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

function posterslide(props) {
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
    letterSpacing: 2
    ,
  }));

  return (
    <React.Fragment>
      <Image
        className={style.bgimg}
        src="/../public/1.png"
        layout="fill"
        sizes="(max-width: 1080px) 100vw,
                    (max-width: 1920px) 100vw,
                    100vw"
      />
      <div className={style.container}>
        <div className={style.details}>
          <img src="/LogoLarge.svg" alt="next" className={style.logo} />
          <ThemeProvider theme={theme}>
            <Box className={style.box} sx={{ flexGrow: 2 }} padding={0}>
              <Grid container spacing={0}>
                <Grid xs={4}>
                  <Item sx={{ boxShadow: 0 }} style={{justifyContent: "start"}} >+64 9 480 6800</Item>
                </Grid>
                <Grid xs={4}>
                  <Item sx={{ boxShadow: 0 }}>
                  BAKEWELL-WHITE YACHT DESIGN LTD
                  </Item>
                </Grid>
                <Grid xs={4}>
                  <Item sx={{ boxShadow: 0 }} style={{justifyContent: "end"}}>EST. 1994</Item>
                </Grid>
                <Grid xs={4}>
                  <Item sx={{ boxShadow: 0 }} style={{justifyContent: "start"}}>INFO@BAKEWELL-WHITE.COM</Item>
                </Grid>
                <Grid xs={4}>
                  <Item sx={{ boxShadow: 0 }}>PACE WITH GRACE / © 2022</Item>
                </Grid>
                <Grid xs={4}>
                  <Item sx={{ boxShadow: 0 }} style={{justifyContent: "end"}}>AUCKLAND / NEW ZEALAND</Item>
                </Grid>
              </Grid>
            </Box>
          </ThemeProvider>
        </div>
      </div>
    </React.Fragment>
  );
}
export default posterslide;
