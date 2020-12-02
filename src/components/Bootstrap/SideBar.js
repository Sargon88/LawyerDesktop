import React from "react";
import { useHistory } from "react-router-dom";
import { Nav, Col } from "react-bootstrap"
import { useAppContext } from "../../utils/contextLib";
import './SideBar.css';

const SideBar = ({ page, sidebarData }) => {
	const { isAuthenticated } = useAppContext();
	const { userHasAuthenticated } = useAppContext();
	const history = useHistory();

	function handleLogout() {
		localStorage.clear();
		userHasAuthenticated(false);

		history.push("/login");
	}

	return(  
		<Col xs={1} id="sidebar-wrapper">
			{isAuthenticated === false
				?
				<Nav className="col-md-12 d-none d-md-block bg-light sidebar">
					<div className="sidebar-sticky"></div>
					<Nav.Item>
						<Nav.Link href="/signup">Signup</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/login">Login</Nav.Link>
					</Nav.Item>
				</Nav>
				:
				<Nav className="col-md-12 d-none d-md-block bg-light sidebar">
					<div className="sidebar-sticky"></div>
					<Nav.Item>
						<Nav.Link href="/clienti">Clienti</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/contabilita">Contabilità</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/dafare">Da fare</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/ricerche">Ricerche</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link onClick={handleLogout}>Logout</Nav.Link>
					</Nav.Item>
				</Nav>
			}					
		</Col>
	);
  
};

export default SideBar;