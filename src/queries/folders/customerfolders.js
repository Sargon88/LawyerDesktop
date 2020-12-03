import gql from "graphql-tag";

const CUSTOMER_FOLDERS_QUERY = gql`
	query Customer($customerId:ID!){
		client(id:$customerId) {
			id
			customer_type
			customer_customer{
				__typename
				... on ComponentCustomerLegalPerson{
					person:legal_person{
						id
						surname: lp_name
						code: lp_vatcode
						contact: lp_contact_method{
							cnn_phone{
								phone_number
							}
							cnn_mobile{
								phone_number
							}
							cnn_fax{
								phone_number
							}
							cnn_mail
							cnn_pec
						}
					}
				}
				... on ComponentCustomerPhysicalPerson{
					person:physical_person{
						id
						surname:pp_surname
						name:pp_name
						code:pp_fiscalcode
						contact:pp_contact_method{
							cnn_phone{
								phone_number
							}
							cnn_mobile{
								phone_number
							}
							cnn_fax{
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

export default CUSTOMER_FOLDERS_QUERY;