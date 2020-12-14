import React from "react";
import { Row, Col } from 'react-bootstrap';
import { useAppContext } from "../../utils/contextLib";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Moment from 'react-moment';
import 'moment-timezone';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

const FoldersPreviewComponent = ({ data }) => {
  const { setNavbarData } = useAppContext();
  const { navbarData } = useAppContext();
  console.log("DATA", data);

  //https://react-bootstrap-table.github.io/react-bootstrap-table2/
  const selectRow = {
    mode: 'radio', // single row selection
    bgColor: '#007bff33',
    clickToSelect: true,
    clickToExpand: true,
    onSelect: (row, isSelect, rowIndex, e) => {
    	var nav = navbarData;
    	nav.selectedId = row.id;
    	nav.edit = true;
      	
      	setNavbarData(nav);


    } 
  };

	const expandRow = {
		renderer: (row, rowIndex) => (
			<div>
				<p>{ `This Expand row is belong to rowKey ${row.id}` }</p>
				<p>You can render anything here, also you can add additional data on every row object</p>
				<p>expandRow.renderer callback will pass the origin row object to you</p>
			</div>
		)
	};


  const columns = [
    {
      dataField: 'id',
      text: ''
    },
    {
      dataField: 'name',
      text: 'Nome Pratica',
      sort: true
    },
    {
      dataField: 'deadline',
      text: 'Scadenza',
      type: 'date',
      formatter: function(deadline){

      	return( 
      		<Moment format={process.env.REACT_APP_DATE_FORMAT} date={deadline} />
      	);

      },
      sort: true
    },
    {
      dataField: 'type',
      text: 'Tipologia'
    },
    {
      dataField: 'dossier',
      formatter: function(dossier){
      	return (
      		<a href={"/customers/" + dossier.dossier_customer.id}>{dossier.dossier_customer.person_surname}  {dossier.dossier_customer.person_name}</a>
      	);
      },
      text: 'Cliente'
    }
  ];

  return (
      <Row>
        <Col>
        <BootstrapTable 
          keyField='id' 
          data={ data.issues } 
          columns={ columns }
          selectRow={ selectRow }
          bootstrap4= {true}
          hover={true}
          condensed={true}
          pagination={ paginationFactory() }
          filterPosition='top'
          expandRow={ expandRow } />  
          </Col>  
      </Row>
  );
};

export default FoldersPreviewComponent;