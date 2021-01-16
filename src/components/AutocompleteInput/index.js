import React from "react";
import { Form, ListGroup, Row, Col } from 'react-bootstrap'

const AutocompleteInput = ({ options, onSelectItem, filteredoptions, handleChange, selectListItem, suggestion }) => {
    let filteredOptions = filteredoptions;

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