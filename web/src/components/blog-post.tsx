import { differenceInDays, formatDistance, format } from "date-fns";
import AuthorList from "./author-list";
import Container from "./container";
import PortableText from "./portableText";

import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import { SanityPost } from "../generated/graphql";

type BlogPostProps = SanityPost;

function BlogPost(props: BlogPostProps) {
  const { _rawBody, authors, categories, title, mainImage, publishedAt } = props;
  return (
    <article className="">
      {mainImage && mainImage.asset && (
        <div className="">
          <img
            src={imageUrlFor((buildImageObj(mainImage) as unknown) as string)
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit("crop")
              .auto("format")
              .url()}
            alt={mainImage.alt as string}
          />
        </div>
      )}
      <Container>
        <div className="">
          <div className="">
            <h1 className="">{title}</h1>
            {_rawBody && <PortableText blocks={_rawBody} />}
          </div>
          <aside className="">
            {publishedAt && (
              <div className="">
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? formatDistance(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), "MMMM Mo, yyyy")}
              </div>
            )}
            {authors && <AuthorList items={authors} title="Authors" />}
            {categories && (
              <div className="">
                <h3 className="">Categories</h3>
                <ul>
                  {categories.map((category) => (
                    <li key={category?._id}>{category?.title}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </article>
  );
}

export default BlogPost;
