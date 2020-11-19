import React from "react";
import Query from "../../components/Query";
import ALL_CLIENTS_QUERY from "../../queries/clients/allclients";

const Clients = () => {
  
  var appUser = null;

  if(localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_APPUSER)){
    appUser = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_APPUSER));  
  }
  
  if(appUser){

      return (
        <div>
          <div className="uk-section">
            <div className="uk-container uk-container-large">              
                <Query query={ALL_CLIENTS_QUERY}>
                  {({ data: { clients } }) => {
                    return <div>OK</div>;
                  }}
                </Query>  
            </div>
          </div>
        </div>
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