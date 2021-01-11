import React, { useState, useEffect } from "react";
import { Row, Col } from 'react-bootstrap';
import { useAlert } from 'react-alert';
import { useParams, useHistory } from "react-router-dom";
import { useAppContext } from "../../utils/contextLib";
import { useQuery } from "react-apollo";
import Query from "../../components/Query";
import axios from 'axios';
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

var customer = {
  person_name: null,
  person_surname: null,
  person_code: null,
  person_type: null,
  person_address: {
    address_city: null,
    address_country: null,
    address_number: null,
    address_province: null,
    address_street: null,
    address_zipcode: null,
  },
  person_contact:{
    cnn_fax:{
      phone_number: null	
    },
    cnn_mobile:{
      phone_number: null	
    },
    cnn_phone: {
      phone_number: null	
    },
    cnn_mail: null,
    cnn_pec: null
  },
  person_referents: [],
}

const Customer = () => {  
  const { setNavbarData } = useAppContext();
  const { isAuthenticated } = useAppContext();
  const alert = useAlert()
  const [customerModel] = useState(customer);
  var errorModel = useState({});
  var c = useParams();
  const [customerId] = useState(c.customerId != null ? c.customerId : null);
  const [societyId] = useState(c.societyId != null ? c.societyId : null);
  const [referentType, setReferentType] = useState(null);
  const history = useHistory();

  function save(){ 
    var isValid = true;
    var typerules = validateRules.filter(x => x.type === customerModel.type || x.type === "");
    /*
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
    */

    if(isValid){


      /*
      var person = {
        id: customerModel.id,
        person_type: customerModel.type.toLowerCase() === "pp" ? "fisico" : "giuridico",
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
      */

      var person = customerModel;

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
              }
              
              
            },
            response => {
                alert.error("Errore: " + response.error + " - " + response.message);
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

                if(isNewReferent && response.data){
                  //get society referente
                  var referentId = response.data.id;
                  axios.get(`${process.env.REACT_APP_BACKEND_URL}/people/` + societyId, {
                    headers: {
                      Authorization:
                        'Bearer ' + localStorage.getItem("JWTtoken")
                    }})
                      .then(response => {

                        if(response.status === 200 && response.data){
                          
                          var ref = response.data.person_referents;
                          debugger;
                          ref.push({
                              referent_role: referentType,
                              person: {
                                id: referentId
                              }
                            });

                          //update society  
                          var society = {
                            id: societyId,
                            person_referents: ref,
                          }

                          axios.put(`${process.env.REACT_APP_BACKEND_URL}/people/` + societyId, society, {
                            headers: {
                              Authorization:
                                'Bearer ' + localStorage.getItem("JWTtoken")
                            }})
                              .then(response => {

                                if(response.status === 200){
                                  alert.success("Salvato");
                                  
                                  setTimeout(history.goBack(), 5000);

                                } else {
                                  alert.error("Errore:" + response.error);
                                }

                              });
                        }

                      });

                } else{
                  alert.success("Salvato");

                }

              } else {
                alert.error("Errore:" + response.error);
              }
              
              
            },
            response => {
                alert.error("Errore: " + response.error + " - " + response.message);
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

  const isNewReferent = societyId !== null;

  if(isNewReferent){
    customerModel.type = "pp";
  }
  
	if(isAuthenticated){

    if(customerId){
      //edit customer
      return (
        <>
            <Row id="row_container">
              <Col id="content-wrapper">
                  <br />
                  <Query query={CUSTOMER_DATA_QUERY} variables={{ customerId: customerId }} >
                      {({ loading, error, data: { person } }) => {

                        for(var k in person){
                          customerModel[k] = person[k];
                        }
                        
                        if (loading) return null;
                        if (error) return `Error! ${error}`;

                        return <CustomerComponent customerModel={customerModel}
                                                  errorModel={errorModel}
                                                  validateRules={validateRules}
                                                  customerId={customerId}
                                                  isNewReferent={isNewReferent}
                                                  referentType={referentType}
                                                  setReferentType={setReferentType} />
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
                                     customerId={customerId}
                                     isNewReferent={isNewReferent}
                                     referentType={referentType}
                                     setReferentType={setReferentType} />
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