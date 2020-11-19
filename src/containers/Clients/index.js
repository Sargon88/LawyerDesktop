import React, { useState } from "react";
import Query from "../../components/Query";
import { Row, Col, Container, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Client from "../../components/Clients";
import ALL_CLIENTS_QUERY from "../../queries/clients/allclients";

const Clients = () => {
  const [value, setValue] = useState('');

  var appUser = null;

  if(localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_APPUSER)){
    appUser = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_APPUSER));  
  }
  
  if(appUser){

      return (
        <Container fluid>
          <br />
          <Row>
            <Col xs={4}>
              <Row>
                <Form.Label column xs="2">Filtra</Form.Label>
                <Col xs={10}> 
                  <Form.Control type="text" value={value} onChange={e => setValue(e.target.value)}/>
                </Col>
              </Row>  
            </Col>
            <Col><Link to={`/clienti/nuovo`}>Nuovo</Link></Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Query query={ALL_CLIENTS_QUERY}>
                {({ data: { clients } }) => {
                  return <Client data={{clients}}/>;
                }}
              </Query>
            </Col>
          </Row>
        </Container>
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

export default Clients;