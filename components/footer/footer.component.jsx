import React from "react";

import { Navbar } from "./navbar/navbar.component";
import { SocialMedia } from "./social-media/social-media.component";

import * as SC from "./footer.style";

export const Footer = () => (
  <SC.Footer>
    <SocialMedia />
    <Navbar />
  </SC.Footer>
);
