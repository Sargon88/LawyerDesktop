import gql from "graphql-tag";

const CUSTOMER_DATA_QUERY = gql`
	query Customer($customerId:ID!){
		person(id:$customerId) {
			id
			person_type
			person_surname
			person_name
			person_code
			person_contact{
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
			person_address{
				id
				street: address_street
				number: address_number
				city: address_city
				province: address_province
				zipcode: address_zipcode
				country: address_country
			}
			person_referents{
        		referent_role
				person{
					id
					person_name
					person_surname
					person_code
					person_contact{
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
				}
			}
		}
	}
`;

export default CUSTOMER_DATA_QUERY;