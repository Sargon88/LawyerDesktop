import gql from "graphql-tag";

const ALL_ISSUES_PREVIEW_QUERY = gql`
    query Issues{
        issues {
            id
            name:iss_name
        }
    }
`;

export default ALL_ISSUES_PREVIEW_QUERY;