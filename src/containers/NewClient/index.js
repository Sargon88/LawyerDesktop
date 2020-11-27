import React, { useReducer, useState } from "react";
import { Row, Col, Container } from 'react-bootstrap';
import { useAlert } from 'react-alert';
import axios from 'axios';
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

var c = {};

const NewClient = () => {  
  const alert = useAlert()
  const [customerModel] = useState(c);
  var errorModel = useState({});
  const [customerId, setCustomerId] = useState(null)

  function save(){    
    var isValid = true;
    c = customerModel;

    for(var rule of validateRules){
      if(errorModel.[rule.field]){
        isValid = false;
        break;

      }

      if(rule.isMandatory && (!customerModel.[rule.field] || customerModel.[rule.field].length === 0)){
        isValid = false;
        break;
      }

      if(rule.isMandatory && customerModel.[rule.field] && customerModel.[rule.field].length > 0 && rule.regex && !rule.regex.test(customerModel.[rule.field])){
        isValid = false;
        break;
      }
    }

    if(isValid){

      var customer_customer = {};
      var customer = {
        customer_name: customerModel.name,
        customer_active: true
      }

      if(customerModel.type === "pp"){
        customer.customer_type = "Fisico";

        customer_customer = {
            "pp_name":customerModel.name,
            "pp_surname":customerModel.surname,
            "pp_fiscalcode": customerModel.code,
            "pp_contact_method": {
              "cnn_mobile":{
                "phone_number": customerModel.mobile
              },
              "cnn_phone":{
                "phone_number": customerModel.phone
              },
              "cnn_fax":{
                "phone_number": customerModel.fax
              },
              "cnn_mail": customerModel.mail,
              "cnn_pec": customerModel.pec
            },
            "pp_address": {
              "address_street":customerModel.street,
              "address_city":customerModel.city,
              "address_province":customerModel.province,
              "address_country":customerModel.country,
              "address_number":customerModel.number,
              "address_zipcode":customerModel.cap,
            }
          };

          axios.post(`${process.env.REACT_APP_BACKEND_URL}/phisical-people`, customer_customer, {
            headers: {
              Authorization:
                'Bearer ' + localStorage.getItem("JWTtoken")
            }})
              .then(response => {

                if(response.status === 200){
                  console.log("creata persona: ", response.data.id);

                  customer.customer_customer = [{
                    physical_person: {
                      id: response.data.id  
                    },
                    "__component": "customer.physical-person",
                  }];              

                  axios.post(`${process.env.REACT_APP_BACKEND_URL}/clients`, customer, {
                    headers: {
                      Authorization:
                        'Bearer ' + localStorage.getItem("JWTtoken")
                    }})
                    .then(response => {
                      if(response.status === 200){
                        alert.success("Salvato");  

                        setCustomerId(response.data.id);
                      }
                    }); 


                } else {
                  alert.error("Errore:" + response.error);
                  console.log(response);
                }
                
                
              },
              response => {
                  alert.error("Errore: " + response.error + " - " + response.message);
                  console.log(response)
              });
      } else if(customerModel.type === "lp"){
      }
    
    } else {
      console.log("NOT VALID");
      alert.error("Verificare i campi prima di procedere");
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
                               validateRules={validateRules}
                               customerId={customerId} />
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