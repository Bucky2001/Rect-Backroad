import React from 'react';
import logo from '../images/logo.svg';
import { PageHTML, SocialHTML } from './links';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <PageHTML parentClass="nav-links" itemClass="nav-link" />
        <SocialHTML parentClass="nav-icons" itemClass="nav-icon" />
      </div>
    </nav>
  );
};
