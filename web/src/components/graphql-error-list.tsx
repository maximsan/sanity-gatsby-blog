interface GraphqlError {
  locations: { column: number; line: number }[];
  message: string;
  path: string[];
}

interface GraphQLErrorListProps {
  errors: GraphqlError[];
}

const GraphQLErrorList = ({ errors }: GraphQLErrorListProps) => (
  <div>
    <h1>GraphQL Error</h1>
    {errors.map((error) => (
      <pre key={error.message}>{error.message}</pre>
    ))}
  </div>
);

export default GraphQLErrorList;
