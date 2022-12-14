import { BackToTop } from './BackToTop/BackToTop';
import './Footer.scss';

import { FooterNavigation } from "./Navigation/FooterNavigation";

const logo = require("./logo.png");

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <img 
          src={logo}
          alt="Logo" 
          className="footer__logo"
        />
        <FooterNavigation />
        <BackToTop />
      </div>
    </footer>
  );
};
