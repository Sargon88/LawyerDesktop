import React, { useState } from "react";
import { Form, Row, Col } from 'react-bootstrap'

const DoctorSelectFilter = ({ options, turns, setEvents, selectedDoctors, buildCalendarEventsMap }) => {
  const [value, setValue] = useState('');

  //add selected doctor to map
  function addSelected(e){
    if(e){
      const item = e.target.value;
      const isChecked = e.target.checked;
      
      //add or remove doctor from selected doctor map
      if(selectedDoctors.has(item)){
        selectedDoctors.delete(item);

      } else {
        selectedDoctors.set(item, isChecked);  
      }
    }

    //filter turns based on selected doctors
    let filteredTurns = turns.filter(i => selectedDoctors.size > 0 ? selectedDoctors.has(i.doctor.id) : true);
    setEvents(buildCalendarEventsMap(filteredTurns));
  }

  if(options && turns){

    let filteredOptions = options.filter(t=>t.Name.toLowerCase().includes(value.toLowerCase()) || t.Surname.toLowerCase().includes(value.toLowerCase()));

    return(  
      <Col>
        <Row>
          <Col>
            <Form.Control type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="Dottori"/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            {filteredOptions.map(option => (
              <Form.Check 
                type='checkbox'
                id={`doc-${option.id}`}
                key={`doc-${option.id}`}
                label={`${option.Name} ${option.Surname}`}
                value={option.id}
                checked = {selectedDoctors.get(option.id)}
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

export default DoctorSelectFilter;