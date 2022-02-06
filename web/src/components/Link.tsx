import * as React from "react";
import MuiLink from "@mui/material/Link";
import type { LinkProps } from "@mui/material/Link";
import { Link as GatsbyLink } from "gatsby";
import type { GatsbyLinkProps } from "gatsby";

// eslint-disable-next-line @typescript-eslint/ban-types
export const Link = React.forwardRef<never, Omit<LinkProps, "ref"> & Omit<GatsbyLinkProps<{}>, "ref">>((props, ref) => {
  return <MuiLink component={GatsbyLink} ref={ref} {...props} />;
});

Link.displayName = "Link";
