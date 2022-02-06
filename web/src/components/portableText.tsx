import config from "../../client-config";
import BasePortableText from "@sanity/block-content-to-react";
import serializers from "./serializers";

const PortableText = ({ blocks }) => <BasePortableText blocks={blocks} serializers={serializers} {...config.sanity} />;

export default PortableText;
