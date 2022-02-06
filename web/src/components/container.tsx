import React from "react";

import { PropsWithChildren } from "react";

// eslint-disable-next-line @typescript-eslint/ban-types
const Container = ({ children }: PropsWithChildren<{}>) => {
  return <div className="">{children}</div>;
};

export default Container;
