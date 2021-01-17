import React, { useState, useEffect } from "react";
import { Row, Col } from 'react-bootstrap';
import { useAppContext } from "../../utils/contextLib";
import EventModal from "../../components/EventModal";
import Query from "../../components/Query";
import LDCalendar from "../../components/LDCalendar";


import GET_EVENTS_QUERY from "../../queries/events/events";

const Dashboard = () => {
  const { isAuthenticated } = useAppContext();
  const { setNavbarData } = useAppContext();
  const [newEvent, setNewEvent] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    setNavbarData({
      edit: false,
      selectedId: "",
      page:"dashboard",
    });
  }, []);

  const handleSelectSlot = ({ start, end }) => {
    var e =  {
      event_start: start,
      event_end: end,
      event_allday: false,
      event_title: null,
      event_description: null,
    };
    
    setNewEvent(e);
    setShow(true);
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
    setShow(true);
  }
  
  if(isAuthenticated){
    return (
      <>
        <Row>
          <Col>
            <Query query={GET_EVENTS_QUERY} fetchPolicy={'cache'} pollInterval={1000}>
              {({ data: { events } }) => {

                events.map((e) => {
                  if(e.type == 'appuntamento'){
                    e.color = 'red'
                  } else if(e.type == 'udienza'){
                    e.color = 'green'
                  }
                });
                
                return <LDCalendar 
                          eventslist={events} 
                          height={'90vh'}
                          handleSelectSlot={handleSelectSlot}
                          handleSelectEvent={handleSelectEvent}
                          />;
              }}
            </Query>  
          </Col>
        </Row>
        
        <EventModal newEvent={ newEvent } setNewEvent={ setNewEvent } show={ show } setShow={ setShow } />
              
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