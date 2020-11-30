import React, { useState } from "react";
import { Row, Col, Container } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import Query from "../../components/Query";
import SideBar from "../../components/Bootstrap/SideBar";
import EditCustomers from "../../components/EditCustomer";
import CUSTOMER_DATA_QUERY from "../../queries/customers/customerdata";


/*  <Row>
    <Col><h3>{ customerId != null ? (customerModel.name) : "Nuovo Cliente"}</h3></Col>
  </Row>
*/

const EditCustomer = () => {  
  const { customerId } = useParams();
  var id = parseInt(customerId);
  
  const [sidebarData, setSidebarData] = useState({
    saveFunction: function(){}
  });	
  
  //manage user login
	var appUser = null;

	if(localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_APPUSER)){
  	appUser = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_APPUSER));  
	}

	if(appUser){
      console.log("--customerId", typeof(id), id);
    	return (
      	<Container fluid>
        		<Row id="row_container">
          		<SideBar page="editcustomer" sidebarData={ sidebarData }/>

          		<Col id="content-wrapper">
                <Query query={CUSTOMER_DATA_QUERY} variables={ {"customerId":id } } >
                    {({ loading, error, data: { client } }) => {
                      console.log("CLIENT");
                      console.log(client);
                      console.log("CLIENT");

                      if (loading) return null;
                      if (error) return `Error! ${error}`;

	             	      return <EditCustomers customerId={ customerId } />
                    }}
                </Query>
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

export default EditCustomer;