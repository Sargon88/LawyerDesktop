import React, { useState } from "react";
import { Form, ListGroup, Row, Col } from 'react-bootstrap'

const AutocompleteInput = ({ options, onSelectItem }) => {
    const [suggestion, setSuggestion] = useState('');

    let filteredOptions = options.filter(i => i.name.toLowerCase().includes(suggestion.toLowerCase() || i.surname.toLowerCase().includes(suggestion.toLowerCase())));

    function handleChange(event){
        setSuggestion(event.target.value);
    }

    function selectListItem(event){ 
        console.log(filteredOptions[event.target.value])
        debugger;
        //setSuggestion(item);
        //onSelectItem(item);
    }

    return(
        <>
            <Form.Control type="input" value={suggestion} onChange={handleChange} />
                
            <ListGroup as="ul" variant="flush">
                {
                    filteredOptions.map((item, index) => {
                        return <ListGroup.Item as="li" action key={ item.id } onClick={ selectListItem } value={ index }>{item.surname + ' ' + item.name + ' - ' + item.code}</ListGroup.Item>
                    })
                }
            </ListGroup>
        </>
    );
  
};

export default AutocompleteInput;