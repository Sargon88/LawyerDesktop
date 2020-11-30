import gql from "graphql-tag";

const RELATIONS_QUERY = gql`
	query TestRelaziones {
		testRelaziones {
			id
			nome
		}
	}
`;

export default RELATIONS_QUERY;