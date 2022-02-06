import React from "react";

import SEO from "../components/seo";
import LayoutContainer from "../containers/layout";

const NotFoundPage = () => (
  <LayoutContainer>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </LayoutContainer>
);

export default NotFoundPage;
