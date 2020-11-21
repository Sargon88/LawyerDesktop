import gql from "graphql-tag";

const ALL_CLIENTS_PREVIEW_QUERY = gql`
	  query Customers{
		  clients(where:{customer_active:true}) {
		    id
		    customer_name
		    customer_type
		    customer_customer{
		      __typename
		      ... on ComponentCustomerLegalPerson{
		        legal_person{
		          lp_name
		          lp_vatcode
		          lp_contact_method{
		            cnn_phone{
		              phone_number
		            }
		            cnn_mail
		            cnn_pec
		          }
		        }
		      }
		      ... on ComponentCustomerPhysicalPerson{
		        physical_person{
		          pp_surname
		          pp_name
		          pp_fiscalcode
		          pp_contact_method{
		            cnn_phone{
		              phone_number
		            }
		            cnn_mail
		            cnn_pec
		          }
		        }
		      }
		    }
		  }
	}`;

export default ALL_CLIENTS_PREVIEW_QUERY;