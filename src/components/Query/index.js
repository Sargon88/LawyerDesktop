import React from "react";
import { useQuery } from "react-apollo";

const Query = ({ children, query, variables, fetchPolicy }) => {

	const { data, loading, error } = useQuery(
		query, 
		{ 
			variables: variables,
			fetchPolicy: 'no-cache'
		},
		
	);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {JSON.stringify(error)}</p>;

	return children({ data });
};

export default Query;