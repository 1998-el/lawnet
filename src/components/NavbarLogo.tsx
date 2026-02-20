import { memo } from 'react';

const NavbarLogo = memo(() => (
  <a href="/" className="navbar-logo" aria-label="LAWNET home page">
    <img 
      src="/assets/logo/logo.jpeg" 
      alt="LAWNET" 
      style={{ height: '36px', width: 'auto' }}
    />
  </a>
));

NavbarLogo.displayName = 'NavbarLogo';
export default NavbarLogo;
