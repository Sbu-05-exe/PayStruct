import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'; 

// import components/pagess
import EmployeePage from './EmployeePage';
import StructurePage from './StructurePage';
import NavBar from './NavBar';

// import styling
import '../css/main.css';

const App = () => {
	return (
		<div id="root-container">
			<BrowserRouter>
				<NavBar></NavBar>
				<Route path="/" exact component={StructurePage}/>
				<Route path="/Employees" component={EmployeePage}/>	
			</BrowserRouter>
		</div>
	)
}

export default App;