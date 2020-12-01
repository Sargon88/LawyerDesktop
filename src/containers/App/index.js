import React, { useState, useEffect } from "react";
import { AppContext } from "../../utils/contextLib";
import { Switch, Route } from "react-router-dom";
import Clients from "../Clients";
import Customer from "../Customer";
import Folders from "../Folders";
import Login from "../Login";
import NotFound from "../NotFound";
import Home from "../Test";


function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

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
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <div className="App container-fluid">
          
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
         
          <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/clienti" component={Clients} exact />
              <Route path="/clienti/nuovo" component={Customer} exact />
              <Route path="/customers/:customerId" component={Customer} exact />
              <Route path="/folders/:customerId" component={Folders} exact />
              <Route path="/login" component={Login} exact />
              <Route path="" component={NotFound} />
          </Switch>
        </div>
      </AppContext.Provider>
    );
   }
}

export default App;