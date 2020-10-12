import gql from "graphql-tag";

const DOCTOR_TURNS_QUERY = gql`
  query Turns($id: ID!) {
    turns(where: {doctor: {id: $id}}) {
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

export default DOCTOR_TURNS_QUERY;