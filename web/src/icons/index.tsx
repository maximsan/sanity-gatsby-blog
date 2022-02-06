import { HamburgerIcon } from "./hamburger";

export function Icon(props) {
  switch (props.symbol) {
    case "hamburger":
      return <HamburgerIcon />;
    default:
      return <span>Unknown icon: {props.symbol}</span>;
  }
}
