import React, { useState } from "react";
import { Row, Col, Button, Collapse } from 'react-bootstrap';
import { Icon } from 'react-icons-kit';
import {ic_keyboard_arrow_down} from 'react-icons-kit/md/ic_keyboard_arrow_down'
import {ic_keyboard_arrow_up} from 'react-icons-kit/md/ic_keyboard_arrow_up'

const FoldersComponent = ({ data }) => {
	const [customerData] = useState(data);
	const [openDetails, setOpenDetail] = useState(false);

	return (
		<>
		<Row>
			<Col><h3>
				{ customerData.customer_type === "Fisico" ? 
				  customerData.customer_customer[0].person.name + " " + customerData.customer_customer[0].person.surname + " - Pratiche " :
				  customerData.customer_customer[0].person.surname + " - Pratiche "
				}
				<Button
					variant="link"
			        onClick={() => setOpenDetail(!openDetails)}
			        aria-controls="customerData"
			        aria-expanded={openDetails} >
			        {openDetails === true ? <Icon icon={ic_keyboard_arrow_up} /> : <Icon icon={ic_keyboard_arrow_down} />}
			      </Button>
			</h3>
			</Col>
		</Row>
		<Row>
			<Col>
				<Collapse in={openDetails}>
					<div id="customerData" style={{backgroundColor: '#8080801f', border: '1px solid #007bff33', padding: '5px'}}>
						{customerData.customer_customer.map((value, index) => {
							return(
								<Row key={index}>
									<Col>
										<Row>
											<Col><strong>{value.person.name ? value.person.name : ""} {value.person.surname}</strong></Col>
										</Row>
										<Row>
											<Col><strong>Codice Fiscale:</strong> <span className="text-uppercase">{value.person.code}</span></Col>
										</Row>
										<Row>
											{value.person.contact.cnn_mobile.phone_number ? <Col><strong>Mobile:</strong> {value.person.contact.cnn_mobile.phone_number}</Col> : ""}
											{value.person.contact.cnn_phone.phone_number ? <Col><strong>Telefono:</strong> {value.person.contact.cnn_phone.phone_number}</Col> : ""}
											{value.person.contact.cnn_fax.phone_number ? <Col><strong>Fax:</strong> {value.person.contact.cnn_fax.phone_number}</Col> : ""}
										</Row>
										<Row>
											{value.person.contact.cnn_mail ? <Col><strong>Mail:</strong> {value.person.contact.cnn_mail}</Col> : ""}
											{value.person.contact.cnn_pec ? <Col><strong>PEC:</strong> {value.person.contact.cnn_pec}</Col> : ""}
										</Row>
										<br />
									</Col>
								</Row>
							);
						})}
					</div>
				</Collapse>
					

			</Col>
		</Row>
		<br />
		<Row>
			<Col>
				FoldersComponent/folders	
			</Col>  
		</Row>
		</>
	);

	
};

export default FoldersComponent;