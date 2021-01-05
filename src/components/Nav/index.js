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
import {ic_keyboard_backspace} from 'react-icons-kit/md/ic_keyboard_backspace'

import './navbar.css';

const NavBar = () => {    
  const { isAuthenticated } = useAppContext();
  const { navbarData } = useAppContext();
  const history = useHistory();

  const navbarContext = {
    clients: [
      {
        href: "/clienti/nuovo",
        icon: ic_add,
        size: 40,
        disabled: false
      },
      {
        href: "/customers/" + navbarData.selectedId,
        icon: ic_mode_edit,
        size: 30,
        disabled: !navbarData.edit
      },
      {
        href: "/folders/" + navbarData.selectedId,
        icon: folderOpen,
        size: 30,
        disabled: !navbarData.edit
      }
    ],
    folders: [
      {
        href: "/folders/new",
        icon: ic_add,
        size: 40,
        disabled: false
      },
      {
        href: "/folders/edit" + navbarData.selectedId,
        icon: ic_mode_edit,
        size: 30,
        disabled: !navbarData.edit
      },
      {
        href: "/folders/view" + navbarData.selectedId,
        icon: eye,
        size: 30,
        disabled: !navbarData.edit
      }
    ],
    newcustomer: [
      {
        href: "/clienti/nuovo",
        icon: ic_add,
        size: 40,
        disabled: false
      },
      {
        href: "#",
        icon: ic_save,
        size: 30,
        disabled: false,
        onClick: navbarData.saveFunction
      },
      {
        href: "/folders/" + navbarData.selectedId,
        icon: folderOpen,
        size: 30,
        disabled: !navbarData.selectedId
      }
    ],
    editcustomer: [
      {
        href: "/clienti/nuovo",
        icon: ic_add,
        size: 40,
        disabled: false
      },
      {
        href: "#",
        icon: ic_save,
        size: 30,
        disabled: false,
        onClick: navbarData.saveFunction
      },
      {
        href: "/folders/" + navbarData.selectedId,
        icon: folderOpen,
        size: 30,
        disabled: !navbarData.selectedId
      }
    ],
    folderspreview: [
      {
        href: "/folders/new",
        icon: ic_add,
        size: 40,
        disabled: false
      },
      {
        href: "/customers/" + navbarData.selectedId,
        icon: ic_mode_edit,
        size: 30,
        disabled: !navbarData.edit
      },
      {
        href: "/folders/" + navbarData.selectedId,
        icon: folderOpen,
        size: 30,
        disabled: !navbarData.edit
      }
    ]
  }

 return(
    <Navbar className="ld-navbar" fixed="top" bg="light" expand="lg">
      <Navbar.Brand>
        <Link to="/">{process.env.REACT_APP_APPLICATION_NAME}</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {
            isAuthenticated ?
              <>
              <Nav.Link className="ld-backbtn" onClick={() => history.goBack()}><Icon icon={ic_keyboard_backspace} size={30} /></Nav.Link>
              {
                navbarContext[navbarData.page] ? 
                  navbarContext[navbarData.page].map((context, index) => {
                    return <Nav.Link key={index} href={context.href} onClick={context.onClick} disabled={context.disabled}><Icon icon={context.icon} size={context.size} /></Nav.Link>
                  })
                  :
                  <></>
              }
              </>
              :
              <></>
          }

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );

};

export default NavBar;