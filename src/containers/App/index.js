import React, { useState, useEffect } from "react";
import { AppContext } from "../../utils/contextLib";

import { Switch, Route } from "react-router-dom";

import AppNav from "../../components/Nav";
import Turns from "../Turn";
import Doctors from "../Doctor";
import Login from "../Login";
import NotFound from "../NotFound";


function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  useEffect(() => {
    onLoad();
  }, []);

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
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <div className="App container-fluid">
          <AppNav />
          <Switch>
              <Route path="" component={Login} />
          </Switch>
        </div>
      </AppContext.Provider>
    );

  } else {

    return( 
      !isAuthenticating && <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <div className="App container-fluid">
          <AppNav />
          <Switch>
              <Route path="/" component={Turns} exact />
              <Route path="/turns/" component={Turns} exact />
              <Route path="/turns/:id" component={Turns} exact />
              <Route path="/doctors" component={Doctors} exact />
              <Route path="/login" component={Login} exact />
              <Route path="" component={NotFound} />
          </Switch>
        </div>
      </AppContext.Provider>
    );
   }
}

export default App;