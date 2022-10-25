import React from "react";
import style from "../styles/contactFooter.module.css";
import "@fontsource/oxygen-mono/400.css";
import "@fontsource/syne/500.css";
import Button from "@mui/material/Button";

function ContactFooter(props) {
  return (
    <div className={style.container}>
      <div className={style.bgimg}>
        <div className={style.title}>GET IN TOUCH</div>
        <div className={style.leftTop}>
          INFO@BAKEWELL-WHITE.COM
          <div className={style.leftRest}>+64 9 480 6800</div>
          <div className={style.leftRest}>EST. 1994</div>
        </div>

        <div className={style.rightTop}>
          PRIVACY POLICY
          <div className={style.rightRest}>FACEBOOK</div>
          <div className={style.rightRest}>LINKEDIN</div>
        </div>
        <Button className={style.button}>
          <div className={style.buttonTxt}>CONTACT US</div>
          <div className={style.arrow} />
        </Button>
      </div>
    </div>
  );
}
export default ContactFooter;
