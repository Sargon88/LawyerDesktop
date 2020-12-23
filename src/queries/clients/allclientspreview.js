import gql from "graphql-tag";

const ALL_CLIENTS_PREVIEW_QUERY = gql`
	query Customers{
		people(where:{person_active: true}) {
			id
			name: person_name
			surname: person_surname
			type: person_type
			code: person_code
			contact: person_contact{
				id
				cnn_phone{
					id
					phone_number
				}
				cnn_mail
				cnn_pec
			}
		}
	}
`;

export default ALL_CLIENTS_PREVIEW_QUERY;