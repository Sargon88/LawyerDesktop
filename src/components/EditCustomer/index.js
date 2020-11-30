import React, { useState } from "react";
import { Row, Col, Form } from 'react-bootstrap';

const EditCustomers = ({ customerId}) => {
	return(
		<>
		<Row>
			<Col>
				Component Edit Customer: { customerId }
			</Col>
		</Row>
		</>
	);

	
};

export default EditCustomers;