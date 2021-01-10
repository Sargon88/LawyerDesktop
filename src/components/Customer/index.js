import React, { useState } from "react";
import { Row, Col, Form } from 'react-bootstrap';
import FormComponent from "../FormComponent";
import * as FormModel from "../../config/forms";


const CustomerComponent = ({ customerModel, errorModel, validateRules, customerId, isNewReferent, referentType, setReferentType }) => {
	const [customerType, setCustomerType] = useState(customerModel.person_type != null ? customerModel.person_type : null);

	function selectCustomerType(event){
		setCustomerType(event.target.value);
		customerModel.type = event.target.value;
	}

	function selectReferentType(event){
		setReferentType(event.target.value);
	}

	console.log("REFERENT", customerModel)
	return (
		<>
			<Row>
				<Col><h3>{customerId != null ? (customerModel.person_surname + " " + customerModel.person_name) : isNewReferent ? "Nuovo Referente" : "Nuovo Cliente"}</h3></Col>
			</Row>
			
			<Row>
				<Col>
					<FormComponent entity={ FormModel.person } customerModel={ customerModel } errorModel={ errorModel } children={true} hiddenFields={["person_referents"]} />
				</Col>
			</Row>

			{customerModel.person_type === 'giuridico' ?
				<>
				{
					
					customerModel.person_referents.map(element => {
						return(
							<></>
						//<FormComponent entity={ FormModel.person } customerModel={ element.person } errorModel={ errorModel } children={true} hiddenFields={["person_referents", "person_type"]} />	
						)
					})
					
				}
				</>
				:
				<></>
			}
		</> 
	);

	
};

export default CustomerComponent;