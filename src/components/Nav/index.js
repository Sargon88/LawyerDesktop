import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useAppContext } from "../../utils/contextLib";
import { Icon } from 'react-icons-kit';
import { Link } from "react-router-dom";
import {ic_add} from 'react-icons-kit/md/ic_add';
import {ic_mode_edit} from 'react-icons-kit/md/ic_mode_edit';
import {ic_save} from 'react-icons-kit/md/ic_save'
import {eye} from 'react-icons-kit/fa/eye'
import {folderOpen} from 'react-icons-kit/fa/folderOpen'


const NavBar = () => {    
  const { navbarData } = useAppContext();

 switch(navbarData.page){
    case "clients":
      return(
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            <Link to="/">{process.env.REACT_APP_APPLICATION_NAME}</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/clienti/nuovo"><Icon icon={ic_add} size={40} /></Nav.Link>
              <Nav.Link href={"/customers/" + navbarData.selectedId} disabled={!navbarData.edit}><Icon icon={ic_mode_edit} size={30} /></Nav.Link>
              <Nav.Link href={"/folders/" + navbarData.selectedId} disabled={!navbarData.edit}><Icon icon={folderOpen} size={30} /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    case "folders":
      return(
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            <Link to="/">{process.env.REACT_APP_APPLICATION_NAME}</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/folders/new"><Icon icon={ic_add} size={40} /></Nav.Link>
              <Nav.Link href={"/folders/edit" + navbarData.selectedId} disabled={!navbarData.edit}><Icon icon={ic_mode_edit} size={30} /></Nav.Link>
              <Nav.Link href={"/folders/view" + navbarData.selectedId} disabled={!navbarData.edit}><Icon icon={eye} size={30} /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    case "newcustomer":
    case "editcustomer":
      return(  
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            <Link to="/">{process.env.REACT_APP_APPLICATION_NAME}</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/clienti/nuovo"><Icon icon={ic_add} size={40} /></Nav.Link>
              <Nav.Link href="#" onClick={navbarData.saveFunction}><Icon icon={ic_save} size={30} /></Nav.Link>
              <Nav.Link href={"/folders/" + navbarData.selectedId} disabled={!navbarData.edit}><Icon icon={folderOpen} size={30} /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );  
    default:
      return(
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            <Link to="/">{process.env.REACT_APP_APPLICATION_NAME}</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
 }

};

export default NavBar;