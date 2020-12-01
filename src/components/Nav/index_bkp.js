import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap"
import { useAppContext } from "../../utils/contextLib";

const AppNav = () => {
  const { isAuthenticated } = useAppContext();
  const { userHasAuthenticated } = useAppContext();
  const history = useHistory();

  function handleLogout() {
    localStorage.clear();
    userHasAuthenticated(false);

    history.push("/login");
  }

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <Link to="/">{process.env.REACT_APP_APPLICATION_NAME}</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {isAuthenticated === false
          ?
          <Nav className="mr-auto"></Nav>
          :
          <Nav className="mr-auto">
            <Nav.Link href="/clienti">Clienti</Nav.Link>
            <Nav.Link href="/contabilita">Contabilità</Nav.Link>
            <Nav.Link href="/dafare">Da fare</Nav.Link>
            <Nav.Link href="/ricerche">Ricerche</Nav.Link>
          </Nav>
        }

        <Nav className="justify-content-end">
          {isAuthenticated
            ? 
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            : 
              <>
                <Nav.Link href="/signup">Signup</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
              </>
          }
        </Nav>
      </Navbar.Collapse>
      
    </Navbar>
  );
};

export default AppNav;