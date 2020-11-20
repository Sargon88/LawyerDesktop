import gql from "graphql-tag";

const ALL_CLIENTS_PREVIEW_QUERY = gql`
  query Clients{
	  clients {
	    id
	    client_name
	    client_legal_person{
	      id
	      lp_name
	    }
	    client_physical_person{
	      pp_name
	      pp_surname
	      pp_fiscalcode
	      pp_mobilephone{
	        phone_number
	      }
	      pp_phone{
	        phone_number
	      }
	      pp_email
	      pp_pec
	    }
	  }
	}
`;

export default ALL_CLIENTS_PREVIEW_QUERY;