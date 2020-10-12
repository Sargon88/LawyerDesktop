import gql from "graphql-tag";

const ALL_HOSPITALS_QUERY = gql`
  query Hospitals{
	  hospitals{
	    id
	    Name
	  }
	}
`;

export default ALL_HOSPITALS_QUERY;