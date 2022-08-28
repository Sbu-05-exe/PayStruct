import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'; 

import EmployeePage from './EmployeePage';
import StructurePage from './StructurePage';
import Menu from './Menu';

const App = () => {
	return (
		<div>
			<Menu></Menu>
			<BrowserRouter>
				<Route path="/" exact component={StructurePage}/>
				<Route path="/Employees" component={EmployeePage}/>	
			</BrowserRouter>
		</div>
	)
}

export default App;