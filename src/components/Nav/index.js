import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useAppContext } from "../../utils/contextLib";
import { Icon } from 'react-icons-kit';
import { Link } from "react-router-dom";
import {ic_add} from 'react-icons-kit/md/ic_add';
import {ic_mode_edit} from 'react-icons-kit/md/ic_mode_edit';
import {ic_save} from 'react-icons-kit/md/ic_save';
import {eye} from 'react-icons-kit/fa/eye';
import {folderOpen} from 'react-icons-kit/fa/folderOpen';
import {ic_keyboard_backspace} from 'react-icons-kit/md/ic_keyboard_backspace'
import { useHistory } from "react-router-dom";

import './navbar.css';


const NavBar = () => {    
  const { navbarData } = useAppContext();
  const history = useHistory();

  console.log("NAVBAR", navbarData, history.length);
  console.log("history", history);

 return(
    <Navbar className="ld-navbar" fixed="top" bg="light" expand="lg">
      <Navbar.Brand>
        <Link to="/">{process.env.REACT_APP_APPLICATION_NAME}</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="ld-backbtn" onClick={() => history.goBack()}><Icon icon={ic_keyboard_backspace} size={30} /></Nav.Link>

          {
            navbarData.page === "clients" ? 
              <>
                <Nav.Link href="/clienti/nuovo"><Icon icon={ic_add} size={40} /></Nav.Link>
                <Nav.Link href={"/customers/" + navbarData.selectedId} disabled={!navbarData.edit}><Icon icon={ic_mode_edit} size={30} /></Nav.Link>
                <Nav.Link href={"/folders/" + navbarData.selectedId} disabled={!navbarData.edit}><Icon icon={folderOpen} size={30} /></Nav.Link>
              </>
              
            :
            navbarData.page === "folders" ?
              <>
                <Nav.Link href="/folders/new"><Icon icon={ic_add} size={40} /></Nav.Link>
                <Nav.Link href={"/folders/edit" + navbarData.selectedId} disabled={!navbarData.edit}><Icon icon={ic_mode_edit} size={30} /></Nav.Link>
                <Nav.Link href={"/folders/view" + navbarData.selectedId} disabled={!navbarData.edit}><Icon icon={eye} size={30} /></Nav.Link>
              </>
            :
            navbarData.page === "newcustomer" || navbarData.page === "editcustomer"  ?
              <>
                <Nav.Link href="/clienti/nuovo"><Icon icon={ic_add} size={40} /></Nav.Link>
                <Nav.Link href="#" onClick={navbarData.saveFunction}><Icon icon={ic_save} size={30} /></Nav.Link>
                <Nav.Link href={"/folders/" + navbarData.selectedId} disabled={!navbarData.selectedId}><Icon icon={folderOpen} size={30} /></Nav.Link>
              </>
            :
            navbarData.page === "folderspreview" ?
              <>
                <Nav.Link href="/folders/new"><Icon icon={ic_add} size={40} /></Nav.Link>
                <Nav.Link href={"/customers/" + navbarData.selectedId} disabled={!navbarData.edit}><Icon icon={ic_mode_edit} size={30} /></Nav.Link>
                <Nav.Link href={"/folders/" + navbarData.selectedId} disabled={!navbarData.edit}><Icon icon={folderOpen} size={30} /></Nav.Link>
              </>
            :
              <>
              </>
              
              
          }

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );

};

export default NavBar;