import { buildImageObj, getBlogUrl } from "../lib/helpers";
import { Link } from "gatsby";
import PortableText from "./portableText";

import { format } from "date-fns";
import { imageUrlFor } from "../lib/image-url";
import { SanityPost } from "../generated/graphql";

interface BlogPostPreviewProps extends SanityPost {
  isInList?: boolean;
}

function BlogPostPreview(props: BlogPostPreviewProps) {
  return (
    <Link className="" to={getBlogUrl(props.publishedAt, props?.slug?.current)}>
      <div className="">
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .auto("format")
              .url()}
            alt={props.mainImage.alt ?? ""}
          />
        )}
      </div>
      <div className="">
        <h3 className="">{props.title}</h3>
        {props._rawExcerpt && (
          <div className="">
            <PortableText blocks={props._rawExcerpt} />
          </div>
        )}
        <div className="">{format(new Date(props.publishedAt), "MMMM Mo, yyyy")}</div>
      </div>
    </Link>
  );
}

export default BlogPostPreview;
