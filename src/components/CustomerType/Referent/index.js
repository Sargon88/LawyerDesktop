import React, { useState } from "react";
import { Row, Col, Form, Modal, Button,  } from 'react-bootstrap';
import {ic_add} from 'react-icons-kit/md/ic_add';
import {ic_mode_edit} from 'react-icons-kit/md/ic_mode_edit';
import { Icon } from 'react-icons-kit';
import {ic_save} from 'react-icons-kit/md/ic_save'
import axios from 'axios';
import '../customerType.css';


const Referent = ({ selectedReferent, setSelectedReferent, value, index, customerModel, error }) => {
	
//REFERENT
	function editReferent(referent){
		setSelectedReferent(referent);
	}

	function saveReferent(index){
		console.log("selectedReferent", selectedReferent);

		var person = {
			id: selectedReferent.id,
			person_contact: {
				cnn_mail: selectedReferent.mail, 
				cnn_pec: selectedReferent.pec,
				cnn_mobile: {phone_number:selectedReferent.mobile},
				cnn_fax: {phone_number:selectedReferent.fax},
				cnn_phone: {phone_number:selectedReferent.phone},
			}
		}
	  	
		axios.put(`${process.env.REACT_APP_BACKEND_URL}/people/` + selectedReferent.id, person, {
          headers: {
            Authorization:
              'Bearer ' + localStorage.getItem("JWTtoken")
          }})
            .then(response => {

              if(response.status === 200){
                alert.success("Salvato");
                customerModel.referents[index] = selectedReferent;
                setSelectedReferent({});                          

              } else {
                alert.error("Errore:" + response.error);
                console.log(response);
              }
              
              
            },
            response => {
                alert.error("Errore: " + response.error + " - " + response.message);
                console.log(response)
            }); 		
	}

	function handleReferentChange(event){
		const target = event.target;
    	const name = target.name;
    	const value = target.value;

    	let ref = {... selectedReferent}
    	ref[name] = value;

    	setSelectedReferent(ref);
	}

	return (
		<Col xs={3} key={index}>
			<Row>
				<Col className="dataArea">
					<Row>
						<Col xs={10}>
							<h6>{value.name} {value.surname}</h6>
						</Col>
						<Col xs={2}>
							{selectedReferent.id != value.id ?
								<a onClick={() => editReferent(value)} ><Icon icon={ic_mode_edit} xs={35} /></a>
								:
								<a onClick={() => saveReferent(index)} ><Icon icon={ic_save} xs={35} /></a>
							}
						</Col>
					</Row>
					{selectedReferent.id != value.id ?
						(<>
						<Row><Col>Cellulare: {value.mobile}</Col></Row>
						<Row><Col>Telefono: {value.phone}</Col></Row>
						<Row><Col>Fax {value.fax}</Col></Row>
						<Row><Col>Mail {value.mail}</Col></Row>
						<Row><Col>Pec {value.pec}</Col></Row>
						</>)
						:
						(<>
						<Row>
							<Col>
								<Form.Group controlId="newCustomerCountry">
								    <Form.Label>Cellulare</Form.Label>
							    	<Form.Control type="text"
							    				  name="mobile" 
							    				  onChange={handleReferentChange}
							    				  value={selectedReferent.mobile} />
							    	<small className="text-danger">{error.mobile}</small>
							  	</Form.Group>
							</Col>
						</Row>
						<Row>
							<Col>
								<Form.Group controlId="newCustomerCountry">
								    <Form.Label>Telefono</Form.Label>
							    	<Form.Control type="text"
							    				  name="phone" 
							    				  onChange={handleReferentChange}
							    				  value={selectedReferent.phone} />
							    	<small className="text-danger">{error.phone}</small>
							  	</Form.Group>
							</Col>
						</Row>
						<Row>
							<Col>
								<Form.Group controlId="newCustomerCountry">
								    <Form.Label>fax</Form.Label>
							    	<Form.Control type="text"
							    				  name="fax" 
							    				  onChange={handleReferentChange}
							    				  value={selectedReferent.fax} />
							    	<small className="text-danger">{error.fax}</small>
							  	</Form.Group>
							</Col>
						</Row>
						<Row>
							<Col>
								<Form.Group controlId="newCustomerCountry">
								    <Form.Label>Mail</Form.Label>
							    	<Form.Control type="text"
							    				  name="mail" 
							    				  onChange={handleReferentChange}
							    				  value={selectedReferent.mail} />
							    	<small className="text-danger">{error.mail}</small>
							  	</Form.Group>
							</Col>
						</Row>
						<Row>
							<Col>
								<Form.Group controlId="newCustomerCountry">
								    <Form.Label>Pec</Form.Label>
							    	<Form.Control type="text"
							    				  name="pec" 
							    				  onChange={handleReferentChange}
							    				  value={selectedReferent.pec} />
							    	<small className="text-danger">{error.pec}</small>
							  	</Form.Group>
							</Col>
						</Row>
						</>)		
					}
					
				</Col>
			</Row>
		</Col>
	);				
	


	
};

export default Referent;