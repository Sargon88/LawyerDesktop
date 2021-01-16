import React, { useState, useEffect } from "react";
import { Row, Col, Button, Modal } from 'react-bootstrap';
import { useAppContext } from "../../utils/contextLib";
import { useAlert } from 'react-alert';
import FormComponent from "../../components/FormComponent";
import AutocompleteInput from "../../components/AutocompleteInput";
import * as FormModel from "../../config/forms";
import Query from "../../components/Query";
import LDCalendar from "../../components/LDCalendar";
import axios from 'axios';

import GET_EVENTS_QUERY from "../../queries/events/events";


const now = new Date();

const Dashboard = () => {
  const { isAuthenticated } = useAppContext();
  const { setNavbarData } = useAppContext();
  const [newEvent, setNewEvent] = useState({});
  const [reload, setReload] = useState(false);
  const alert = useAlert()

  useEffect(() => {
    setNavbarData({
      edit: false,
      selectedId: "",
      page:"dashboard",
    });
  }, []);

  //MODAL
  const [show, setShow] = useState(false);
  
  const handleSelectSlot = ({ start, end }) => {
    var e =  {
      event_start: start,
      event_end: end,
      event_allday: false,
      event_title: null,
      event_description: null,
    };
    
    setNewEvent(e);
    handleShow();  
  }

  const handleSelectEvent = (event) => {
    console.log("EVENT", event);
    
    setNewEvent({
      id: event.id,
      event_start: event.start,
      event_end: event.end,
      event_description: event.description,
      event_allday: event.allDay,
      event_title: event.title,
      event_type: event.type
    });
    handleShow();  
  }

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

	const handleShow = () => setShow(true);
	//MODAL
  
  if(isAuthenticated){
    return (
      <>
        <Row>
          <Col>
            <Query query={GET_EVENTS_QUERY} fetchPolicy={'network-only'} pollInterval={1000}>
              {({ data: { events } }) => {
                return <LDCalendar eventslist={events} 
                                   height={'90vh'}
                                   handleSelectSlot={handleSelectSlot}
                                   handleSelectEvent={handleSelectEvent}
                                   />;
              }}
            </Query>  
          </Col>
        </Row>

        <Modal show={show} onHide={handleClose} backdrop="static" centered>
          <Modal.Header>
            <Modal.Title>Aggiungi Evento</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormComponent entity={ FormModel.event } customerModel={ newEvent } errorModel={ {} } hiddenFields={[]} />
            <AutocompleteInput />
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
      </>
    );
  }   

  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          You are not logged in. Logout and log in again.          
        </div>
      </div>
    </div>
  );  

  
};

export default Dashboard;