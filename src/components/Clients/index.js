import React from "react";
import { Row, Col, Container, Table } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const Clients = ({ data }) => {



//build plain array
data.forEach(function(e){
	//costruire un oggetto apposta sulla base del contenuto dell'array
	if(e.customer_type == "Fisico"){
		e.customer_customer = e.customer_customer[0].physical_person;

	} else if(e.customer_type == "Giuridico"){
		e.customer_customer = e.customer_customer[0].legal_person;
	}

});

console.log("DATA")
console.log(data)
console.log("DATA")

//https://react-bootstrap-table.github.io/react-bootstrap-table2/
const columns = [{
	  dataField: 'id',
	  text: ''
	}, {
	  dataField: 'customer_name',
	  text: 'Nome'
	},
	{
	  dataField: 'customer_customer.lp_name || customer_customer.pp_surname',
	  text: 'Cognome Customer'
	}];


	return (
	    <Row>
	    	<Col>
				<BootstrapTable keyField='id' data={ data } columns={ columns } />	          
	      	</Col>  
	    </Row>
	);
};

export default Clients;