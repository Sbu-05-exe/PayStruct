import React from 'react';
import {NavLink} from 'react-router-dom';

import '../css/menu.css';

const NavBar = () => {
	return (
		<nav id="NavBar">
			<ul>
				{/*A navlink element is an anchor that gets an active classname */}

				<NavLink 
					exact to="/"
					className={isActive => isActive ? "" : "unselected"}
				><li >Structure</li></NavLink>
				<NavLink 
					to="/Employees"
					className={isActive => isActive ? "" : "unselected"}
				><li >Employees</li></NavLink>
				<NavLink 
					to="/Analytics"
					className={isActive => isActive ? "" : "unselected"}
				><li >Analytics</li></NavLink>
			</ul>
		</nav>
	);
}


export default NavBar;