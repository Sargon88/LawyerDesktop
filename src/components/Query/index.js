import React from "react";
import { useQuery } from "react-apollo";

const Query = ({ children, query, variables, fetchPolicy, pollInterval }) => {

	const { data, loading, error } = useQuery(
		query, 
		{ 
			variables: variables,
			fetchPolicy: fetchPolicy || 'cache-and-network',
			pollInterval: pollInterval || 0
		},
		
	);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {JSON.stringify(error)}</p>;

	return children({ data });
};

export default Query;