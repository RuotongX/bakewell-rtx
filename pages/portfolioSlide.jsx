import React from "react";
import style from "../styles/portfolioSlide.module.css";
import "@fontsource/syne";
import "@fontsource/archivo/300.css";
import "@fontsource/oxygen-mono/400.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function portfolioSlide(props) {
  const theme = createTheme({
    typography: {
      fontFamily: "Syne",
      fontSize: 32,
      color: "#f7f7f7",
    },
  });
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
    ...theme.typography.body2,
    height: 106,
    width: 350,
    color: "#f7f7f7",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
  }));
  return (
    <div className={style.container}>
      <div className={style.title}>SELECTED WORKS</div>
     
      <ThemeProvider theme={theme}>
        <Box className={style.box} sx={{ flexGrow: 3 }} padding={0}>
          <Grid container spacing={0} direction="column">
            <Grid xs={10}>
              <Item className={style.caseUnselect} sx={{ boxShadow: 0 }}>
                <div className={style.numberUnselect}>[01]</div>
                CASE STUDY
              </Item>
            </Grid>
            <Grid xs={10}>
              <Item className={style.caseUnselect} sx={{ boxShadow: 0 }}>
                <div className={style.numberUnselect}>[02]</div>
                CASE STUDY
              </Item>
            </Grid>
            <Grid xs={10}>
              <Item className={style.case} sx={{ boxShadow: 0 }}>
                <div className={style.numberSelect}>[03]</div>
                CASE STUDY
              </Item>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>

      <div className={style.picture3Select} />
      <div className={style.picture2Unselect} />
      <div className={style.picture1Unselect} />
      <div className={style.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu in venenatis
        id laoreet enim. Interdum in orci vitae feugiat quam urna. Pretium netus
        nec ante massa nulla odio nunc posuere sit. Nec justo, leo eget ipsum
        sollicitudin aliquet.
      </div>
      <Button className={style.button}>
        <div className={style.buttonTxt}>SEE ALL DESIGNS</div>
        <div className={style.arrow} />
      </Button>
    </div>
  );
}
export default portfolioSlide;
