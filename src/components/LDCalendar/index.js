import React, { useState,useEffect } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import { Row, Col, Fade, Button } from 'react-bootstrap'
//import CalendarFilter from "../../containers/CalendarFilter";

const LDCalendar = ({ eventslist }) => {
  var appUser = null;
  const [events, setEvents] = useState([]);
  const localizer = momentLocalizer(moment);
  const [open, setOpen] = useState(true);
  const [calendarCol, setCalendarCol] = useState(9);
  const [filterCol, setFilterCol] = useState(3);
  const [openIcon, setOpenIcon] = useState('>');

  

  useEffect(() => {
    setEvents(eventslist);
  }, [eventslist]);

  function toggleFilterCol(){
    setOpen(!open);
    setCalendarCol(open ? 11 : 9);
    setFilterCol(open ? 1 : 3);
    setOpenIcon(open ? '<' : '>');
  }

  
  return (
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
          
  );
    

  
  
};

export default LDCalendar;