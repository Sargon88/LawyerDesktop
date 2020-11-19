import gql from "graphql-tag";

const TESTS_QUERY = gql`
  query Tests{
    tests{
      id
      test
    }
  }
`;

export default TESTS_QUERY;