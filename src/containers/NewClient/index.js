import React, { useState } from "react";
import { Row, Col, Container, Form } from 'react-bootstrap';
import SideBar from "../../components/Bootstrap/SideBar";
import NewCustomer from "../../components/NewCustomer";

const NewClient = () => {  
  const customerModel = {}

  function save(){
    console.log(customerModel);

    var customer = {
      customer_name: customerModel.name,
    }

    if(customerModel.type === "pp"){
      customer_customer:{

      },
    } else if(customerModel.type === "lp"){
      
    }

    axios.post(`${process.env.REACT_APP_BACKEND_URL}/clients`, customer)
        .then(response => console.log(response));

  };

  const [sidebarData, setSidebarData] = useState({
      saveFunction: save,
    });	
  
  	//manage user login
	var appUser = null;

	if(localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_APPUSER)){
  	appUser = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_APPUSER));  
	}

	if(appUser){

    	return (
      	<Container fluid>
        		<Row id="row_container">
          		<SideBar page="newcustomer" sidebarData={ sidebarData }/>

          		<Col id="content-wrapper">
	             		<br />
             			<NewCustomer customerModel={customerModel} />
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

export default NewClient;