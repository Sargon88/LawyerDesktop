import React, { useState } from "react";
import { Row, Col, Form } from 'react-bootstrap';
import CustomerType from "../CustomerType";


const CustomerComponent = ({ customerModel, errorModel, validateRules, customerId,isNewReferent }) => {
	const [customerType, setCustomerType] = useState(customerModel.Type != null ? customerModel.type : null);

	function selectCustomerType(event){
		setCustomerType(event.target.value);
		customerModel.type = event.target.value;
	}

	return (
		<>
		<Row>
			<Col><h3>{customerId != null ? (customerModel.surname + " " + customerModel.name) : isNewReferent ? "Nuovo Referente" : "Nuovo Cliente"}</h3></Col>
		</Row>
		{
			!isNewReferent ? 
			<Row>
				<Col xs={3}>
					<Form>
						<Form.Group controlId="newCustomer">
							<Form.Label>Tipo Cliente</Form.Label>
							<Form.Control as="select" onChange={ selectCustomerType } disabled={ customerModel.type != null } value={customerModel.type}>
								<option value=""></option>
								<option value="pp">Persona Fisica</option>
								<option value="lp">Persona Giuridica</option>
							</Form.Control>
						</Form.Group>
					</Form>
				</Col>  
			</Row>
			:
			<></>
		}
		
		<Row>
			<Col>
				<CustomerType type={customerModel.type} 
					customerModel={customerModel}
					errorModel={errorModel}
					validateRules={validateRules}
					isNewReferent={isNewReferent}
					/>
			</Col>
		</Row>
		</>
	);

	
};

export default CustomerComponent;