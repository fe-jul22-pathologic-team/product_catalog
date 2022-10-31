import { BackToTop } from './BackToTop/BackToTop';
import './Footer.css';

import { FooterNavigation } from "./Navigation/FooterNavigation";

const logo = require("./logo.png");

export const Footer = () => {
  return (
    <footer className="footer">
      <img 
        src={logo}
        alt="Logo" 
        className="footer__logo"
      />
      <FooterNavigation />
      <BackToTop />
    </footer>
  );
};