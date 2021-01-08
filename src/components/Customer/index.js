import React, { useState } from "react";
import { Row, Col, Form } from 'react-bootstrap';
import FormComponent from "../FormComponent";
import * as FormModel from "../../config/forms";


const CustomerComponent = ({ customerModel, errorModel, validateRules, customerId, isNewReferent, referentType, setReferentType }) => {
	const [customerType, setCustomerType] = useState(customerModel.Type != null ? customerModel.type : null);

	function selectCustomerType(event){
		setCustomerType(event.target.value);
		customerModel.type = event.target.value;
	}

	function selectReferentType(event){
		setReferentType(event.target.value);
	}

	return (
		<>
			<Row>
				<Col><h3>{customerId != null ? (customerModel.surname + " " + customerModel.name) : isNewReferent ? "Nuovo Referente" : "Nuovo Cliente"}</h3></Col>
			</Row>
			<FormComponent entity={ FormModel.Person } customerModel={ customerModel }/>
		</>
	);

	
};

export default CustomerComponent;