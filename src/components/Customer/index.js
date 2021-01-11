import React, { useState } from "react";
import { Row, Col, Form } from 'react-bootstrap';
import FormComponent from "../FormComponent";
import * as FormModel from "../../config/forms";

import "./customer.css";


const CustomerComponent = ({ customerModel, errorModel, validateRules, customerId, isNewReferent, referentType, setReferentType }) => {
	const [customerType, setCustomerType] = useState(customerModel.person_type != null ? customerModel.person_type : null);

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
				<Col><h3>{customerId != null ? (customerModel.person_surname + " " + customerModel.person_name) : isNewReferent ? "Nuovo Referente" : "Nuovo Cliente"}</h3></Col>
			</Row>
			
			<Row>
				<Col>
					<FormComponent entity={ FormModel.person } customerModel={ customerModel } errorModel={ errorModel } hiddenFields={["person_referents"]} />
				</Col>
			</Row>

			{customerModel.person_type === 'giuridico' && customerModel.id ?
				<>
				<Row>
					<Col>Referenti</Col>
				</Row>
				<Row>
				{
					customerModel.person_referents.map(element => {
						return(
							<Col xs="5" className="referentsArea dataArea">
								<FormComponent entity={ FormModel.referent } customerModel={ element } errorModel={ errorModel } hiddenFields={[]} />	
							</Col>
						)
					})
					
				}
				</Row>
				</>
				:
				<></>
			}
		</> 
	);

	
};

export default CustomerComponent;