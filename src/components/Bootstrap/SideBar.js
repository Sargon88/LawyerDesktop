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
import './SideBar.css';

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
		<Col xs={2} className={`sidebar-wrapper ${sidebarOpen ? "sidebar-wrapper-open" : "sidebar-wrapper-close"}`}>
			{isAuthenticated === false
				?
				<Nav className="col-md-12 d-none d-md-block bg-light sidebar sidebar-open">
					<div className="sidebar-sticky"></div>
					<Nav.Item>
						<Link className="ld_sidebarlink" to="/signup">Signup</Link>
					</Nav.Item>
					<Nav.Item>
						<Link className="ld_sidebarlink" to="/login">Login</Link>
					</Nav.Item>
				</Nav>
				:
				<Nav className={`col-md-12 d-none d-md-block bg-light sidebar ${sidebarOpen ? "sidebar-open" : "sidebar-close"}`}>
					<div className="sidebar-sticky"></div>
					<Nav.Item className="sidebarCaret">
						<Nav.Link onClick={toggleSidebar}>{sidebarOpen ? <Icon icon={ic_keyboard_arrow_left} size={25} /> : <Icon icon={ic_keyboard_arrow_right} size={25} />}</Nav.Link>
					</Nav.Item>
					<hr className="solid"/>			
					
					<Nav.Item>
						<Link className="ld_sidebarlink" to="/clienti"><Icon icon={ic_supervisor_account} size={25} /> {sidebarOpen ? "Clienti" : "" }</Link>
					</Nav.Item>
					<Nav.Item>
						<Link className="ld_sidebarlink" to="/folders"><Icon icon={folderOpen} size={25} /> {sidebarOpen ? "Pratiche" : "" }</Link>
					</Nav.Item>
					<Nav.Item>
						<Link className="ld_sidebarlink" to="/contabilita"><Icon icon={ic_assessment} size={25} /> {sidebarOpen ? "Contabilità" : "" }</Link>
					</Nav.Item>
					<Nav.Item>
						<Link className="ld_sidebarlink" to="/dafare"><Icon icon={ic_assignment} size={25} /> {sidebarOpen ? "Da fare" : "" }</Link>
					</Nav.Item>
					<Nav.Item>
						<Link className="ld_sidebarlink" to="/ricerche"><Icon icon={ic_find_in_page} size={25} /> {sidebarOpen ? "Ricerche" : "" }</Link>
					</Nav.Item>

					<hr className="solid lastDivider"/>
					<Nav.Item>
						<Nav.Link onClick={handleLogout}><Icon icon={ic_exit_to_app} size={25} /> {sidebarOpen ? "Logout" : "" }</Nav.Link>
					</Nav.Item>
				</Nav>
			}					
		</Col>
	);
  
};

export default SideBar;