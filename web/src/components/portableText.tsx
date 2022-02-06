import config from "../../client-config";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import BasePortableText from "@sanity/block-content-to-react";
import serializers from "./serializers";

interface PortableTextProps {
  blocks: any[];
}

const PortableText = ({ blocks }: PortableTextProps) => (
  <BasePortableText blocks={blocks} serializers={serializers} {...config.sanity} />
);

export default PortableText;
