import React, { useState } from "react";
import { Row, Col, Form, Button } from 'react-bootstrap';
import AutocompleteInput  from '../AutocompleteInput';
import Query from "../../components/Query";
import ALL_PHYSICAL_PERSON_PREVIEW_QUERY from "../../queries/customers/allphysicalcustomerpreview";

 
//https://github.com/affinipay/react-bootstrap-autosuggest/blob/gh-pages/apidocs/Autosuggest.md
const ReferentModal = ({ customerModel }) => {
	const[selectedReferent, setSelectedReferent] =  useState(null);
	const [suggestion, setSuggestion] = useState('');
	let filteredOptions =[];

    function handleChange(event){
        setSuggestion(event.target.value);
    }

    function selectListItem(event){
		console.log("SELECTED", event.target)
		var item = filteredOptions[event.target.value]; 
		console.log(item);
        setSuggestion(item.name + " " + item.surname);
    } 

	return(
		<>
			<Row>
				<Col>
					<Form.Group controlId="noteInput">
					<Form.Label>Scegli un referente</Form.Label>
					<Query query={ALL_PHYSICAL_PERSON_PREVIEW_QUERY} >
						{({ loading, error, data: { people } }) => {

							filteredOptions = people.filter(i => i.name.toLowerCase().includes(suggestion.toLowerCase() || i.surname.toLowerCase().includes(suggestion.toLowerCase())));

							return <AutocompleteInput 
										options={ people }
										onSelectItem={ setSelectedReferent }
										filteredoptions={ filteredOptions }
										handleChange={ handleChange }
										selectListItem={ selectListItem }
										suggestion={ suggestion }
										/>
							
						}}
					</Query>
					</Form.Group>
				</Col>			
			</Row>
			<Row>
				<Col>
					<Button className="pull-right" variant="link" size="sm" href={'/referents/new/' + customerModel.id}>Inserisci nuovo referente</Button>
				</Col>
			</Row>
		</>
	);

};

export default ReferentModal;