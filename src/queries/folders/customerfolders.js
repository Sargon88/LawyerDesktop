import gql from "graphql-tag";

const CUSTOMER_FOLDERS_QUERY = gql`
	query Customer($customerId:ID!){
		person(id:$customerId) {
			id
			type:person_type
			surname: person_surname
			name: person_name
			code: person_code
			contact: person_contact{
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
			referents:person_referents{
				person{
					name:person_name
					surname:person_surname
					code:person_code
					contact:person_contact{
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
`;

export default CUSTOMER_FOLDERS_QUERY;