import React, { useState } from "react";
import { Row, Col, Form, Button, Modal } from 'react-bootstrap';
import { useAlert } from 'react-alert';
import { useHistory, Link } from "react-router-dom";
import { Typeahead, withAsync } from 'react-bootstrap-typeahead';
import axios from 'axios';

import { Icon } from 'react-icons-kit';
import {ic_mode_edit} from 'react-icons-kit/md/ic_mode_edit';
import {ic_save} from 'react-icons-kit/md/ic_save';
import {ic_add} from 'react-icons-kit/md/ic_add';
import {ic_clear} from 'react-icons-kit/md/ic_clear';
import {ic_delete} from 'react-icons-kit/md/ic_delete'

import './Typeahead.css';
 
//https://github.com/affinipay/react-bootstrap-autosuggest/blob/gh-pages/apidocs/Autosuggest.md
const ReferentModal = ({  }) => {
	const[selectedItem, setSelectedItem] =  useState(null);
	const[typeheadState, setTypeheadState] = useState({isLoading: false, options:[]});
	const AsyncTypeahead = withAsync(Typeahead);
	
	return(
		<Row>
			<Col>
				<Form.Group controlId="noteInput">
					<Form.Label>Sceli un referente</Form.Label>
					<AsyncTypeahead
						isLoading={typeheadState.isLoading}
						onChange={(selected) => {
							setSelectedItem(selected);
						}}
						options={typeheadState.options}
						selected={selectedItem}
						onSearch={(query) => {
							setTypeheadState({isLoading: true});
							fetch(`https://api.github.com/search/users?q=${query}`)
							.then(resp => resp.json())
							.then(json => setTypeheadState({
								isLoading: false,
								options: json.items,
							}));
						}}
					/>
				</Form.Group>
			</Col>			
		</Row>
	);

};

export default ReferentModal;