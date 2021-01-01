import React, { useState } from "react";
import { Form, ListGroup, Row, Col } from 'react-bootstrap'

const AutocompleteInput = ({ options, onSelectItem }) => {
    const [suggestion, setSuggestion] = useState('');

    let filteredOptions = options.filter(i => i.name.toLowerCase().includes(suggestion.toLowerCase() || i.surname.toLowerCase().includes(suggestion.toLowerCase())));

    function handleChange(event){
        setSuggestion(event.target.value);
    }

    function selectListItem(event){
        var item = filteredOptions[event.target.value]; 
        console.log(item);
        //debugger;

        setSuggestion(item.name + " " + item.surname);
        onSelectItem(item);
    } 

    return(
        <Row className="ld_autocompleterow">
            <Col>
                <Row>
                    <Col>
                        <Form.Control type="input" value={suggestion} onChange={handleChange} />
                    </Col>
                </Row>
                <Row>
                    <Col >    
                        <ListGroup as="ul" variant="flush">
                            {
                                filteredOptions.map((item, index) => {
                                    return <ListGroup.Item as="li" action key={ item.id } onClick={ selectListItem } value={ index }>{item.surname + ' ' + item.name + ' - ' + item.code}</ListGroup.Item>
                                })
                            }
                        </ListGroup>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
  
};

export default AutocompleteInput;