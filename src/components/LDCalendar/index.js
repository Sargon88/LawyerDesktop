import React, { useState,useEffect } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';

const LDCalendar = ({ eventslist, height, handleSelectSlot, handleSelectEvent }) => {
  const [events, setEvents] = useState([]);
  const localizer = momentLocalizer(moment);

  useEffect(() => {
    setEvents(eventslist);
  }, [eventslist]);

  return (
    <>
      <Calendar
        selectable
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: height }}
        onSelectEvent={event => handleSelectEvent(event)}
        onSelectSlot={handleSelectSlot}
      />
    </>
          
  );
    

  
  
};

export default LDCalendar;