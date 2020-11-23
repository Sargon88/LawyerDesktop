import React from "react";
import { Row, Col, Container, Table } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

const Clients = ({ data, setSidebarData }) => {

//https://react-bootstrap-table.github.io/react-bootstrap-table2/
const selectRow = {
  mode: 'radio', // single row selection
  bgColo: '#007bff33',
  clickToSelect: true,
};

const rowEvents = {
  onClick: (e, row, rowIndex) => {
  	setSidebarData({
  		edit: true,
    	selectedId: row.id
  	});
    
  }
};

const columns = [{
	  dataField: 'id',
	  text: ''
	},
	{
	  dataField: 'person.surname',
	  text: 'Cognome/Ragione Sociale',
	  sort: true
	},
	{
	  dataField: 'person.name',
	  text: 'Nome',
	  sort: true
	},
	{
	  dataField: 'person.code',
	  text: 'Codie Fiscale/Partita iva'
	},
	{
	  dataField: 'person.contact.cnn_phone.phone_number',
	  text: 'Telefono'
	},
	{
	  dataField: 'person.contact.cnn_mail',
	  text: 'Mail'
	},
	{
	  dataField: 'person.contact.cnn_pec',
	  text: 'Pec'
	},
	];

	return (
	    <Row>
	    	<Col>
				<BootstrapTable keyField='id' 
								data={ data } 
								columns={ columns }
								selectRow={ selectRow }
								bootstrap4='true'
								hover='true'
								condensed='true'
								pagination={ paginationFactory() }
								filter={ filterFactory() }
								filterPosition='top'
								rowEvents={ rowEvents } />	 
	      	</Col>  
	    </Row>
	);
};

export default Clients;