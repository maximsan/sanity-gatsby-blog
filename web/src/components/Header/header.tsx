import React from "react";

import { Link } from "gatsby";

import { cn } from "../../lib/helpers";
import { Icon } from "../../icons";

export interface HeaderProps {
  showNav: boolean;
  onHideNav: () => void;
  onShowNav: () => void;
  siteTitle: string;
}

export const Header = ({ onHideNav, onShowNav, showNav, siteTitle }: Partial<HeaderProps>) => (
  <div className="">
    <div className="">
      <div className="">
        <Link to="/">{siteTitle}</Link>
      </div>

      <button className="" onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol="hamburger" />
      </button>

      <nav className={cn(showNav && "")}>
        <ul>
          <li>
            <Link to="/contact-me/">Contact me</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);
