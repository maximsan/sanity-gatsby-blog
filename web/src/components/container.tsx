import { root } from "./container.module.css";
import { PropsWithChildren } from "react";

// eslint-disable-next-line @typescript-eslint/ban-types
const Container = ({ children }: PropsWithChildren<{}>) => {
  return <div className={root}>{children}</div>;
};

export default Container;
