import React, { useState,useEffect } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import { Row, Col, Fade, Button } from 'react-bootstrap'
import CalendarFilter from "../../containers/CalendarFilter";

const TurnsCalendar = ({ turns }) => {
  var appUser = null;
  const [events, setEvents] = useState([]);
  const localizer = momentLocalizer(moment);
  const [open, setOpen] = useState(true);
  const [calendarCol, setCalendarCol] = useState(9);
  const [filterCol, setFilterCol] = useState(3);
  const [openIcon, setOpenIcon] = useState('>');

  if(localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_APPUSER)){
    appUser = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_APPUSER));  
  }

  useEffect(() => {
      setEvents(buildCalendarEventsMap(turns));
  }, [turns]);

  function buildCalendarEventsMap(turns){
    let temp = [];
    //build calendar event lists based on filtered turns
    turns.map((turn, i) => {
      var Event =  {
        'title': turn.hospital.Name + ':' + turn.doctor.Name + turn.doctor.Surname,
        'start': turn.Start,
        'end': turn.End,
        'allDay': false,
        'resource': null,
        'doctor': turn.doctor,
        'hospital': turn.hospital,
        'id': turn.id
      }
      temp.push(Event);  
    });
    return temp;
  }

  function toggleFilterCol(){
    setOpen(!open);
    setCalendarCol(open ? 11 : 9);
    setFilterCol(open ? 1 : 3);
    setOpenIcon(open ? '<' : '>');

  }

  if(appUser){

    if(appUser.role.id === 3){
      //doctor
      return (
        <Row>
          <Col>
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
            />
          </Col>
        </Row>  
      );
    } else if(appUser.role.id === 4){
      //manager
      return (
        <Row> 
          <Col xs={calendarCol} md={calendarCol} lg={calendarCol}>
            <Row>
              <Col>
                <Calendar
                  localizer={localizer}
                  events={events}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: 500 }}
                  onDrillDown = {function(){}}
                />
              </Col>
            </Row>
          </Col>
           <Col xs={filterCol} md={filterCol} lg={filterCol}>
            <Row>
              <Col xs='2' md='2' lg='2'>
                <Button variant="outline-secondary" onClick={() => toggleFilterCol()}>
                  {openIcon}
                </Button>
              </Col>
              <Fade in={open}>
                <Col>
                  <CalendarFilter turns={turns} 
                                  setEvents={setEvents} 
                                  buildCalendarEventsMap={buildCalendarEventsMap} />
                </Col>
              </Fade>
            </Row>
          </Col>
        </Row>  
      );

    }

  }
  
};

export default TurnsCalendar;