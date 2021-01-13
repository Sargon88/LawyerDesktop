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
import * as FormModel from "../../config/forms";
import FormComponent from "../FormComponent";

import './referent.css';
 
const ReferentType = ({ customerModel, errorModel }) => {
	const [error, setError] = useState({});
	const [selectedReferent, setSelectedReferent] = useState();
	const alert = useAlert();
	const history = useHistory();
	
	function editReferent(referent){
		
		customerModel.person_referents.map(element => {
			for(var att in element){
				att.editable = false;
			}
		});

		for(var att in referent){
			att.editable = true;
		}
	
		setSelectedReferent(referent);
		
	}

	function saveReferent(index){

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
              }
              
              
            },
            response => {
                alert.error("Errore: " + response.error + " - " + response.message);
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
		var referents = customerModel.person_referents;

		referents.splice(index, 1);
		var ref = [];

		referents.forEach(function(item, index){
			ref.push({person:{id: item.person.id}});
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
                customerModel.person_referents = referents;
                setSelectedReferent({});                          

              } else {
                alert.error("Errore:" + response.error);
              }
              
              
            },
            response => {
                alert.error("Errore: " + response.error + " - " + response.message);
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
					{
						customerModel.person_referents.map((element, index) => {
							return(
								<Col xs="3" className="referentsArea dataArea">
									<Row>
										<Col xs={10}>
											<a href={"/customers/" + element.person.id}><h5>{element.person.person_name} {element.person.person_surname}</h5></a>
										</Col>
										<Col xs={2}>
											<Button variant="link" className="ld_microbtn" onClick={() => saveReferent(index)} ><Icon icon={ic_save} xs={45} /></Button>
											<Button variant="link" className="ld_microbtn" onClick={() => removeReferent(index)} ><Icon icon={ic_delete} xs={45} /></Button>
										</Col>
									</Row>
									<FormComponent entity={ FormModel.referent } customerModel={ element } errorModel={ errorModel } hiddenFields={[]} />	
								</Col>
							)
						})
					}
					</Row>
				</Col>
			</Row>

			<Modal className="ld_referentmodal" show={show} onHide={handleClose} centered>
				<Modal.Header closeButton>
					<Modal.Title>Aggiungi Referente</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<ReferentModal customerModel={ customerModel } />
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