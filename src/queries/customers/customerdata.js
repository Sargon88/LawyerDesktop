import gql from "graphql-tag";

const CUSTOMER_DATA_QUERY = gql`
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
								id
								phone_number
							}
							cnn_mobile{
								id
								phone_number
							}
							cnn_fax{
								id
								phone_number
							}
							cnn_mail
							cnn_pec
						}
						address:lp_address{
							id
							street: address_street
							number: address_number
							city: address_city
							province: address_province
							zipcode: address_zipcode
							country: address_country
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
								id
								phone_number
							}
							cnn_mobile{
								id
								phone_number
							}
							cnn_fax{
								id
								phone_number
							}
							cnn_mail
							cnn_pec
						}
						address:pp_address{
							id
							street: address_street
							number: address_number
							city: address_city
							province: address_province
							zipcode: address_zipcode
							country: address_country
						}
					}
				}
			}
		}
	}
`;

export default CUSTOMER_DATA_QUERY;