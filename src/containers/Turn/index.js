import React from "react";
import { Row, Col } from 'react-bootstrap'
import TurnsCalendar from "../../components/TurnsCalendar";
import Query from "../../components/Query";
import ALL_TURNS_QUERY from "../../queries/turns/all_turns";
import DOCTOR_TURNS_QUERY from "../../queries/turns/doctor_turns";

const Home = () => {

  var appUser = null;

  if(localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_APPUSER)){
    appUser = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_APPUSER));  
  }
  
  if(appUser){

    if(appUser && appUser.role.id === 3){
      return (
        <div>
          <div className="uk-section">
            <div className="uk-container uk-container-large">              
                <Query query={DOCTOR_TURNS_QUERY} id={appUser.id}>
                  {({ data: { turns } }) => {
                    return <TurnsCalendar turns={turns} />;
                  }}
                </Query>  
            </div>
          </div>
        </div>
      );
    } else if(appUser && appUser.role.id === 4){

      return (
        <>
          <br />
          <Row>
            <Col>
              <Query query={ALL_TURNS_QUERY}>
                {({ data: { turns } }) => {
                  return <TurnsCalendar turns={turns} />;
                }}
              </Query>  
            </Col>
          </Row>
        </>
      );

    }

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

export default Home;