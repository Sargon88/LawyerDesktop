import React from "react";
import { Row, Col, Container, Table } from 'react-bootstrap';

const Clients = ({ data }) => {

	console.log("DATA")
	console.log(data)
	console.log("DATA")
	return (
	    <Row>
	    	<Col>

				<Table striped bordered hover size="sm">
					<thead>
						<tr>
							<th></th>
							<th>Cognome/Ragione Sociale</th>
							<th>Nome</th>
							<th>Codice Fiscale</th>
							<th>Cellulare</th>
							<th>Telefono</th>
							<th>Email</th>
							<th>Pec</th>
						</tr>
					</thead>
					<tbody>
						{data.map((client, i) => {
						
							if(client.client_legal_person){
								var c = client.client_legal_person;
								return(
									<tr>
										<td>{client.id}</td>
										<td>{c.lp_name}</td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
									</tr>
								)
							}

							if(client.client_physical_person){
								var c = client.client_physical_person;
								return(
									<tr>
										<td>{client.id}</td>
										<td>{c.pp_surname}</td>
										<td>{c.pp_name}</td>
										<td>{c.pp_fiscalcode}</td>
										<td>{c.pp_mobilephone.phone_number}</td>
										<td>{c.pp_phone.phone_number}</td>
										<td>{c.pp_email}</td>
										<td>{c.pp_pec}</td>
									</tr>
								)
							}
						})}
					</tbody>
				</Table>

	          
	      	</Col>  
	    </Row>
	);
};

export default Clients;