import React, { useState } from "react";
import { Row, Col, Form, Modal, Button,  } from 'react-bootstrap';
import {ic_add} from 'react-icons-kit/md/ic_add';
import {ic_mode_edit} from 'react-icons-kit/md/ic_mode_edit';
import { Icon } from 'react-icons-kit';
import {ic_save} from 'react-icons-kit/md/ic_save'
import axios from 'axios';
import { useAlert } from 'react-alert';
import './customerType.css';

const CustomerType = ({ type, customerModel, errorModel, validateRules }) => {
	const [error, setError] = useState({});
	const [selectedReferent, setSelectedReferent] = useState({});
	const alert = useAlert()

	function handleChange(event){
		const target = event.target;
    	const name = target.name;
    	const value = target.value;

    	var e = error;
    	var rule = validateRules.find(x => x.field === name);

		if(rule.isMandatory && value.length === 0){
			errorModel.[name] = "Campo obbligatorio";
			
		} else if(rule.isMandatory && value.length > 0 && rule.regex && !rule.regex.test(value)){
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
	//REFERENT

	//MODAL
	 const [show, setShow] = useState(false);

	  const handleClose = () => setShow(false);
	  const handleShow = () => setShow(true);;

	//MODAL

	//https://www.positronx.io/react-form-validation-tutorial-with-example/
	//https://medium.com/@adostes/validating-a-form-in-react-cc29d47e140f
	if(type){
		return (
			<Row>
				<Col>
					<Form>
					<Row>
						<Col>
							<Row><Col><h4>Anagrafica</h4></Col></Row>
							{ type === "pp" ?
							(<Row>
								<Col>
									<Row className="dataArea">
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
									</Row>
								</Col>
							</Row>)
							:
							type === "lp" ?
							(<Row>
								<Col>
									<Row className="dataArea">
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
									</Row>
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
							<Row>
								<Col><h4>Contatti</h4></Col>
								<Col><h4>Indirizzo</h4></Col>
							</Row>
							<Row>
								<Col className="dataArea">
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
								<Col className="dataArea">
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
					<br />

					{type !== "lp" ?
						<></>
						:
						<>
							<Row>
								<Col>
									<Row><Col><h4>Referenti <a value={""} onClick={() => handleShow(null)} ><Icon icon={ic_add} xs={35} /></a></h4></Col></Row>
									<Row>
									{customerModel.referents.map((value, index) => {
										console.log(value);
										return(	
											<Col xs={4} key={index}>
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
														<Row>
															<Col xs={10}>
																<h6>{value.role}</h6>
															</Col>
														</Row>
														{selectedReferent.id != value.id ?
															(<>
															<Row>
																<Col xs={3}>Cellulare</Col>
																<Col>{value.mobile}</Col>
															</Row>
															<Row>
																<Col xs={3}>Telefono</Col>
																<Col>{value.phone}</Col>
															</Row>
															<Row>
																<Col xs={3}>Fax</Col>
																<Col>{value.fax}</Col>
															</Row>
															<Row>
																<Col xs={3}>Mail</Col>
																<Col>{value.mail}</Col>
															</Row>
															<Row>
																<Col xs={3}>Pec</Col>
																<Col>{value.pec}</Col>
															</Row>
															</>)
															:
															(<>
															<Row>
																<Col>
																	<Form.Group controlId="newCustomerCountry">
																		<Form.Row>
																		    <Form.Label column="sm" xs={3}>Cellulare</Form.Label>
																	    	<Col>
																		    	<Form.Control size="sm" type="text"
																		    				  name="mobile" 
																		    				  onChange={handleReferentChange}
																		    				  value={selectedReferent.mobile} />
																	    		<small className="text-danger">{error.mobile}</small>
																	    	</Col>
																	    </Form.Row>	
																  		<Form.Row>
																		    <Form.Label column="sm" xs={3}>Telefono</Form.Label>
																		    <Col>
																		    	<Form.Control size="sm" type="text"
																		    				  name="phone" 
																		    				  onChange={handleReferentChange}
																		    				  value={selectedReferent.phone} />
																		    	<small className="text-danger">{error.phone}</small>
																		    </Col>
																	    </Form.Row>	
																  		<Form.Row>
																		    <Form.Label column="sm" xs={3}>fax</Form.Label>
																		    <Col>
																		    	<Form.Control size="sm" type="text"
																		    				  name="fax" 
																		    				  onChange={handleReferentChange}
																		    				  value={selectedReferent.fax} />
																		    	<small className="text-danger">{error.fax}</small>
																		    </Col>
																	    </Form.Row>	
																  	    <Form.Row>
																		    <Form.Label column="sm" xs={3}>Mail</Form.Label>
																	    	<Col>
																		    	<Form.Control size="sm" type="text"
																		    				  name="mail" 
																		    				  onChange={handleReferentChange}
																		    				  value={selectedReferent.mail} />
																		    	<small className="text-danger">{error.mail}</small>
																		    </Col>
																	    </Form.Row>
																  	    <Form.Row>
																		    <Form.Label column="sm" xs={3}>Pec</Form.Label>
																	    	<Col>
																		    	<Form.Control size="sm" type="text"
																		    				  name="pec" 
																		    				  onChange={handleReferentChange}
																		    				  value={selectedReferent.pec} />
																		    	<small className="text-danger">{error.pec}</small>
																		    </Col>
																	    </Form.Row>
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

							<Modal size='xl' show={show} onHide={handleClose}>
								<Modal.Header closeButton>
									<Modal.Title>Aggiungi Referente</Modal.Title>
								</Modal.Header>
								<Modal.Body>
									
									<CustomerType type='pp' customerModel={{}} errorModel={{}} validateRules={validateRules} />


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
					}
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