import { Figure } from "./Figure";

const serializers = {
  types: {
    /* eslint-disable-next-line react/display-name */
    authorReference: ({ node }: { node: any }) => <span>{node.author.name}</span>,
    mainImage: Figure,
  },
};

export default serializers;
