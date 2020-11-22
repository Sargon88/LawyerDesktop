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
		        	person:legal_person{
		          		surname: lp_name
		          		code: lp_vatcode
		          		contact: lp_contact_method{
		            		cnn_phone{
		              			phone_number
		            		}
		            		cnn_mail
		            		cnn_pec
		          		}
		        	}
		      	}
		      	... on ComponentCustomerPhysicalPerson{
		        	person:physical_person{
		          		surname:pp_surname
		          		name:pp_name
		          		code:pp_fiscalcode
		          		contact:pp_contact_method{
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
	}
`;

export default ALL_CLIENTS_PREVIEW_QUERY;