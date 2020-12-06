import gql from "graphql-tag";

const CUSTOMER_DATA_QUERY = gql`
	query Customer($customerId:ID!){
		person(id:$customerId) {
			id
			type: person_type
			surname: person_surname
			name: person_name
			code: person_code
			contact: person_contact{
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
			address:person_address{
				id
				street: address_street
				number: address_number
				city: address_city
				province: address_province
				zipcode: address_zipcode
				country: address_country
			}
			referents:person_referents{
				person:person{
					id
					name:person_name
					surname:person_surname
					code:person_code
					contact: person_contact{
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