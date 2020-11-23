import React, { useState } from "react";
import { Nav, Col } from "react-bootstrap";
import { withRouter } from "react-router";
import { Icon } from 'react-icons-kit';
import {ic_add} from 'react-icons-kit/md/ic_add';
import {ic_mode_edit} from 'react-icons-kit/md/ic_mode_edit'
import './SideBar.css';

const SideBar = ({ page, sidebarData }) => {
	const [value, setValue] = useState('');


	switch(page){
		case "clients":
			return(  
				<>
					<Col xs={1} id="sidebar-wrapper">
						<Nav className="col-md-12 d-none d-md-block bg-light sidebar" activeKey="/home" onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
							<div className="sidebar-sticky"></div>
							<Nav.Item>
								<Nav.Link href="/clienti/nuovo"><Icon icon={ic_add} size={40} /></Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href="/clienti/edit" disabled={!sidebarData.edit}><Icon icon={ic_mode_edit} size={30} /></Nav.Link>
							</Nav.Item>							
						</Nav>
					</Col>

				</>
			);
			break;
		default: 
			return(  
				<>
					<Col xs={1} id="sidebar-wrapper">
						<Nav className="col-md-12 d-none d-md-block bg-light sidebar" activeKey="/home" onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
							<div className="sidebar-sticky"></div>
							<Nav.Item>
								<Nav.Link href="/home">Active</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="link-1">Link</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="link-2">Link</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="disabled" disabled>
									Disabled
								</Nav.Link>
							</Nav.Item>
						</Nav>
					</Col>

				</>
			);
			break;

	}  
  
};

export default SideBar;