import React, { useState, useEffect } from "react";
import { Row, Col, Button, Modal } from 'react-bootstrap';
import AutocompleteInput  from '../AutocompleteInput';
import Query from "../../components/Query";
import ALL_PHYSICAL_PERSON_PREVIEW_QUERY from "../../queries/customers/allphysicalcustomerpreview";
import ALL_ISSUES_PREVIEW_QUERY from "../../queries/issues/allissuespreview"; 
import axios from 'axios';
import FormComponent from "../FormComponent";
import * as FormModel from "../../config/forms";
import { useAlert } from 'react-alert';

 
//https://github.com/affinipay/react-bootstrap-autosuggest/blob/gh-pages/apidocs/Autosuggest.md
const EventModal = ({ newEvent, setNewEvent, show, setShow }) => {
    const alert = useAlert();

    //MODAL
    const handleClose = () => {
        setShow(false);
        setNewEvent({});
        setSelectedCustomer(false);
        setSelectedDossier(false);
        setSuggestionCustomer('');
        setSuggestionDossier('');
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
    const [suggestionCustomer, setSuggestionCustomer] = useState(newEvent.event_customer != null ? newEvent.event_customer.person_name + ' ' + newEvent.event_customer.person_surname : '');
    const [suggestionDossier, setSuggestionDossier] = useState('');
    const [selectedDossier, setSelectedDossier] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(false);
    let filteredCustomer =[];
    let filteredDossier =[];

    function handleChangeCustomer(event){
        setSuggestionCustomer(event.target.value);
        setSelectedCustomer(false);
    }

    function handleChangeDossier(event){
        setSuggestionDossier(event.target.value);
        setSelectedDossier(false);
    }

    function selectCustomer(event){
        console.log("SELECTED", event.target)
        var item = filteredCustomer[event.target.value]; 
        console.log(item);
        setSuggestionCustomer(item.name + " " + item.surname);
        setSelectedCustomer(true);
    } 

    function selectDossier(event){
        console.log("SELECTED", event.target)
        var item = filteredDossier[event.target.value]; 
        console.log(item);
        setSuggestionDossier(item.name);
        setSelectedDossier(true);
    } 
    //AUTOCOMPLETE

    console.log("NEW", newEvent);
    /*
    if(newEvent.event_customer != null){
        setSuggestionCustomer(newEvent.event_customer.person_name + ' ' + newEvent.event_customer.person_surname);
        setSelectedCustomer(true);
    }

    if(newEvent.event_dossier != null){
        setSuggestionDossier(newEvent.event_dossier.name);
        setSelectedDossier(true)
    }
    */

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

                            if(!selectedCustomer){
                                filteredCustomer = people.filter(i => i.name.toLowerCase().includes(suggestionCustomer.toLowerCase() || i.surname.toLowerCase().includes(suggestionCustomer.toLowerCase())));    
                            } else {
                                filteredCustomer = [];
                            }
                             
                            return  <AutocompleteInput 
                                        filteredoptions={ filteredCustomer }
                                        handleChange={ handleChangeCustomer }
                                        selectListItem={ selectCustomer }
                                        suggestion={ suggestionCustomer }
                                        suggestionView={"item.surname + ' ' + item.name + ' - ' + item.code"}
                                        />

                        }}
                    </Query>
                </Col>
            </Row>

            <Row>
                <Col xs={3}>Pratica</Col>
                <Col xs={9}>
                    <Query query={ALL_ISSUES_PREVIEW_QUERY} >
                        {({ loading, error, data: { issues } }) => {

                            if(!selectedDossier){
                                filteredDossier = issues.filter(i => suggestionDossier && i.name.toLowerCase().includes(suggestionDossier.toLowerCase()));
                            } else {
                                filteredDossier = [];
                            }
                            
                            return  <AutocompleteInput 
                                        filteredoptions={ filteredDossier }
                                        handleChange={ handleChangeDossier }
                                        selectListItem={ selectDossier }
                                        suggestion={ suggestionDossier }
                                        suggestionView={"item.name"}
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
            <Button variant="danger" onClick={deleteEvent} style={{display: newEvent && newEvent.id != null  ? "block" : "none"}}>
              Elimina
            </Button>
          </Modal.Footer>
        </Modal>
    );

};

export default EventModal;