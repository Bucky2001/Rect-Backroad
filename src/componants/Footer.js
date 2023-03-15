import React from 'react';

import { PageHTML, SocialHTML } from './links';
const Footer = () => {
  return (
    <footer className="section footer">
      <PageHTML parentClass="footer-links" itemClass="footer-link" />
      <SocialHTML parentClass="footer-icons" itemClass="footer-icon" />
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
