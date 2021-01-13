import gql from "graphql-tag";

const GET_EVENTS_QUERY = gql`
	query Events{
		events {
			id
			title:event_title
	start:event_start
	end:event_end
	description:event_description
	allDay:event_allday
	type:event_type
		}
	}
`;

export default GET_EVENTS_QUERY;