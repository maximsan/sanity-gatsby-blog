import React, { PropsWithChildren, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Header } from "../components/Header/header";

export interface LayoutProps {
  siteTitle?: string;
}

function LayoutContainer({ siteTitle, children }: PropsWithChildren<LayoutProps>) {
  const [showNav, setShowNav] = useState(false);

  function handleShowNav() {
    setShowNav(true);
  }

  function handleHideNav() {
    setShowNav(false);
  }

  const data = useStaticQuery(query);
  if (!data.site) {
    throw new Error(
      'Missing "Site settings". Open the Studio at http://localhost:3333 and some content in "Site settings"'
    );
  }

  return (
    <>
      <Header siteTitle={siteTitle} onHideNav={handleHideNav} onShowNav={handleShowNav} showNav={showNav} />
      <div className="">{children}</div>
      <footer className="">
        <div className="">{/*<div className={styles.siteInfo}>{new Date().getFullYear()}</div>*/}</div>
      </footer>
    </>
  );
}

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }
  }
`;

export default LayoutContainer;
