import "../css/PositionDetail.css"

const PositionDetail = ({nodeCount, currentNode, setCurrentNode}) => {
	const handleDepartmentInput = (e) => {

		const currentNodeClone = { ...currentNode }
		console.log(currentNode)
		currentNodeClone.attribute.department = e.target.value;
		setCurrentNode(currentNodeClone);
	} 

	const handleNameInput = (e) => {

		const currentNodeClone = { ...currentNode }
		currentNodeClone.name = e.target.value;
		setCurrentNode(currentNodeClone);
	} 
		
	if (!currentNode) {
		return (
			<div id="PositionDetail">
				Loading...
			</div>
		)
	}
	return (

		<div id="PositionDetail">
			<h3> {currentNode.attribute ? currentNode.attribute.title : ""} </h3>
			<p>
				Total Positions: {nodeCount} 
			</p>

			<table>
				<tbody>
					<tr>
						<td>Name:</td>
						<td><input 
							type="text" 
							value={currentNode.name}
							onInput={e => handleNameInput(e)}/></td>
					</tr>
					<tr>
						<td>Department:</td>
						<td><input 
							type="text"
							value={currentNode.attribute ? currentNode.attribute.department : ""}
							onInput={e => handleDepartmentInput(e)}
						/></td>
					</tr>
				</tbody>
			</table>

			<div className="actions-container">
				
				<button>Delete</button>	
				<button>Update</button>
				<button>AddChild</button>
				<button>Employee</button>	
			</div>


		</div>
	)
}

export default PositionDetail;