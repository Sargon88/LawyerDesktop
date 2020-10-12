import gql from "graphql-tag";

const ALL_DOCTORS_QUERY = gql`
  query Doctors{
    users(where:{role:{id:3}}){
      id
      Name
      Surname
    }
  }
`;

export default ALL_DOCTORS_QUERY;