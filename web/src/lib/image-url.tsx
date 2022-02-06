import config from "../../client-config";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder(config.sanity);

export function imageUrlFor(source: SanityImageSource) {
  return builder.image(source);
}
