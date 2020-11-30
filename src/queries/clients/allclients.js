import gql from "graphql-tag";

const ALL_CLIENTS_QUERY = gql`
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
	      pp_address{
	        id
	        address_street
	        address_number
	        address_city
	        address_region
	        address_country
	      }
	      pp_mobilephone{
	        id
	        phone_number
	      }
	      pp_phone{
	        id
	        phone_number
	      }
	      pp_fax{
	        id
	        phone_number
	      }
	      pp_email
	      pp_pec
	    }
	  }
	}
`;

export default ALL_CLIENTS_QUERY;