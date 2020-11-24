import React, { useState } from "react";
import { Row, Col, Form } from 'react-bootstrap';

const CustomerType = ({ type }) => {

	const formValid = ({ isError, ...rest }) => {
	    let isValid = false;

	    Object.values(isError).forEach(val => {
	        if (val.length > 0) {
	            isValid = false
	        } else {
	            isValid = true
	        }
	    });

	    Object.values(rest).forEach(val => {
	        if (val === null) {
	            isValid = false
	        } else {
	            isValid = true
	        }
	    });

	    return isValid;
	};

	//https://www.positronx.io/react-form-validation-tutorial-with-example/
	//https://medium.com/@adostes/validating-a-form-in-react-cc29d47e140f
	if(type === "pp"){
		return (
			<Row>
				<Col>
					<Form>
					<Row>
						<Col>
							<Row><h4>Anagrafica</h4></Row>
							<Row>
								<Col>
									<Form.Group controlId="newCustomerName">
									    <Form.Label>Nome</Form.Label>
								    	<Form.Control type="text" />
								    	<small className="text-danger">Campo obbligatorio</small>
								  	</Form.Group>
								</Col>
								<Col>
									<Form.Group controlId="newCustomerSurname">
									    <Form.Label>Cognome</Form.Label>
								    	<Form.Control type="text" />
								    	<small className="text-danger">Campo obbligatorio</small>
								  	</Form.Group>
								</Col>
								<Col>
									<Form.Group controlId="newCustomerCode">
									    <Form.Label>Codice Fiscale</Form.Label>
								    	<Form.Control type="text" />
								    	<small className="text-danger">Campo obbligatorio</small>
								  	</Form.Group>
								</Col>
							</Row>
						</Col>
					</Row>
					<Row></Row>
					<Row>
						<Col>
							<Row><h4>Contatti</h4></Row>
							<Row>
								<Col>
									<Form.Group controlId="newCustomerMobile">
									    <Form.Label>Cellulare</Form.Label>
								    	<Form.Control type="text" />
								    	<small className="text-danger">Campo obbligatorio</small>
								  	</Form.Group>
								  </Col>
								<Col>
									<Form.Group controlId="newCustomerPhone">
									    <Form.Label>Telefono</Form.Label>
								    	<Form.Control type="text" />
								  	</Form.Group>
								</Col>
								<Col>
									<Form.Group controlId="newCustomerFax">
									    <Form.Label>Fax</Form.Label>
								    	<Form.Control type="text" />
								  	</Form.Group>
								</Col>
							</Row>
							<Row>
								<Col>
									<Form.Group controlId="newCustomerMail">
									    <Form.Label>Mail</Form.Label>
								    	<Form.Control type="email" />
								    	<small className="text-danger">Campo obbligatorio</small>
								  	</Form.Group>
								</Col>
								<Col>
									<Form.Group controlId="newCustomerPec">
									    <Form.Label>Pec</Form.Label>
								    	<Form.Control type="email" />
								  	</Form.Group>
								</Col>
							</Row>
						</Col>
					</Row>
					<Row></Row>
					<Row>
						<Col>
							<Row><h4>Indirizzo</h4></Row>
							<Row>
								<Col>
									<Form.Group controlId="newCustomerStreet">
									    <Form.Label>Via</Form.Label>
								    	<Form.Control type="text" />
								    	<small className="text-danger">Campo obbligatorio</small>
								  	</Form.Group>
								</Col>
								<Col>
									<Form.Group controlId="newCustomerNumber">
									    <Form.Label>Civico</Form.Label>
								    	<Form.Control type="text" />
								  	</Form.Group>
								</Col>
								<Col>
									<Form.Group controlId="newCustomerCity">
									    <Form.Label>Città</Form.Label>
								    	<Form.Control type="text" />
								    	<small className="text-danger">Campo obbligatorio</small>
								  	</Form.Group>
								</Col>
							</Row>
							<Row>
								<Col>
									<Form.Group controlId="newCustomerProvince">
									    <Form.Label>Provincia</Form.Label>
								    	<Form.Control type="text" />
								  	</Form.Group>
								</Col>
								<Col>
									<Form.Group controlId="newCustomerZip">
									    <Form.Label>CAP</Form.Label>
								    	<Form.Control type="text" />
								    	<small className="text-danger">Campo obbligatorio</small>
								  	</Form.Group>
								</Col>
								<Col>
									<Form.Group controlId="newCustomerCountry">
									    <Form.Label>Stato</Form.Label>
								    	<Form.Control type="text" />
								    	<small className="text-danger">Campo obbligatorio</small>
								  	</Form.Group>
								</Col>
							</Row>
						</Col>
					</Row>
					</Form>
				</Col>  
			</Row>
		);
	} else if(type === "lp"){
		return (
			<Row>
				<Col>
					component new TYPE: {type} CustomerType
				</Col>  
			</Row>
		);
	} else {
		return (
			<Row>
				<Col>					
				</Col>  
			</Row>
		);	
	}		
	


	
};

export default CustomerType;