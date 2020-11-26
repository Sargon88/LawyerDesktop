import React, { useReducer, useState } from "react";
import { Row, Col, Container } from 'react-bootstrap';
import { useAlert } from 'react-alert'
import SideBar from "../../components/Bootstrap/SideBar";
import NewCustomer from "../../components/NewCustomer";

var validateRules = [
  {field: "name", isMandatory: true, regex: /^[a-zA-Z]+$/},
  {field: "surname", isMandatory: true, regex: /^[a-zA-Z]+$/},
  {field: "code", isMandatory: true, regex: /^[a-z]{6}[0-9]{2}[a-z]{1}[0-9]{2}[a-z]{1}[0-9]{3}[a-z]{1}$/},
  {field: "province", isMandatory: false, regex: /^[a-zA-Z]+$/},
  {field: "cap", isMandatory: true, regex: /^[0-9]{5}$/},
  {field: "country", isMandatory: true, regex: /^[a-zA-Z]+$/},
  {field: "mobile", isMandatory: true, regex: /^(([+]|00)39)?(([3][1-9][0-9]))(\d{7})$/},
  {field: "phone", isMandatory: false, regex: /^(([+]|00)39)?(([0][1-9][0-9]))(\d{7})$/},
  {field: "fax", isMandatory: false, regex: /^(([+]|00)39)?(([0][1-9][0-9]))(\d{7})$/},
  {field: "mail", isMandatory: true, regex: /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/},
  {field: "pec", isMandatory: true, regex: /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/},
  {field: "street", isMandatory: true, regex: ""},
  {field: "number", isMandatory: false, regex: /^[0-9]+$/},
  {field: "city", isMandatory: true, regex: /^[a-zA-Z]+$/}
];

const NewClient = () => {  
  const alert = useAlert()
  var customerModel = useState({});
  var errorModel = useState({});

  function save(){    
    console.log("SAVE");
    console.log(customerModel);
    console.log("SAVE");

    var isValid = true;

    for(var rule of validateRules){
      if(errorModel.[rule.field]){
        isValid = false;
        console.log(rule.field, "INVALID");
        break;

      }

      if(rule.isMandatory && customerModel.[rule.field] && customerModel.[rule.field].length == 0){
        console.log(rule.field, "MANDATORY");
        isValid = false;
        break;
      }

      if(rule.isMandatory && customerModel.[rule.field].length > 0 && rule.regex && !rule.regex.test(customerModel.[rule.field])){
        console.log(rule.field, "REGEX");
        isValid = false;
        break;
      }
    }

    if(isValid){
      console.log("VALID");
      alert.success("VALID");
      /*
      var customer = {
        customer_name: customerModel.name,
      }

      if(customerModel.type === "pp"){
        customer_customer:{

        }
      } else if(customerModel.type === "lp"){
        
      }

      axios.post(`${process.env.REACT_APP_BACKEND_URL}/clients`, customer)
          .then(response => console.log(response));
    */            
    } else {
      console.log("NOT VALID");
      alert.error("NOT VALID");
    }
    
  };

  const [sidebarData, setSidebarData] = useState({
    saveFunction: save
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
             			<NewCustomer setSidebarData={setSidebarData} 
                               customerModel={customerModel}
                               errorModel={errorModel}
                               validateRules={validateRules} />
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