import React from "react";
import { Row, Col, Container, Table } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const Clients = ({ data }) => {

console.log("DATA")
console.log(data)
console.log("DATA")

//build plain array

//https://react-bootstrap-table.github.io/react-bootstrap-table2/
const columns = [{
	  dataField: 'id',
	  text: ''
	}, {
	  dataField: 'customer_name',
	  text: 'Nome'
	},
	{
	  dataField: 'customer_customer.physical_person != null ? \"customer_customer.physical_person.pp_surname\" : \"customer_customer.legal_person.lp_name\"',
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