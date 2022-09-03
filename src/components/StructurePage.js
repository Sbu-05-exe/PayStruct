import React from 'react';
import CompanyTree from './CompanyTree';

const StructurePage = () => {
	return <div id="Structure-Page" className="page">
		<header> 
			<h1>Company Structure</h1>
		</header>
		<main>
			<CompanyTree/>
		</main>
		<footer></footer>
	</div>
}

export default StructurePage;