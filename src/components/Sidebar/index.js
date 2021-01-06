import { useHistory, Link } from "react-router-dom";
import { Nav, Col } from "react-bootstrap"
import { Icon } from 'react-icons-kit';
import { useAppContext } from "../../utils/contextLib";
import {ic_keyboard_arrow_left} from 'react-icons-kit/md/ic_keyboard_arrow_left';
import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right';
import {ic_supervisor_account} from 'react-icons-kit/md/ic_supervisor_account';
import {ic_assessment} from 'react-icons-kit/md/ic_assessment';
import {ic_assignment} from 'react-icons-kit/md/ic_assignment';
import {ic_find_in_page} from 'react-icons-kit/md/ic_find_in_page';
import {ic_exit_to_app} from 'react-icons-kit/md/ic_exit_to_app';
import {folderOpen} from 'react-icons-kit/fa/folderOpen';
import './sidebar.css';

const SideBar = ({ page, sidebarData }) => {
	const { isAuthenticated } = useAppContext();
	const { userHasAuthenticated } = useAppContext();
	const { sidebarOpen } = useAppContext();
	const { setSidebarOpen } = useAppContext();
	const history = useHistory();

	function handleLogout() {
		localStorage.clear();
		userHasAuthenticated(false);

		history.push("/login");
	}

	function toggleSidebar(){
		setSidebarOpen(!sidebarOpen);
	}

	return(  
        <>
			{isAuthenticated === false
				?
                <></>
                :
                <>
                <nav className="ld_navbar">

                    <ul className="ld_navbar-nav">
                        <li className="ld_nav-item">
                            <Link to="/clienti" className="ld_nav-link">
                                <Icon icon={ic_supervisor_account} /><span className="ld_link-text">Clienti</span>
                            </Link>
                        </li>
                    
                        <li className="ld_nav-item">
                            <Link to="/folders" className="ld_nav-link">
                                <Icon icon={folderOpen} /><span className="ld_link-text">Pratiche</span>
                            </Link>
                        </li>
                    
                        <li className="ld_nav-item">
                            <Link to="/contabilita" className="ld_nav-link">
                                <Icon icon={ic_assessment} /><span className="ld_link-text">Contabilità</span>
                            </Link>
                        </li>
                    
                        <li className="ld_nav-item">
                            <Link to="/dafare" className="ld_nav-link">
                                <Icon icon={ic_assignment} /><span className="ld_link-text">Da fare</span>
                            </Link>
                        </li>
                    
                        <li className="ld_nav-item">
                            <Link to="/ricerche" className="ld_nav-link">
                                <Icon icon={ic_find_in_page} /><span className="ld_link-text">Ricerche</span>
                            </Link>
                        </li>

                        <hr className="solid lastDivider"/>

                        <li className="ld_nav-item">
                            <Link onClick={handleLogout} className="ld_nav-link">
                                <Icon icon={ic_exit_to_app} /><span className="ld_link-text">Logout</span>
                            </Link>
                        </li>
                    </ul>

                </nav>
                </>
			}	
        </>
	);
  
};

export default SideBar;