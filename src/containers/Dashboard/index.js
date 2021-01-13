import React, { useState, useEffect } from "react";
import { Row, Col, Form, InputGroup, FormControl } from 'react-bootstrap';
import { useAppContext } from "../../utils/contextLib";
import { useHistory } from "react-router-dom";
import Query from "../../components/Query";
import Moment from 'react-moment';
import LDCalendar from "../../components/LDCalendar";

import GET_EVENTS_QUERY from "../../queries/events/events";

const now = new Date();

const Dashboard = () => {
  const { isAuthenticated } = useAppContext();
  const { setNavbarData } = useAppContext();
  const { today } = useAppContext();
  const history = useHistory();

  useEffect(() => {
    setNavbarData({
      edit: false,
      selectedId: "",
      page:"dashboard",
    });
  }, []);
  
  if(isAuthenticated){
    return (
      <>
        <Row>
          <Col>
            <Query query={GET_EVENTS_QUERY}>
              {({ data: { events } }) => {
                return <LDCalendar eventslist={events} 
                                   height={'90vh'}/>;
              }}
            </Query>  
          </Col>
        </Row>
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