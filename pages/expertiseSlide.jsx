import React from "react";
import style from "../styles/expertiseSlide.module.css";
import "@fontsource/syne";
import "@fontsource/archivo/300.css";
import Button from "@mui/material/Button";
import { useSpring, animated } from 'react-spring';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function expertiseSlide(props) {
  const buttonAnimate = useSpring({
    loop: { reverse: true },
    from: { y: 0 },
    to: { y: 15 },
    config: {mass:1, tension:5, friction:0},
  })
  return (
    <div className={style.container}>
        <animated.div style={{zIndex:2,...buttonAnimate}}>
      <Button className={style.button}>
        <div className={style.buttonTxt}>SEE EXPERTISE</div>
        <div className={style.arrow} />
      </Button>
      </animated.div>
      
      <div className={style.title1}>WE ARE AN AWARD-WINNING</div>
      <div className={style.title2}>BOUTIQUE DESIGN STUDIO</div>
      <Parallax pages={5} style={{zIndex:1}}>
        <ParallaxLayer sticky={{ start: 1, end: 5 }}>
          <div className={style.picture} />
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 2, end: 5 }}>
        <div className={style.text1}>
          We can offer a complete design service to all vessels, power and sail.
          Whether it is conceptual design work or full naval architecture and
          engineering, no job is too big or too small for our team.
        </div>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 3, end: 5 }}>
        <div className={style.text2}>
          We believe that success is to a large part a matter of design process,
          and a good designer will have a design process that will produce a
          successful outcome whether it be a yacht, a powerboat, an aeroplane,
          or a ballpoint pen.
        </div>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 4, end: 5 }}>
        <div className={style.text3}>
          We undertake a wide variety of craft from radio yachts, to racing
          yachts, offshore powerboats, to 90m motoryachts, pilotboats, kayaks,
          Arabian dhows, cargo barges and fishing boats. As a result we are
          exposed to a wide variety of conditions, design problems and novel
          solutions, and if we were restricted to designing only one type of
          craft then we would not see this rich variety of thinking.
        </div>
        </ParallaxLayer>
      </Parallax>

      
      
    </div>
  );
}
export default expertiseSlide;