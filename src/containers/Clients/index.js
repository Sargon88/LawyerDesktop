import React, { useState } from "react";
import { Row, Col, Container, Form, InputGroup, FormControl } from 'react-bootstrap';
import Query from "../../components/Query";
import Client from "../../components/Clients";
import Navbar from "../../components/Nav";
import ALL_CLIENTS_PREVIEW_QUERY from "../../queries/clients/allclientspreview";
import './clients.css';

const Clients = () => {
  const [value, setValue] = useState('');
  const [ppvalue, setPPValue] = useState(true);
  const [lpvalue, setLPValue] = useState(true);
  const [navbarData, setNavbarData] = useState({
    edit: false,
    selectedId: null,
  });

  function onChangePP(e){
    setPPValue(!ppvalue);
  }

  function onChangeLP(e){
    setLPValue(!lpvalue);
  }

  //manage user login
  var appUser = null;

  if(localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_APPUSER)){
    appUser = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_APPUSER));  
  }
  
  if(appUser){

      return (
        <Container fluid>
          <Row id="row_container">
            <Navbar page="clients" navbarData={ navbarData }/>

            <Col id="content-wrapper">
              <br />
              <Row className="filters-row">
                <Col>
                  
                  <Form>
                    <Form.Group as={Row} className="filters-form" controlId="clientsFilters">
                      <Col xs={4}>
                        
                        <InputGroup className="filters-inputgroup" size="sm">
                          <InputGroup.Prepend>
                            <InputGroup.Text>
                              Filtra
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl type="text" value={value} onChange={e => setValue(e.target.value)} />
                        </InputGroup>

                      </Col>
                      <Col>
                        <div key="inline-checkbox" className="mb-3">
                          <Form.Check inline type="checkbox" id="filter-pp" key="filter-pp" label="Persona Fisica" checked={ppvalue} onChange = {e => onChangePP(e)} />
                          <Form.Check inline type="checkbox" id="filte-lp" key="filter-lp" label="Persona Giuridica" checked={lpvalue} onChange = {e => onChangeLP(e)} />
                        </div>
                      </Col>
                    </Form.Group>
                  </Form>

                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Query query={ALL_CLIENTS_PREVIEW_QUERY}>
                    {({ data: { clients } }) => {

                      let ppClients = [];
                      let lpClients = [];

                      if(ppvalue){
                        ppClients = clients.filter(i => i.customer_customer[0].__typename  === "ComponentCustomerPhysicalPerson" ? true : false);
                        ppClients = ppClients.filter(i => i.customer_customer[0].person.name.toLowerCase().includes(value.toLowerCase()) || 
                                                          i.customer_customer[0].person.surname.toLowerCase().includes(value.toLowerCase()))
                      }

                      if(lpvalue){
                        lpClients = clients.filter(i => i.customer_customer[0].__typename  === "ComponentCustomerLegalPerson"  ? true : false);
                        lpClients = lpClients.filter(i => i.customer_customer[0].person.surname.toLowerCase().includes(value.toLowerCase()))
                      }

                      let filteredClients = ppClients.concat(lpClients);

                      //build plain array
                      filteredClients.forEach(function(e){
                        e.person = e.customer_customer[0].person;
                      });

                      return <Client data={ filteredClients } setNavbarData={ setNavbarData } />;
                    }}
                  </Query>
                </Col>
              </Row>
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