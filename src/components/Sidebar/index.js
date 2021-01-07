import { useHistory, Link } from "react-router-dom";
import { Icon } from 'react-icons-kit';
import { useAppContext } from "../../utils/contextLib";
import {ic_exit_to_app} from 'react-icons-kit/md/ic_exit_to_app';
import './sidebar.css';

/*
const icons = {
    'ic_keyboard_arrow_left' : ic_keyboard_arrow_left,
    'ic_keyboard_arrow_right' : ic_keyboard_arrow_right,
    'ic_supervisor_account' : ic_supervisor_account,
    'ic_assessment' : ic_assessment,
    'ic_assignment' : ic_assignment,
    'ic_find_in_page' : ic_find_in_page,
    'ic_exit_to_app' : ic_exit_to_app,
    'folderOpen' : folderOpen,
}
*/

const SideBar = ({ page, sidebarData }) => {
	const { isAuthenticated } = useAppContext();
	const { userHasAuthenticated } = useAppContext();
    const { applicationModel } = useAppContext();
	const history = useHistory();

	function handleLogout() {
		localStorage.clear();
		userHasAuthenticated(false);

		history.push("/login");
	}
    
    const sidebarContext = applicationModel.sidebarContext;
      

	return(  
        <>
			{isAuthenticated === false
				?
                <></>
                :
                <>
                <nav className="ld_navbar">

                    <ul className="ld_navbar-nav">
                        {
                            sidebarContext.map((context, index) => {
                                return (
                                    <li key={index} className="ld_nav-item">
                                        <Link to={context.href} className="ld_nav-link">
                                            <Icon icon={context.icon} /><span className="ld_link-text">{context.label}</span>
                                        </Link>
                                    </li>
                                );
                            })
                        }
                        <hr className="solid lastDivider"/>

                        <li className="ld_nav-item">
                            <Link onClick={handleLogout} to="#" className="ld_nav-link">
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