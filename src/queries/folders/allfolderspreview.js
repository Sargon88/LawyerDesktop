import gql from "graphql-tag";

const ALL_FOLDERS_PREVIEW_QUERY = gql`
	query Issues{
	  issues{
	    id
	    name:issue_name
	    dossier:issue_dossier{
	      id
	      dossier_customer{
	        id
	        person_name
	        person_surname
	      }
	    }
	    type:issue_type
	    deadline:issue_deadline
	    status:issue_status
	    
	  }
	}
`;

export default ALL_FOLDERS_PREVIEW_QUERY;