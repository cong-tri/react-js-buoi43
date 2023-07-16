import React from "react";
import { Desktop, Mobile, Tablet } from "../../responsive/responsive";
import FooterDeskTop from "./FooterDeskTop";
import FooterMobile from "./FooterMobile";
import FooterTablet from "./FooterTablet";

function Footer() {
  return (
    <div>
      <Desktop>
        <FooterDeskTop />
      </Desktop>
      <Mobile>
        <FooterMobile />
      </Mobile>
      <Tablet>
        <FooterTablet />
      </Tablet>
    </div>
  );
}

export default Footer;
