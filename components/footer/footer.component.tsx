import React from 'react';

import { Navbar } from './navbar';
import { SocialMedia } from './social-media';

import * as SC from './footer.style';

export const Footer = () => (
  <SC.Footer>
    <SocialMedia />
    <Navbar />
  </SC.Footer>
);
