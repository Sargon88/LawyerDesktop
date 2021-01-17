import React, { useState } from "react";
import { Row, Col, Button, Modal } from 'react-bootstrap';
import AutocompleteInput  from '../AutocompleteInput';
import Query from "../../components/Query";
import ALL_PHYSICAL_PERSON_PREVIEW_QUERY from "../../queries/customers/allphysicalcustomerpreview";
import axios from 'axios';
import FormComponent from "../FormComponent";
import * as FormModel from "../../config/forms";

 
//https://github.com/affinipay/react-bootstrap-autosuggest/blob/gh-pages/apidocs/Autosuggest.md
const EventModal = ({ newEvent, setNewEvent, show, setShow }) => {
    
    //MODAL

    const handleClose = () => {
        setShow(false);
        setNewEvent({});
    };

    const save = () => {
        if(newEvent.id){
            axios.put(`${process.env.REACT_APP_BACKEND_URL}/events/` + newEvent.id, newEvent, {
                headers: {
                    Authorization:
                        'Bearer ' + localStorage.getItem("JWTtoken")
            }})
            .then(response => {

                if(response.status === 200){
                    alert.success("Salvato");
                    setShow(false);
                } else {
                    alert.error("Errore:" + response.error);
                }
            });

        } else {
            axios.post(`${process.env.REACT_APP_BACKEND_URL}/events`, newEvent, {
                headers: {
                    Authorization:
                        'Bearer ' + localStorage.getItem("JWTtoken")
            }})
            .then(response => {

                if(response.status === 200){
                    alert.success("Salvato");
                    setShow(false);

                } else {
                    alert.error("Errore:" + response.error);
                }
            });
        }
    };

    const deleteEvent = () => {
        newEvent.event_isvalid = false;

        axios.put(`${process.env.REACT_APP_BACKEND_URL}/events/` + newEvent.id, newEvent, {
            headers: {
                Authorization:
                    'Bearer ' + localStorage.getItem("JWTtoken")
        }})
        .then(response => {
            if(response.status === 200){
                alert.success("Cancellato");
                setShow(false);              

            } else {
                alert.error("Errore:" + response.error);
            }
        });
    };
    //MODAL

    //AUTOCOMPLETE
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
    //AUTOCOMPLETE

    return(
        <Modal show={show} onHide={handleClose} backdrop="static" centered>
          <Modal.Header>
            <Modal.Title>Aggiungi Evento</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormComponent entity={ FormModel.event } customerModel={ newEvent } errorModel={ {} } hiddenFields={[]} />
            
            <Row>
                <Col xs={3}>Cliente</Col>
                <Col xs={9}>
                    <Query query={ALL_PHYSICAL_PERSON_PREVIEW_QUERY} >
                        {({ loading, error, data: { people } }) => {

                            filteredOptions = people.filter(i => i.name.toLowerCase().includes(suggestion.toLowerCase() || i.surname.toLowerCase().includes(suggestion.toLowerCase())));
                            console.log("OPITIONS", filteredOptions);

                            return <AutocompleteInput 
                                        filteredoptions={ filteredOptions }
                                        handleChange={ handleChange }
                                        selectListItem={ selectListItem }
                                        suggestion={ suggestion }
                                        />

                        }}
                    </Query>
                </Col>
            </Row>

            <Row>
                <Col xs={3}>Pratica</Col>
                <Col xs={9}>
                    <Query query={ALL_PHYSICAL_PERSON_PREVIEW_QUERY} >
                        {({ loading, error, data: { people } }) => {

                            filteredOptions = people.filter(i => i.name.toLowerCase().includes(suggestion.toLowerCase() || i.surname.toLowerCase().includes(suggestion.toLowerCase())));
                            console.log("OPITIONS", filteredOptions);

                            return <AutocompleteInput 
                                        filteredoptions={ filteredOptions }
                                        handleChange={ handleChange }
                                        selectListItem={ selectListItem }
                                        suggestion={ suggestion }
                                        />

                        }}
                    </Query>
                </Col>
            </Row>
            

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Annulla
            </Button>
            <Button variant="primary" onClick={save}>
              Salva
            </Button>
            <Button variant="danger" onClick={deleteEvent} style={{display: newEvent.id != null  ? "block" : "none"}}>
              Elimina
            </Button>
          </Modal.Footer>
        </Modal>
    );

};

export default EventModal;