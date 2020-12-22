import gql from "graphql-tag";

const ALL_FOLDERS_PREVIEW_QUERY = gql`
	query Issues{
	  issues{
	    id
	    name:iss_name
	    dossier:iss_dossier{
	      id
	      dossier_customer{
	        id
	        person_name
	        person_surname
	      }
	    }
	    type:iss_type
	    deadline:iss_deadline
	    status:iss_status
	    
	  }
	}
`;

export default ALL_FOLDERS_PREVIEW_QUERY;