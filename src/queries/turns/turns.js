import gql from "graphql-tag";

const ALL_TURNS_QUERY = gql`
  query Turns {
    turns {
      id
      Start
      End
      hospital {
        Name
        Street
        City
        Cap
      }
      doctor{
        Name
        Surname
        id
        Phone
      }
      
    }
  }
`;

export default ALL_TURNS_QUERY;