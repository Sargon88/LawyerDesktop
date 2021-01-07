import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useAppContext } from "../../utils/contextLib";
import { Icon } from 'react-icons-kit';
import { Link, useHistory } from "react-router-dom";
import {ic_add} from 'react-icons-kit/md/ic_add';
import {ic_mode_edit} from 'react-icons-kit/md/ic_mode_edit';
import {ic_save} from 'react-icons-kit/md/ic_save';
import {eye} from 'react-icons-kit/fa/eye';
import {folderOpen} from 'react-icons-kit/fa/folderOpen';
import {ic_keyboard_backspace} from 'react-icons-kit/md/ic_keyboard_backspace';

import './navbar.css';

const NavBar = () => {    
  const { isAuthenticated } = useAppContext();
  const { navbarData } = useAppContext();
  const { applicationModel } = useAppContext();
  const history = useHistory();

  const navbarContext = applicationModel.navbarContext;

 return(
    <Navbar className="ld-navbar" fixed="top" bg="light" expand="lg">
      <Navbar.Brand>
        <Link to="/">{process.env.REACT_APP_APPLICATION_NAME}</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {
            !navbarContext[navbarData.page] 
            ?
              <></>
            :
              navbarContext[navbarData.page].map((context, index) => {
                return(
                  <Nav.Link href={context.param ? context.href + navbarData[context.param] : context.href} 
                            disabled={context.disabled ? !navbarData[context.disabled] : false}
                            onClick={context.onClick ? navbarData[context.onClick] : ""}><Icon icon={context.icon} size={context.size} /></Nav.Link>  
                );
              })
          }

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );

};

export default NavBar;