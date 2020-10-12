import React, { useState, useEffect } from "react";
import { Row, Col } from 'react-bootstrap'
import Query from "../../components/Query";
import DoctorSelectFilter from "../../components/Bootstrap/DoctorSelectFilter";
import HospitalSelectFilter from "../../components/Bootstrap/HospitalSelectFilter";
import ALL_DOCTORS_QUERY from "../../queries/doctors/all_doctors";
import ALL_HOSPITALS_QUERY from "../../queries/hospitals/all_hospitals";

const CalendarFilter = ({ turns, setEvents, buildCalendarEventsMap }) => {
  const [selectedDoctors] = useState(new Map());
  const [selectedHospitals] = useState(new Map());
  const [docEvents, setDocEvents] = useState([]);
  const [hosEvents, setHosEvents] = useState([]);

  useEffect(() => {
    if(docEvents.length > 0 && hosEvents.length === 0){
      setEvents(docEvents);

    } else if(docEvents.length === 0 && hosEvents.length > 0){
      setEvents(hosEvents);

    } else if(docEvents.length > 0 && hosEvents.length > 0){
      var t = docEvents.filter(i => hosEvents.some(j => i.id === j.id));
      setEvents(t);

    }
    
  }, [docEvents, hosEvents, setEvents]);

  if(turns){

    return(
      <Row>
        <Col>
          <Row>
            <Query query={ALL_DOCTORS_QUERY}>
              {({ data: { users } }) => {
                return <DoctorSelectFilter options={users} 
                                           turns={turns}
                                           setEvents={setDocEvents} 
                                           selectedDoctors={selectedDoctors} 
                                           buildCalendarEventsMap={buildCalendarEventsMap} />
              }}
            </Query>
            
          </Row>
          <br />
          <Row>
            <Query query={ALL_HOSPITALS_QUERY}>
              {({ data: { hospitals } }) => {
                return <HospitalSelectFilter options={hospitals}
                                             turns={turns} 
                                             setEvents={setHosEvents} 
                                             selectedHospitals={selectedHospitals} 
                                             buildCalendarEventsMap={buildCalendarEventsMap} />
              }}
            </Query>
          </Row>
        </Col>
      </Row>
    );  
  }

  return (
    <Row></Row>
  );
  
};

export default CalendarFilter;