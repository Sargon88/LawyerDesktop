import React, { useState, useEffect } from "react";
import { AppContext } from "../../utils/contextLib";
import { Switch, Route } from "react-router-dom";
import { Row, Col  } from 'react-bootstrap';
import moment from 'moment';
import 'moment-timezone';
import Clients from "../Clients";
import Customer from "../Customer";
import Folders from "../Folders";
import FoldersPreview from "../FoldersPreview";
import Login from "../Login";
import NotFound from "../NotFound";
import Dashboard from "../Dashboard";
import NavBar from "../../components/Nav";
import SideBar from "../../components/Sidebar";

import * as ApplicationModels from '../../models.js';


function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [navbarData, setNavbarData] = useState({}); 
  const [applicationModel] = useState(ApplicationModels.models); 
  const [today] = useState(moment());

  useEffect(() => {
    onLoad();

  }, []);

//https://serverless-stack.com/chapters/configure-aws-amplify.html
  async function onLoad() {
    try {
      if(localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_KEY)){
        userHasAuthenticated(true);
      } else {
        userHasAuthenticated(false);  
      }
      
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }

    setIsAuthenticating(false);
  }

  if(!isAuthenticated){
    return( 
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated, navbarData, setNavbarData, today, applicationModel }}>
        <div className="App container-fluid">
          <NavBar />
          <Row className="content-container">
            <SideBar />
            <Col>
              <Switch>
                  <Route path="" component={Login} />
              </Switch>
            </Col>
          </Row>
        </div>
      </AppContext.Provider>
    );

  } else {

    return( 
      !isAuthenticating && <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated, navbarData, setNavbarData, applicationModel }}>
        <div className="App container-fluid content-area">
          <NavBar />
          <SideBar />
          <Row className="content-container">            
            <Col>
              <Switch>
                  <Route path="/" component={Dashboard} exact />
                  <Route path="/clienti" exact render={(props) => <Clients {...props} /> } />
                  <Route path="/clienti/nuovo" exact render={(props) => <Customer  {...props} /> } />
                  <Route path="/referents/new/:societyId" exact render={(props) => <Customer  {...props} /> } />
                  <Route path="/customers/:customerId" exact render={(props) => <Customer {...props} /> } />
                  <Route path="/folders" exact render={(props) => <FoldersPreview {...props} /> } />
                  <Route path="/folders/new" exact render={(props) => <Folders {...props} /> } />
                  <Route path="/folders/:customerId" exact render={(props) => <Folders {...props} /> } />
                  <Route path="/login" component={Login} exact />
                  <Route path="" component={NotFound} />
              </Switch>
            </Col>
          </Row>
        </div>
      </AppContext.Provider>
    );
   }
}

export default App;