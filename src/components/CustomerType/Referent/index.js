import { Row, Col, Form, Button } from 'react-bootstrap';
import {ic_mode_edit} from 'react-icons-kit/md/ic_mode_edit';
import { Icon } from 'react-icons-kit';
import {ic_save} from 'react-icons-kit/md/ic_save';
import '../customerType.css';
 
const ReferentType = ({ selectedReferent, setSelectedReferent, value, handleReferentChange, index, error }) => {
	
	function editReferent(value){
		console.log("editReferent", value);
	}

	function saveReferent(value){
		console.log("saveReferent", value);
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
							{selectedReferent.id !== value.id ?
								<Button variant="link" onClick={() => editReferent(value)} ><Icon icon={ic_mode_edit} xs={35} /></Button>
								:
								<Button variant="link" onClick={() => saveReferent(index)} ><Icon icon={ic_save} xs={35} /></Button>
							}
						</Col>
					</Row>
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
	


	
};

export default ReferentType;