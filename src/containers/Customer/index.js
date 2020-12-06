import React, { useState, useEffect } from "react";
import { Row, Col, Container } from 'react-bootstrap';
import { useAlert } from 'react-alert';
import { useParams } from "react-router-dom";
import { useAppContext } from "../../utils/contextLib";
import Query from "../../components/Query";
import axios from 'axios';
import NavBar from "../../components/Nav";
import CustomerComponent from "../../components/Customer";
import CUSTOMER_DATA_QUERY from "../../queries/customers/customerdata";

var validateRules = [
  {type:"pp", field: "name", isMandatory: true, regex: /^[\w ]+$/},
  {type:"pp", field: "surname", isMandatory: true, regex: /^[\w ]+$/},
  {type:"pp", field: "code", isMandatory: true, regex: /^[a-z]{6}[0-9]{2}[a-z]{1}[0-9]{2}[a-z]{1}[0-9]{3}[a-z]{1}$/},
  {type:"lp", field: "society", isMandatory: true, regex: /^[\w-. ]+$/},
  {type:"lp", field: "vat", isMandatory: true, regex: /^[0-9]{11}$/},
  {type:"", field: "province", isMandatory: false, regex: /^[\w]+$/},
  {type:"", field: "cap", isMandatory: true, regex: /^[0-9]{5}$/},
  {type:"", field: "country", isMandatory: true, regex: /^[\w]+$/},
  {type:"", field: "mobile", isMandatory: true, regex: /^(([+]|00)39)?(([3][1-9][0-9]))(\d{7})$/},
  {type:"", field: "phone", isMandatory: false, regex: /^(([+]|00)39)?(([0][1-9][0-9]))(\d{7})$/},
  {type:"", field: "fax", isMandatory: false, regex: /^(([+]|00)39)?(([0][1-9][0-9]))(\d{7})$/},
  {type:"", field: "mail", isMandatory: true, regex: /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/},
  {type:"", field: "pec", isMandatory: true, regex: /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/},
  {type:"", field: "street", isMandatory: true, regex: ""},
  {type:"", field: "number", isMandatory: false, regex: /^[0-9]+$/},
  {type:"", field: "city", isMandatory: true, regex: /^[\w ]+$/}
];

const Customer = () => {  
  const { setNavbarData } = useAppContext();
  const alert = useAlert()
  const [customerModel] = useState({});
  var errorModel = useState({});
  var c = useParams();
  const [customerId] = useState(c.customerId != null ? c.customerId : null);

  function save(){ 
    var isValid = true;
    var typerules = validateRules.filter(x => x.type === customerModel.type || x.type === "");

    for(var rule of typerules){
      if(errorModel.[rule.field]){
        isValid = false;
        break;
      }

      if(rule.isMandatory && (!customerModel[rule.field] || customerModel[rule.field].length === 0)){
        isValid = false;
        break;
      }

      if(rule.isMandatory && customerModel[rule.field] && customerModel[rule.field].length > 0 && rule.regex && !rule.regex.test(customerModel[rule.field])){
        isValid = false;
        break;
      }
    }

    if(isValid){



      var person = {
        id: customerModel.id,
        person_type: customerModel.type === "pp" ? "Fisico" : "Giuridico",
        person_surname: customerModel.surname,
        person_name: customerModel.name,
        person_code: customerModel.code,
        person_active: true,
        person_contact: {
            cnn_phone: {
              phone_number: customerModel.phone
            },
            cnn_mobile: {
              phone_number: customerModel.mobile
            },
            cnn_fax: {
              phone_number: customerModel.fax
            },
            cnn_mail: customerModel.mail,
            cnn_pec: customerModel.pec
          },
          person_address: {
            address_street:customerModel.street,
            address_city:customerModel.city,
            address_province:customerModel.province,
            address_country:customerModel.country,
            address_number:customerModel.number,
            address_zipcode:customerModel.cap,
          },
      }

      if(customerModel.id){
        //update an entry
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/people/` + customerModel.id, person, {
          headers: {
            Authorization:
              'Bearer ' + localStorage.getItem("JWTtoken")
          }})
            .then(response => {

              if(response.status === 200){
                alert.success("Salvato");                          

              } else {
                alert.error("Errore:" + response.error);
                console.log(response);
              }
              
              
            },
            response => {
                alert.error("Errore: " + response.error + " - " + response.message);
                console.log(response)
            });

      } else {
        //create new entry
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/people`, person, {
          headers: {
            Authorization:
              'Bearer ' + localStorage.getItem("JWTtoken")
          }})
            .then(response => {

              if(response.status === 200){
                alert.success("Salvato");                          

              } else {
                alert.error("Errore:" + response.error);
                console.log(response);
              }
              
              
            },
            response => {
                alert.error("Errore: " + response.error + " - " + response.message);
                console.log(response)
            });
      }

    } else {
      alert.error("Verificare i campi prima di procedere");
    }
  };

  useEffect(() => {
    setNavbarData({
      page:"newcustomer",
      saveFunction: save,
      selectedId: customerId
    });
  }, []);
  
  //manage user login
	var appUser = null;

	if(localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_APPUSER)){
  	appUser = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_APPUSER));  
	}

	if(appUser){

    if(customerId){
      //edit customer
      return (
        <>
            <Row id="row_container">
              <Col id="content-wrapper">
                  <br />
                  <Query query={CUSTOMER_DATA_QUERY} variables={{ customerId: customerId }} >
                      {({ loading, error, data: { person } }) => {

                        customerModel.name = person.name ? person.name : "";
                        customerModel.surname = person.surname ? person.surname : "";
                        customerModel.code = person.code ? person.code : "";
                        customerModel.society = person.surname ? person.surname : "";
                        customerModel.vat = person.code ? person.code : "";
                        customerModel.province = person.address ? person.address.province : "";
                        customerModel.cap = person.address ? person.address.zipcode : "";
                        customerModel.country = person.address ? person.address.country : "";
                        customerModel.mobile = person.contact ? person.contact.cnn_mobile.phone_number : "";
                        customerModel.mobile_id = person.contact ? person.contact.cnn_mobile.id : "";
                        customerModel.phone = person.contact ? person.contact.cnn_phone.phone_number : "";
                        customerModel.phone_id = person.contact ? person.contact.cnn_phone.id : "";
                        customerModel.fax = person.contact ? person.contact.cnn_fax.phone_number : "";
                        customerModel.fax_id = person.contact ? person.contact.cnn_fax.id : "";
                        customerModel.mail = person.contact ? person.contact.cnn_mail : "";
                        customerModel.pec = person.contact ? person.contact.cnn_pec : "";
                        customerModel.street = person.address ? person.address.street : "";
                        customerModel.number = person.address ? person.address.number : "";
                        customerModel.city = person.address ? person.address.city : "";
                        customerModel.address_id = person.address ? person.address.id : "";
                        customerModel.contact_id = person.contact ? person.contact.id : "";
                        customerModel.id = customerId;
                        customerModel.person_id = person ? person.id : "";
                        customerModel.type = person.type === "Fisico" ? "pp" : "lp";
                        customerModel.referents = [];

                        if(person.referents.length > 0){
                          for(var i = 0; i < person.referents.length; i++){
                            var c = person.referents[i].person;
                            customerModel.referents.push({
                              name: c.name,
                              surname: c.surname,
                              code: c.code,
                              mobile: c.contact && c.contact.cnn_mobile ? c.contact.cnn_mobile.phone_number : "",
                              phone: c.contact && c.contact.cnn_phone ? c.contact.cnn_phone.phone_number : "",
                              fax: c.contact && c.contact.cnn_fax ? c.contact.cnn_fax.phone_number : "",
                              mail: c.contact && c.contact.cnn_mail ? c.contact.cnn_mail : "",
                              pec: c.contact && c.contact.cnn_pec ? c.contact.cnn_pec : "",
                              id: c.id,
                            });
                          }
                          
                        }

                        if (loading) return null;
                        if (error) return `Error! ${error}`;

                        return <CustomerComponent customerModel={customerModel}
                                                  errorModel={errorModel}
                                                  validateRules={validateRules}
                                                  customerId={customerId} />
                      }}
                  </Query>
              </Col>
            </Row>
        </>
      );
      
    } else {
      //new customer
      return (
        <>
            <Row id="row_container">
              <Col id="content-wrapper">
                  <br />
                  <CustomerComponent setNavbarData={setNavbarData} 
                                     customerModel={customerModel}
                                     errorModel={errorModel}
                                     validateRules={validateRules}
                                     customerId={customerId} />
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

export default Customer;