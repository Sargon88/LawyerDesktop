import React, { useState } from "react";
import { Form, Row, Col } from 'react-bootstrap'

const HospitalSelectFilter = ({ options, turns, setEvents, selectedHospitals, buildCalendarEventsMap }) => {
  const [value, setValue] = useState('');


  //add selected doctor to map
  function addSelected(e){
    if(e){
      const item = e.target.value;
      const isChecked = e.target.checked;
      
      //add or remove doctor from selected doctor map
      if(selectedHospitals.has(item)){
        selectedHospitals.delete(item);

      } else {
        selectedHospitals.set(item, isChecked);  
      }
    }

    //filter turns based on selected hospitals
    let filteredTurns =turns.filter(i => selectedHospitals.size > 0 ? selectedHospitals.has(i.hospital.id) : true);

    setEvents(buildCalendarEventsMap(filteredTurns));
  }

  if(options && turns){

    let filteredOptions = options.filter(t=>t.Name.toLowerCase().includes(value.toLowerCase()));

    return(  
      <Col>
        <Row>
          <Col>
            <Form.Control type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="Ospedali"/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            {filteredOptions.map(option => (
              <Form.Check 
                type='checkbox'
                id={`hos-${option.id}`}
                key={`hos-${option.id}`}
                label={`${option.Name}`}
                value={option.id}
                checked = {selectedHospitals.get(option.id)}
                onChange = {e => addSelected(e)}
              />
            ))}
          </Col>
        </Row>
      </Col>
    );  
  }

  return (
    <Row></Row>
  );
  
};

export default HospitalSelectFilter;