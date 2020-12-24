import React, { useState } from "react";
import { Row, Col, Form, Button, Modal } from 'react-bootstrap';
import { useAlert } from 'react-alert';
import { useHistory, Link } from "react-router-dom";
import axios from 'axios';

import { Icon } from 'react-icons-kit';
import {ic_mode_edit} from 'react-icons-kit/md/ic_mode_edit';
import {ic_save} from 'react-icons-kit/md/ic_save';
import {ic_add} from 'react-icons-kit/md/ic_add';
import {ic_clear} from 'react-icons-kit/md/ic_clear';
import {ic_delete} from 'react-icons-kit/md/ic_delete'

import ReferentModal from '../ReferentModal';

import './referent.css';
 
const ReferentType = ({ customerModel, selectedReferent, setSelectedReferent, validateRules }) => {
	const [error, setError] = useState({});
	const alert = useAlert();
	const history = useHistory();
	
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

	function addReferent(){
		setSelectedReferent({});
	}

	function removeReferent(index){
		var customerId = customerModel.id;
		var referents = customerModel.referents;

		referents.splice(index, 1);
		var ref = [];
		referents.forEach(function(item, index){
			ref.push({person:{id: item.id}});
		});


		var person = {
			id: customerId,
			person_referents: ref
		}

		axios.put(`${process.env.REACT_APP_BACKEND_URL}/people/` + customerId, person, {
          headers: {
            Authorization:
              'Bearer ' + localStorage.getItem("JWTtoken")
          }})
            .then(response => {

              if(response.status === 200){
                alert.success("Salvato");
                customerModel.referents = referents;
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

	//MODAL
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	//MODAL

	return (
		<>
			<Row>
				<Col>
					<Row><Col><h4>Referenti <Button variant="link" onClick={() => handleShow()} className="ld_microbtn" ><Icon icon={ic_add} xs={35} /></Button></h4></Col></Row>
					<Row>
					{customerModel.referents.map((value, index) => {
						return(	
							<Col xs={3} key={index}>
								<Row>
									<Col className="dataArea">
										<Row>
											<Col xs={10}>
												<a href={"/customers/" + value.id}><h6>{value.name} {value.surname}</h6></a>
											</Col>
											<Col xs={2}>
												{selectedReferent.id !== value.id ?
													<>
													<Button variant="link" className="ld_microbtn" onClick={() => editReferent(value)} ><Icon icon={ic_mode_edit} xs={35} /></Button>
													<Button variant="link" className="ld_microbtn" onClick={() => removeReferent(index)} ><Icon icon={ic_delete} xs={35} /></Button>
													</>
													:
													<>
													<Button variant="link" className="ld_microbtn" onClick={() => saveReferent(index)} ><Icon icon={ic_save} xs={35} /></Button>
													<Button variant="link" className="ld_microbtn" onClick={() => setSelectedReferent({})} ><Icon icon={ic_clear} xs={35} /></Button>
													</>
												}
											</Col>
										</Row>
										<Row><Col>Ruolo: {value.role}</Col></Row>
										{selectedReferent.id !== value.id ?
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
					})}
					</Row>
				</Col>
			</Row>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Aggiungi Referente</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<ReferentModal />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);				
	


	
};

export default ReferentType;