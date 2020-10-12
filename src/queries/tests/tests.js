import gql from "graphql-tag";

const TESTS_QUERY = gql`
  query Tests {
    tests {
      id
      nome
      cognome
      test
      test_relazione {
        nome
      }
    }
  }
`;

export default TESTS_QUERY;