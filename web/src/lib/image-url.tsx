import clientConfig from "../../client-config";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder(clientConfig.sanity);

export function imageUrlFor(source: SanityImageSource) {
  return builder.image(source);
}
