import React, { useState } from "react";
import { Row, Col, Form } from 'react-bootstrap';
import './customerType.css';

const CustomerType = ({ type, customerModel }) => {

	function handleInputChange(event){
		const target = event.target;
    	const name = target.name;
    	const value = target.value;

    	customerModel[name] = value;
    	customerModel[type] = type;
	}

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
							<Row className="dataArea">
								<Col>
									<Form.Group controlId="newCustomerName">
									    <Form.Label>Nome</Form.Label>
								    	<Form.Control type="text" value={customerModel.name} name="name" onChange={handleInputChange} />
								    	<small className="text-danger">Campo obbligatorio</small>
								  	</Form.Group>
								</Col>
								<Col>
									<Form.Group controlId="newCustomerSurname">
									    <Form.Label>Cognome</Form.Label>
								    	<Form.Control type="text" value={customerModel.surname} name="surname" onChange={handleInputChange} />
								    	<small className="text-danger">Campo obbligatorio</small>
								  	</Form.Group>
								</Col>
								<Col>
									<Form.Group controlId="newCustomerCode">
									    <Form.Label>Codice Fiscale</Form.Label>
								    	<Form.Control type="text" value={customerModel.code} name="code" onChange={handleInputChange} />
								    	<small className="text-danger">Campo obbligatorio</small>
								  	</Form.Group>
								</Col>
							</Row>
						</Col>
					</Row>
					<br />
					<Row>
						<Col>
							<Row><h4>Contatti</h4></Row>
							<Row className="dataArea">
								<Col>
									<Row>
										<Col>
											<Form.Group controlId="newCustomerMobile">
											    <Form.Label>Cellulare</Form.Label>
										    	<Form.Control type="text" value={customerModel.mobile} name="mobile" onChange={handleInputChange} />
										    	<small className="text-danger">Campo obbligatorio</small>
										  	</Form.Group>
										</Col>
										<Col>
											<Form.Group controlId="newCustomerPhone">
											    <Form.Label>Telefono</Form.Label>
										    	<Form.Control type="text" value={customerModel.phone} name="phone" onChange={handleInputChange} />
										  	</Form.Group>
										</Col>
										<Col>
											<Form.Group controlId="newCustomerFax">
											    <Form.Label>Fax</Form.Label>
										    	<Form.Control type="text" value={customerModel.fax} name="fax" onChange={handleInputChange} />
										  	</Form.Group>
										</Col>
									</Row>
									<Row>
										<Col>
											<Form.Group controlId="newCustomerMail">
											    <Form.Label>Mail</Form.Label>
										    	<Form.Control type="email" value={customerModel.mail} name="mail" onChange={handleInputChange} />
										    	<small className="text-danger">Campo obbligatorio</small>
										  	</Form.Group>
										</Col>
										<Col>
											<Form.Group controlId="newCustomerPec">
											    <Form.Label>Pec</Form.Label>
										    	<Form.Control type="email" value={customerModel.pec} name="pec" onChange={handleInputChange} />
										  	</Form.Group>
										</Col>
									</Row>
								</Col>
							</Row>	
						</Col>
					</Row>
					<br />
					<Row>
						<Col>
							<Row><h4>Indirizzo</h4></Row>
							<Row className="dataArea">
								<Col>
									<Row>
										<Col>
											<Form.Group controlId="newCustomerStreet">
											    <Form.Label>Via</Form.Label>
										    	<Form.Control type="text" value={customerModel.street} name="street" onChange={handleInputChange} />
										    	<small className="text-danger">Campo obbligatorio</small>
										  	</Form.Group>
										</Col>
										<Col>
											<Form.Group controlId="newCustomerNumber">
											    <Form.Label>Civico</Form.Label>
										    	<Form.Control type="text" value={customerModel.number} name="number" onChange={handleInputChange} />
										  	</Form.Group>
										</Col>
										<Col>
											<Form.Group controlId="newCustomerCity">
											    <Form.Label>Città</Form.Label>
										    	<Form.Control type="text" value={customerModel.city} name="city" onChange={handleInputChange} />
										    	<small className="text-danger">Campo obbligatorio</small>
										  	</Form.Group>
										</Col>
									</Row>
									<Row>
										<Col>
											<Form.Group controlId="newCustomerProvince">
											    <Form.Label>Provincia</Form.Label>
										    	<Form.Control type="text" value={customerModel.province} name="province" onChange={handleInputChange} />
										  	</Form.Group>
										</Col>
										<Col>
											<Form.Group controlId="newCustomerZip">
											    <Form.Label>CAP</Form.Label>
										    	<Form.Control type="text" value={customerModel.cap} name="cap" onChange={handleInputChange} />
										    	<small className="text-danger">Campo obbligatorio</small>
										  	</Form.Group>
										</Col>
										<Col>
											<Form.Group controlId="newCustomerCountry">
											    <Form.Label>Stato</Form.Label>
										    	<Form.Control type="text" value={customerModel.country} name="country" onChange={handleInputChange} />
										    	<small className="text-danger">Campo obbligatorio</small>
										  	</Form.Group>
										</Col>
									</Row>
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