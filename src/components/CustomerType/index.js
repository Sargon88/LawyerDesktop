import React, { useState } from "react";
import { Row, Col, Form } from 'react-bootstrap';
import './customerType.css';

const CustomerType = ({ type, customerModel, errorModel, validateRules }) => {
	const [error, setError] = useState({});

	function handleChange(event){
		const target = event.target;
    	const name = target.name;
    	const value = target.value;

    	var e = error;
    	var rule = validateRules.find(x => x.field === name);

		if(rule.isMandatory && value.length === 0){
			console.log(rule.field, "MANDATORY");
			errorModel.[name] = "Campo obbligatorio";
			
		} else if(rule.isMandatory && value.length > 0 && rule.regex && !rule.regex.test(value)){
			console.log(rule.field, "REGEX");
			errorModel.[name] = "Valore non valido";

		} else {
			errorModel.[name] = "";

		} 	
    	  
    	customerModel[name]=value;  
    	customerModel.type = type;
    	e.[name] = errorModel.[name];  	

    	setError({
    		...error,
    		e});
	}


	//https://www.positronx.io/react-form-validation-tutorial-with-example/
	//https://medium.com/@adostes/validating-a-form-in-react-cc29d47e140f
	if(type){
		return (
			<Row>
				<Col>
					<Form>
					<Row>
						<Col>
							<Row><h4>Anagrafica</h4></Row>
							{ type === "pp" ?
							(<Row className="dataArea">
								<Col>
									<Form.Group controlId="newCustomerName">
									    <Form.Label>Nome</Form.Label>
								    	<Form.Control type="text"  
								    				  name="name" 
								    				  onChange={handleChange}
								    				  value={customerModel.name} />
								    	<small className="text-danger">{error.name}</small>
								  	</Form.Group>
								</Col>
								<Col>
									<Form.Group controlId="newCustomerSurname">
									    <Form.Label>Cognome</Form.Label>
								    	<Form.Control type="text" 
								    				  name="surname" 
								    				  onChange={handleChange}
								    				  value={customerModel.surname} />
								    	<small className="text-danger">{error.surname}</small>
								  	</Form.Group>
								</Col>
								<Col>
									<Form.Group controlId="newCustomerCode">
									    <Form.Label>Codice Fiscale</Form.Label>
								    	<Form.Control type="text" 
								    				  name="code" 
								    				  onChange={handleChange}
								    				  value={customerModel.code} />
								    	<small className="text-danger">{error.code}</small>
								  	</Form.Group>
								</Col>
							</Row>)
							:
							type === "lp" ?
							(<Row className="dataArea">
								<Col>
									<Form.Group controlId="newCustomerSurname">
									    <Form.Label>Ragione Sociale</Form.Label>
								    	<Form.Control type="text" 
								    				  name="society" 
								    				  onChange={handleChange}
								    				  value={customerModel.society} />
								    	<small className="text-danger">{error.society}</small>
								  	</Form.Group>
								</Col>
								<Col>
									<Form.Group controlId="newCustomerCode">
									    <Form.Label>Partita Iva</Form.Label>
								    	<Form.Control type="text" 
								    				  name="vat" 
								    				  onChange={handleChange}
								    				  value={customerModel.vat} />
								    	<small className="text-danger">{error.vat}</small>
								  	</Form.Group>
								</Col>
							</Row>)
							:
							<Row className="dataArea"><Col></Col></Row>
							}
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
										    	<Form.Control type="text"
										    				  name="mobile" 
										    				  onChange={handleChange}
										    				  value={customerModel.mobile} />
										    	<small className="text-danger">{error.mobile}</small>
										  	</Form.Group>
										</Col>
										<Col>
											<Form.Group controlId="newCustomerPhone">
											    <Form.Label>Telefono</Form.Label>
										    	<Form.Control type="text"
										    				  name="phone" 
										    				  onChange={handleChange}
										    				  value={customerModel.phone} />
										    	<small className="text-danger">{error.phone}</small>
										  	</Form.Group>
										</Col>
										<Col>
											<Form.Group controlId="newCustomerFax">
											    <Form.Label>Fax</Form.Label>
										    	<Form.Control type="text"
										    				  name="fax"
										    				  onChange={handleChange}
										    				  value={customerModel.fax} />
										    	<small className="text-danger">{error.fax}</small>
										  	</Form.Group>
										</Col>
									</Row>
									<Row>
										<Col>
											<Form.Group controlId="newCustomerMail">
											    <Form.Label>Mail</Form.Label>
										    	<Form.Control type="email"
										    				  name="mail"
										    				  onChange={handleChange}
										    				  value={customerModel.mail} />
										    	<small className="text-danger">{error.mail}</small>
										  	</Form.Group>
										</Col>
										<Col>
											<Form.Group controlId="newCustomerPec">
											    <Form.Label>Pec</Form.Label>
										    	<Form.Control type="email"
										    				  name="pec"
										    				  onChange={handleChange}
										    				  value={customerModel.pec} />
										    	<small className="text-danger">{error.pec}</small>
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
										    	<Form.Control type="text"
										    				  name="street"
										    				  onChange={handleChange}
										    				  value={customerModel.street} />
										    	<small className="text-danger">{error.street}</small>
										  	</Form.Group>
										</Col>
										<Col>
											<Form.Group controlId="newCustomerNumber">
											    <Form.Label>Civico</Form.Label>
										    	<Form.Control type="text"
										    		  		  name="number" 
										    		  		  onChange={handleChange}
										    		  		  value={customerModel.number} />
										    	<small className="text-danger">{error.number}</small>
										  	</Form.Group>
										</Col>
										<Col>
											<Form.Group controlId="newCustomerCity">
											    <Form.Label>Città</Form.Label>
										    	<Form.Control type="text"
										    				  name="city" 
										    				  onChange={handleChange}
										    				  value={customerModel.city} />
										    	<small className="text-danger">{error.city}</small>
										  	</Form.Group>
										</Col>
									</Row>
									<Row>
										<Col>
											<Form.Group controlId="newCustomerProvince">
											    <Form.Label>Provincia</Form.Label>
										    	<Form.Control type="text"
										    	 			  name="province" 
										    	 			  onChange={handleChange}
										    	 			  value={customerModel.province} />
										    	<small className="text-danger">{error.province}</small>
										  	</Form.Group>
										</Col>
										<Col>
											<Form.Group controlId="newCustomerZip">
											    <Form.Label>CAP</Form.Label>
										    	<Form.Control type="text"
										    				  name="cap" 
										    				  onChange={handleChange}
										    				  value={customerModel.cap} />
										    	<small className="text-danger">{error.cap}</small>
										  	</Form.Group>
										</Col>
										<Col>
											<Form.Group controlId="newCustomerCountry">
											    <Form.Label>Stato</Form.Label>
										    	<Form.Control type="text"
										    				  name="country" 
										    				  onChange={handleChange}
										    				  value={customerModel.country} />
										    	<small className="text-danger">{error.country}</small>
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