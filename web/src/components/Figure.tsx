import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { getGatsbyImageData } from "gatsby-source-sanity";
import config from "../../client-config";

export const Figure = ({ node }) => {
  if (!node || !node.asset || !node.asset._id) {
    return null;
  }
  const gatsbyImageData = getGatsbyImageData(node, { maxWidth: 675 } as any, config.sanity);
  return (
    <figure>
      {gatsbyImageData && <GatsbyImage image={gatsbyImageData} alt={node.alt} />}
      <figcaption>{node.caption}</figcaption>
    </figure>
  );
};
