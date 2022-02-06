import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import { Maybe, SanityAuthorReference } from "../generated/graphql";

interface AuthorListProps {
  items: Maybe<SanityAuthorReference>[];
  title: string;
}

function AuthorList({ items, title }: AuthorListProps) {
  return (
    <div className="">
      <h2 className="">{title}</h2>
      <ul className="">
        {items?.map((item) => {
          const authorName = item?.author?.name;
          return (
            <li key={item?._key} className="">
              <div>
                <div className="">
                  {item?.author?.image?.asset && (
                    <img
                      src={
                        imageUrlFor(buildImageObj(item.author.image)).width(100).height(100).fit("crop").url() as string
                      }
                      alt=""
                    />
                  )}
                </div>
              </div>
              <div>
                <div>{authorName || <em>Missing name</em>}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AuthorList;
