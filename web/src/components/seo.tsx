import Helmet from "react-helmet";
import type { HelmetProps } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
import { imageUrlFor } from "../lib/image-url";
import { buildImageObj } from "../lib/helpers";
import { Maybe, SanityMainImage } from "../generated/graphql";

interface SEOProps extends Omit<HelmetProps, "title"> {
  description?: Maybe<string>;
  keywords: string[];
  lang: string;
  image?: SanityMainImage | { asset: string };
  title?: Maybe<string>;
}

export default function SEO({ description = "", lang, meta, keywords, title = "", image }: SEOProps) {
  const { site } = useStaticQuery(detailsQuery) || {};

  const metaDescription = description || site.description || "";
  const siteTitle = site.title || "";
  const siteAuthor = site.author?.name || "";
  const metaImage = image?.asset ? imageUrlFor(buildImageObj(image)).width(1200).url() : "";

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title ?? ""}
      titleTemplate={title === siteTitle ? "%s" : `%s | ${siteTitle}`}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:image",
          content: metaImage,
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:creator",
          content: siteAuthor,
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:description",
          content: metaDescription,
        },
      ]
        .concat(
          keywords && keywords.length > 0
            ? {
                name: "keywords",
                content: keywords.join(", "),
              }
            : []
        )
        .concat(meta as never)}
    />
  );
}

SEO.defaultProps = {
  lang: "en",
  meta: [],
  keywords: [],
};

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site: sanitySiteSettings(_id: { eq: "siteSettings" }) {
      title
      description
      keywords
      author {
        name
      }
    }
  }
`;
