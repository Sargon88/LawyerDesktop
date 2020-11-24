import React from "react";
import { Nav, Col } from "react-bootstrap";
import { Icon } from 'react-icons-kit';
import {ic_add} from 'react-icons-kit/md/ic_add';
import {ic_mode_edit} from 'react-icons-kit/md/ic_mode_edit'
import {ic_save} from 'react-icons-kit/md/ic_save'
import './SideBar.css';

const SideBar = ({ page, sidebarData }) => {

	switch(page){
		case "clients":
			return(  
				<>
					<Col xs={1} id="sidebar-wrapper">
						<Nav className="col-md-12 d-none d-md-block bg-light sidebar" activeKey="/home">
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
		case "newcustomer":
			return(  
				<>
					<Col xs={1} id="sidebar-wrapper">
						<Nav className="col-md-12 d-none d-md-block bg-light sidebar" activeKey="/home">
							<div className="sidebar-sticky"></div>
							<Nav.Item>
								<Nav.Link href="/clienti/nuovo"><Icon icon={ic_add} size={40} /></Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href="#" onClick={sidebarData.saveFunction}><Icon icon={ic_save} size={30} /></Nav.Link>
							</Nav.Item>							
						</Nav>
					</Col>

				</>
			);
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
	}  
  
};

export default SideBar;