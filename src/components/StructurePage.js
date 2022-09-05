import React, {useState, useEffect} from 'react';
import CompanyTree from './CompanyTree';
import PositionDetail from './PositionDetail';
import {getAllData, saveTree} from '../utils/firebaseFunctions';

const StructurePage = () => {
	const [currentNode, setCurrentNode] = useState({});
	const [nodeCount, setNodeCount] = useState(0);
	const [data, setData] = useState({});

	const countNodes = (count = 0, n) => {
	  // Count the current node
	  count += 1;

	  // Base case: reached a leaf node.
	  if (!n.children) {
	    return count;
	  }

	  // Keep traversing children while updating `count` until we reach the base case.
	  return n.children.reduce((sum, child) => countNodes(sum, child), count);
	};

	// const deleteData = (root, name) => {
	// 	if (root.children) {
	// 		// if the node has children

	// 		root.children.forEach(child => {
	// 			// go through each child

	// 			if (child.name === name) {
	// 			}
	// 		}) 
	// 	}
	// } // 

	useEffect(() => {
		// getting data from the positions collection
		const fetchData = async () => {
			const initialData = await getAllData("Positions")
			// console.log(initialData);
			setData(initialData)
			setCurrentNode(initialData[0])
		}
		fetchData();
	},[]) // run once

	useEffect(() => {

		setNodeCount(countNodes(0, Array.isArray(data) ? data[0] : data));
	}, [data]) // run everytime the tree of data chnages
 
	return <div id="Structure-Page" className="page">
		<header> 
			<h1>Company Structure</h1>
		</header>
		<main>
			<div className="row-container">
				<CompanyTree
					setCurrentNode={setCurrentNode}
					setNodeCount={setNodeCount}
					data={data}
				/>
				<PositionDetail 
					currentNode={currentNode}
					nodeCount={nodeCount}
					setCurrentNode={setCurrentNode}
				/>
			</div>
		</main>
		<footer></footer>
	</div>
}

export default StructurePage;