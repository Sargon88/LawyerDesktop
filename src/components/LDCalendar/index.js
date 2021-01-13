import React, { useState,useEffect } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import { Row, Col, Fade, Button, Modal } from 'react-bootstrap';
import FormComponent from "../FormComponent";
import * as FormModel from "../../config/forms";

var newEventModel = {
  event_start: null,
  event_end: null,
  event_allday: false,
  event_title: null,
  event_description: null,

}

const LDCalendar = ({ eventslist, height }) => {
  var appUser = null;
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState(newEventModel);
  const localizer = momentLocalizer(moment);

  useEffect(() => {
    setEvents(eventslist);
  }, [eventslist]);

  const handleSelectSlot = ({ start, end }) => {
    var e = newEventModel;
    e.event_start = start;
    e.event_end = end;
    setNewEvent(e);
    handleShow();  
  }

  //MODAL
	const [show, setShow] = useState(false);

	const handleClose = () => {
    setShow(false);
    setNewEvent(newEventModel);
  };
	const handleShow = () => setShow(true);
	//MODAL

  return (
    <>
      <Calendar
        selectable
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: height }}
        onSelectEvent={event => alert(event.title)}
        onSelectSlot={handleSelectSlot}
      />

      <Modal show={show} onHide={handleClose} backdrop="static" centered>
				<Modal.Header>
					<Modal.Title>Aggiungi Evento</Modal.Title>
				</Modal.Header>
				<Modal.Body>
        <FormComponent entity={ FormModel.event } customerModel={ newEvent } errorModel={ {} } hiddenFields={[]} />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Annulla
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Salva
					</Button>
				</Modal.Footer>
			</Modal>


    </>
          
  );
    

  
  
};

export default LDCalendar;