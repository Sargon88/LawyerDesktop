import React, { useState } from "react";
import { Row, Col, Form } from 'react-bootstrap';
import AutocompleteInput  from '../AutocompleteInput';
import Query from "../../components/Query";
import ALL_PHYSICAL_PERSON_PREVIEW_QUERY from "../../queries/customers/allphysicalcustomerpreview";

 
//https://github.com/affinipay/react-bootstrap-autosuggest/blob/gh-pages/apidocs/Autosuggest.md
const ReferentModal = ({  }) => {
	const[selectedReferent, setSelectedReferent] =  useState(null);

	return(
		<Row>
			<Col>
				<Form.Group controlId="noteInput">
				<Form.Label>Scegli un referente</Form.Label>
				<Query query={ALL_PHYSICAL_PERSON_PREVIEW_QUERY} >
                      {({ loading, error, data: { people } }) => {
						  return <AutocompleteInput 
									options={ people }
									onSelectItem={ setSelectedReferent }
									/>
						  
					  }}
				</Query>
				</Form.Group>
			</Col>			
		</Row>
	);

};

export default ReferentModal;