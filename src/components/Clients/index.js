import React from "react";
import { Row, Col } from 'react-bootstrap';
import { useAppContext } from "../../utils/contextLib";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

const Clients = ({ data }) => {
	const { setNavbarData } = useAppContext();

	//https://react-bootstrap-table.github.io/react-bootstrap-table2/
	const selectRow = {
		mode: 'radio', // single row selection
		bgColor: '#007bff33',
		clickToSelect: true,
		onSelect: (row, isSelect, rowIndex, e) => {
			setNavbarData({
				edit: true,
			    selectedId: row.id,
			    page:"clients",
			})
		} 
	};

	const columns = [
		{
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
				<BootstrapTable 
					keyField='id' 
					data={ data } 
					columns={ columns }
					selectRow={ selectRow }
					bootstrap4= {true}
					hover={true}
					condensed={true}
					pagination={ paginationFactory() }
					filterPosition='top' />	 
	      	</Col>  
	    </Row>
	);
};

export default Clients;