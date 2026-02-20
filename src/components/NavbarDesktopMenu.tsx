import { memo } from 'react';

interface NavLink {
  path: string;
  label: string;
  type: 'link' | 'button';
}

interface NavbarDesktopMenuProps {
  links: NavLink[];
}

const NavbarDesktopMenu = memo(({ links }: NavbarDesktopMenuProps) => (
  <ul className="navbar-menu" role="list">
    {links.map(({ path, label, type }) => (
      <li key={path} role="listitem">
        <a 
          href={path} 
          className={`nav-link ${type === 'button' ? 'btn-contact' : ''}`}
          aria-current={path === '/' ? 'page' : undefined}
        >
          {label}
        </a>
      </li>
    ))}
  </ul>
));

NavbarDesktopMenu.displayName = 'NavbarDesktopMenu';
export default NavbarDesktopMenu;
