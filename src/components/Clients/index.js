import React from "react";
import { Row, Col, Container } from 'react-bootstrap';

const Clients = ({ data }) => {

  return (
    <Row>
      <Col>
          {data.clients.map((client, i) => {
            return <Row><Col>{client.id} - {client.client_name}</Col></Row>;
          })}
      </Col>  
    </Row>
  );
};

export default Clients;