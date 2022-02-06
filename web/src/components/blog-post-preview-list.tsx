import React from "react";

import BlogPostPreview from "./blog-post-preview";
import { Link } from "gatsby";
import { SanityPost } from "../generated/graphql";

interface BlogPostPreviewGridProps {
  title: string;
  browseMoreHref: string;
  nodes: SanityPost[];
}

function BlogPostPreviewGrid(props: BlogPostPreviewGridProps) {
  return (
    <div className="">
      {props.title && <h2 className="">{props.title}</h2>}
      <ul className="">
        {props.nodes &&
          props.nodes.map((node) => (
            <li key={node.id}>
              <BlogPostPreview {...node} isInList />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className="">
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  );
}

BlogPostPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: "",
};

export default BlogPostPreviewGrid;
