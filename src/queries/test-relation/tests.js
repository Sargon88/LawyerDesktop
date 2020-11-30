import gql from 'graphql-tag';

const CATEGORY_TESTS_QUERY = gql`
  query testRelazione($id: ID!) {
    testRelazione (id: $id) {
      nome
      tests{
        nome
        cognome
        test
        test_relazione{
          nome
        }
      }      
    }
  }
`;

export default CATEGORY_TESTS_QUERY;