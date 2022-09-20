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
    const [case1select,setCase1select] = React.useState(false);
    const [case2select,setCase2select] = React.useState(false);
    const [case3select,setCase3select] = React.useState(false);
    var case1picture = case1select?style.picture1true:style.picture1false;
    var case2picture = case2select?style.picture2true:style.picture2false;
    var case3picture = case3select?style.picture3true:style.picture3false;
    var case1 = case1select?style.casetrue:style.casefalse;
    var case2 = case2select?style.casetrue:style.casefalse;
    var case3 = case3select?style.casetrue:style.casefalse;
    var case1number = case1select?style.numbertrue:style.numberfalse;
    var case2number = case2select?style.numbertrue:style.numberfalse;
    var case3number = case3select?style.numbertrue:style.numberfalse;
    function selectCase1Action() {
        setCase1select(!case1select);
        setCase2select(false);
        setCase3select(false);
    }
    function selectCase2Action() {
        setCase2select(!case2select);
        setCase1select(false);
        setCase3select(false);
    }
    function selectCase3Action() {
        setCase3select(!case3select);
        setCase1select(false);
        setCase2select(false);
    }

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
              <Item className={case1} sx={{ boxShadow: 0 }} style={{ cursor: "pointer" }} onClick={()=>selectCase1Action()}>
                <div className={case1number}>[01]</div>
                CASE STUDY
              </Item>
            </Grid>
            <Grid xs={10}>
              <Item className={case2} sx={{ boxShadow: 0 }} style={{ cursor: "pointer" }} onClick={()=>selectCase2Action()}>
                <div className={case2number}>[02]</div>
                CASE STUDY
              </Item>
            </Grid>
            <Grid xs={10}>
              <Item className={case3} sx={{ boxShadow: 0 }} style={{ cursor: "pointer" }} onClick={()=>selectCase3Action()}>
                <div className={case3number}>[03]</div>
                CASE STUDY
              </Item>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>

      <div className={case3picture} />
      <div className={case2picture} />
      <div className= {case1picture} />
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
