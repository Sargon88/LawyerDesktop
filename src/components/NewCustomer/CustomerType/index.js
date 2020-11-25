import React, { useReducer } from "react";
import { Row, Col, Form } from 'react-bootstrap';
import './customerType.css';



const CustomerType = ({ type, dispatch, error, setError, setSidebarData, state }) => {

	function handleChange(event){
		const target = event.target;
    	const name = target.name;
    	const value = target.value;
/*
    	switch(name){
    		case "name":
    			if(value.length === 0){
    				error.[name] = "Campo obbligatorio";
    			} else if(/^[a-zA-z]*[0-9!@#$%^&*(),.?":{}|<>-]+[a-zA-z]*$/.test(value)){
    				error.[name] = "Nome non valido";
    			} else {
    				error.[name] = "";
    			}
    			break;
    		case "surname":
    			if(value.length === 0){
    				error.[name] = "Campo obbligatorio";
    			} else if(/^[a-zA-z]*[0-9!@#$%^&*(),.?":{}|<>-]+[a-zA-z]*$/.test(value)){
    				error.[name] = "Cognome non valido";
    			} else {
    				error.[name] = "";
    			}
    			break;
    		case "code":
    			if(value.length === 0){
    				error.[name] = "Campo obbligatorio";
    			} else if(!/^[a-z]{6}[0-9]{2}[a-z]{1}[0-9]{2}[a-z]{1}[0-9]{3}[a-z]{1}$/.test(value)){
    				error.[name] = "Codice fiscale non valido";
    			} else {
    				error.[name] = "";
    			}
    			break;
    		case "mobile":
    			if(value.length === 0){
    				error.[name] = "Campo obbligatorio";
    			} else if(!/^(([+]|00)39)?(([03][1-9][0-9]))(\d{7})$/.test(value)){
    				error.[name] = "Numero non valido";
    			} else {
    				error.[name] = "";
    			}
    			break;
    		case "phone":
    			if(!/^(([+]|00)39)?(([03][1-9][0-9]))(\d{7})$/.test(value)){
    				error.[name] = "Numero non valido";
    			} else {
    				error.[name] = "";
    			}
    			break;
    		case "fax":
    			if(!/^(([+]|00)39)?(([03][1-9][0-9]))(\d{7})$/.test(value)){
    				error.[name] = "Numero non valido";
    			} else {
    				error.[name] = "";
    			}
    			break;
    		case "mail":
    			if(value.length === 0){
    				error.[name] = "Campo obbligatorio";
    			} else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)){
    				error.[name] = "Indirizzo mail non valido";
    			} else {
    				error.[name] = "";
    			}
    			break;
    		case "pec":
    			if(value.length === 0){
    				error.[name] = "Campo obbligatorio";
    			} else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)){
    				error.[name] = "Indirizzo pec non valido";
    			} else {
    				error.[name] = "";
    			}
    			break;
    		case "street":
    			if(value.length === 0){
    				error.[name] = "Campo obbligatorio";
    			} else {
    				error.[name] = "";
    			}
    			break;
    		case "number":
    			if(!/^[0-9]+$/.test(value)){
    				error.[name] = "Civico errato";
    			} else {
    				error.[name] = "";
    			}
    			break; 
    		case "city":
    			if(value.length === 0){
    				error.[name] = "Campo obbligatorio";
    			} else if(!/^[a-zA-Z]+$/.test(value)){
    				error.[name] = "Verificare il valore inserito";
    			} else {
    				error.[name] = "";
    			}
    			break;
    		case "province":
    			if(!/^[a-zA-Z]+$/.test(value)){
    				error.[name] = "Verificare il valore inserito";
    			} else {
    				error.[name] = "";
    			}
    			break;
    		case "cap":
    			if(value.length === 0){
    				error.[name] = "Campo obbligatorio";
    			} else if(!/^[0-9]{5}$/.test(value)){
    				error.[name] = "Verificare il valore inserito";
    			} else {
    				error.[name] = "";
    			}
    			break;
    		case "country":
    			if(value.length === 0){
    				error.[name] = "Campo obbligatorio";
    			} else if(!/^[a-zA-Z]+$/.test(value)){
    				error.[name] = "Verificare il valore inserito";
    			} else {
    				error.[name] = "";
    			}
    			break;
    		default: break;
    	}    	
*/
    	dispatch({field: name, value: value});
    	dispatch({field: "type", value: type});

    	
	}
	
	const {name, surname, code, mobile, phone, fax, mail, pec, street, city, number, province, cap, country} = state;
		


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
								    	<Form.Control type="text" 
								    				  value={name} 
								    				  name="name" 
								    				  onChange={handleChange} />
								    	<small className="text-danger">{error.name}</small>
								  	</Form.Group>
								</Col>
								<Col>
									<Form.Group controlId="newCustomerSurname">
									    <Form.Label>Cognome</Form.Label>
								    	<Form.Control type="text" 
								    				  value={surname} 
								    				  name="surname" 
								    				  onChange={handleChange} />
								    	<small className="text-danger">{error.surname}</small>
								  	</Form.Group>
								</Col>
								<Col>
									<Form.Group controlId="newCustomerCode">
									    <Form.Label>Codice Fiscale</Form.Label>
								    	<Form.Control type="text" 
								    				  value={code} 
								    				  name="code" 
								    				  onChange={handleChange} />
								    	<small className="text-danger">{error.code}</small>
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
										    	<Form.Control type="text" value={mobile} name="mobile" onChange={handleChange} />
										    	<small className="text-danger">{error.mobile}</small>
										  	</Form.Group>
										</Col>
										<Col>
											<Form.Group controlId="newCustomerPhone">
											    <Form.Label>Telefono</Form.Label>
										    	<Form.Control type="text" value={phone} name="phone" onChange={handleChange} />
										    	<small className="text-danger">{error.phone}</small>
										  	</Form.Group>
										</Col>
										<Col>
											<Form.Group controlId="newCustomerFax">
											    <Form.Label>Fax</Form.Label>
										    	<Form.Control type="text" value={fax} name="fax" onChange={handleChange} />
										    	<small className="text-danger">{error.fax}</small>
										  	</Form.Group>
										</Col>
									</Row>
									<Row>
										<Col>
											<Form.Group controlId="newCustomerMail">
											    <Form.Label>Mail</Form.Label>
										    	<Form.Control type="email" value={mail} name="mail" onChange={handleChange} />
										    	<small className="text-danger">{error.mail}</small>
										  	</Form.Group>
										</Col>
										<Col>
											<Form.Group controlId="newCustomerPec">
											    <Form.Label>Pec</Form.Label>
										    	<Form.Control type="email" value={pec} name="pec" onChange={handleChange} />
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
										    	<Form.Control type="text" value={street} name="street" onChange={handleChange} />
										    	<small className="text-danger">{error.street}</small>
										  	</Form.Group>
										</Col>
										<Col>
											<Form.Group controlId="newCustomerNumber">
											    <Form.Label>Civico</Form.Label>
										    	<Form.Control type="text" value={number} name="number" onChange={handleChange} />
										    	<small className="text-danger">{error.number}</small>
										  	</Form.Group>
										</Col>
										<Col>
											<Form.Group controlId="newCustomerCity">
											    <Form.Label>Città</Form.Label>
										    	<Form.Control type="text" value={city} name="city" onChange={handleChange} />
										    	<small className="text-danger">{error.city}</small>
										  	</Form.Group>
										</Col>
									</Row>
									<Row>
										<Col>
											<Form.Group controlId="newCustomerProvince">
											    <Form.Label>Provincia</Form.Label>
										    	<Form.Control type="text" value={province} name="province" onChange={handleChange} />
										    	<small className="text-danger">{error.province}</small>
										  	</Form.Group>
										</Col>
										<Col>
											<Form.Group controlId="newCustomerZip">
											    <Form.Label>CAP</Form.Label>
										    	<Form.Control type="text" value={cap} name="cap" onChange={handleChange} />
										    	<small className="text-danger">{error.cap}</small>
										  	</Form.Group>
										</Col>
										<Col>
											<Form.Group controlId="newCustomerCountry">
											    <Form.Label>Stato</Form.Label>
										    	<Form.Control type="text" value={country} name="country" onChange={handleChange} />
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