import gql from "graphql-tag";

const GET_EVENTS_QUERY = gql`
	query Events{
		events(where:{event_isvalid:true}) {
			id
			title:event_title
			start:event_start
			end:event_end
			description:event_description
			allDay:event_allday
			type:event_type
			customer: event_customer {
				id
				person_name
				person_surname
			}
			dossier: event_dossier{
				id
				dossier_name
			}
		}
	}
`;

export default GET_EVENTS_QUERY;