import { Link } from "gatsby";

import { cn } from "../lib/helpers";

import { Icon } from "../icons";

import * as styles from "./header.module.css";

export interface HeaderProps {
  showNav: boolean;
  onHideNav: () => void;
  onShowNav: () => void;
  siteTitle: string;
}

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }: Partial<HeaderProps>) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to="/">{siteTitle}</Link>
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol="hamburger" />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to="/archive/">Archive</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;
