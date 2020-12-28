import React, { useState, useEffect } from "react";
import { Row, Col, Form, InputGroup, FormControl } from 'react-bootstrap';
import { useAppContext } from "../../utils/contextLib";
import { useHistory } from "react-router-dom";
import Moment from 'react-moment';
import LDCalendar from "../../components/LDCalendar";

/*
            <Query query={DOCTOR_TURNS_QUERY} id={appUser.id}>
            
              {({ data: { turns } }) => {
                return <TurnsCalendar turns={turns} />;
              }}
            </Query>  
           */
const now = new Date();
  const eventslist = [
    {
      id: 0,
      title: 'All Day Event very long title',
      allDay: true,
      start: new Date(2020, 11, 0),
      end: new Date(2020, 11, 1),
    },
    {
      id: 1,
      title: 'Long Event',
      start: new Date(2020, 11, 7),
      end: new Date(2020, 11, 10),
    },
    {
      id: 2,
      title: 'DTS STARTS',
      start: new Date(2016, 2, 13, 0, 0, 0),
      end: new Date(2016, 2, 20, 0, 0, 0),
    },
    {
      id: 3,
      title: 'DTS ENDS',
      start: new Date(2016, 10, 6, 0, 0, 0),
      end: new Date(2016, 10, 13, 0, 0, 0),
    },
    {
      id: 4,
      title: 'Some Event',
      start: new Date(2020, 11, 9, 0, 0, 0),
      end: new Date(2020, 11, 10, 0, 0, 0),
    },
    {
      id: 5,
      title: 'Conference',
      start: new Date(2020, 11, 11),
      end: new Date(2020, 11, 13),
      desc: 'Big conference for important people',
    },
    {
      id: 6,
      title: 'Meeting',
      start: new Date(2020, 11, 12, 10, 30, 0, 0),
      end: new Date(2020, 11, 12, 12, 30, 0, 0),
      desc: 'Pre-meeting meeting, to prepare for the meeting',
    },
    {
      id: 7,
      title: 'Lunch',
      start: new Date(2020, 11, 12, 12, 0, 0, 0),
      end: new Date(2020, 11, 12, 13, 0, 0, 0),
      desc: 'Power lunch',
    },
    {
      id: 8,
      title: 'Meeting',
      start: new Date(2020, 11, 12, 14, 0, 0, 0),
      end: new Date(2020, 11, 12, 15, 0, 0, 0),
    },
    {
      id: 9,
      title: 'Happy Hour',
      start: new Date(2020, 11, 12, 17, 0, 0, 0),
      end: new Date(2020, 11, 12, 17, 30, 0, 0),
      desc: 'Most important meal of the day',
    },
    {
      id: 10,
      title: 'Dinner',
      start: new Date(2020, 11, 12, 20, 0, 0, 0),
      end: new Date(2020, 11, 12, 21, 0, 0, 0),
    },
    {
      id: 11,
      title: 'Birthday Party',
      start: new Date(2020, 11, 13, 7, 0, 0),
      end: new Date(2020, 11, 13, 10, 30, 0),
    },
    {
      id: 12,
      title: 'Late Night Event',
      start: new Date(2020, 11, 17, 19, 30, 0),
      end: new Date(2020, 11, 18, 2, 0, 0),
    },
    {
      id: 12.5,
      title: 'Late Same Night Event',
      start: new Date(2020, 11, 17, 19, 30, 0),
      end: new Date(2020, 11, 17, 23, 30, 0),
    },
    {
      id: 13,
      title: 'Multi-day Event',
      start: new Date(2020, 11, 20, 19, 30, 0),
      end: new Date(2020, 11, 22, 2, 0, 0),
    },
    {
      id: 14,
      title: 'Today',
      start: new Date(new Date().setHours(new Date().getHours() - 3)),
      end: new Date(new Date().setHours(new Date().getHours() + 3)),
    },
    {
      id: 15,
      title: 'Point in Time Event',
      start: now,
      end: now,
    },
    {
      id: 16,
      title: 'Video Record',
      start: new Date(2020, 11, 14, 15, 30, 0),
      end: new Date(2020, 11, 14, 19, 0, 0),
    },
    {
      id: 17,
      title: 'Dutch Song Producing',
      start: new Date(2020, 11, 14, 16, 30, 0),
      end: new Date(2020, 11, 14, 20, 0, 0),
    },
    {
      id: 18,
      title: 'Itaewon Halloween Meeting',
      start: new Date(2020, 11, 14, 16, 30, 0),
      end: new Date(2020, 11, 14, 17, 30, 0),
    },
    {
      id: 19,
      title: 'Online Coding Test',
      start: new Date(2020, 11, 14, 17, 30, 0),
      end: new Date(2020, 11, 14, 20, 30, 0),
    },
    {
      id: 20,
      title: 'An overlapped Event',
      start: new Date(2020, 11, 14, 17, 0, 0),
      end: new Date(2020, 11, 14, 18, 30, 0),
    },
    {
      id: 21,
      title: 'Phone Interview',
      start: new Date(2020, 11, 14, 17, 0, 0),
      end: new Date(2020, 11, 14, 18, 30, 0),
    },
    {
      id: 22,
      title: 'Cooking Class',
      start: new Date(2020, 11, 14, 17, 30, 0),
      end: new Date(2020, 11, 14, 19, 0, 0),
    },
    {
      id: 23,
      title: 'Go to the gym',
      start: new Date(2020, 11, 14, 18, 30, 0),
      end: new Date(2020, 11, 14, 20, 0, 0),
    },
    {
      id: 23,
      title: 'TEST',
      start: new Date(2020, 11, 23, 0, 30, 0),
      end: new Date(2020, 11, 23, 0, 0, 0),
      allDay: true,
    },
  ];

const Dashboard = () => {
  const { isAuthenticated } = useAppContext();
  const { setNavbarData } = useAppContext();
  const { today } = useAppContext();
  const history = useHistory();

  console.log("TODAY 2", today);

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
            Today: <Moment date={today} format="DD/MM/YYYY hh:mm:ss" />
            <br />
            <LDCalendar eventslist={eventslist} />
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