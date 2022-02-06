import { graphql } from "gatsby";
import type { PageProps } from "gatsby";
import { filterOutDocsPublishedInTheFuture, filterOutDocsWithoutSlugs, mapEdgesToNodes } from "../lib/helpers";
import BlogPostPreviewList from "../components/blog-post-preview-list";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import MainLayout from "../containers/layout";
import { SanityPostConnection, SanitySiteSettings } from "../generated/graphql";

export interface SanityErrors {
  errors?: {
    locations: { column: number; line: number }[];
    message: string;
    path: string[];
  }[];
}

export interface IPageProps extends PageProps<Data>, SanityErrors {}

interface Data {
  site: SanitySiteSettings;
  posts: SanityPostConnection;
}

export default function IndexPage(props: IPageProps) {
  // console.log("props", props);

  const { data, errors } = props;

  if (errors?.length) {
    return (
      <MainLayout>
        <GraphQLErrorList errors={errors} />
      </MainLayout>
    );
  }

  const site = data.site;
  const postNodes = data.posts
    ? mapEdgesToNodes(data.posts).filter(filterOutDocsWithoutSlugs).filter(filterOutDocsPublishedInTheFuture)
    : [];

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <MainLayout>
      {/*TODO: update it later*/}
      <SEO title={site.title} description={site.description} keywords={site.keywords as string[]} />
      <Container>
        <h1 hidden>Welcome to {site.title}</h1>
        {postNodes && <BlogPostPreviewList title="Latest blog posts" nodes={postNodes} browseMoreHref="/archive/" />}
      </Container>
    </MainLayout>
  );
}

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    posts: allSanityPost(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { gte: "2022-02-05" } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;
