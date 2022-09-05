import Tree from 'react-d3-tree';
import { Component } from 'react';





class CompanyTree extends Component {

	state = {
		translateX: 200,
		translateY: 300,
		collapsible: false,
	} 

	handleNodeClick(node, event) {
		// console.log(node.data.name);
		this.props.setCurrentNode(node.data);
	}

	componentDidMount() {
		// center the tree svg element when this component initially renders
		const dimensions = this.treeContainer.getBoundingClientRect();
		const treeData = this.props.data;
		this.props.setCurrentNode(treeData[0]);
		// console.log(dimensions);
		this.setState({
			translateX: dimensions.x,
			translateY: dimensions.y / 2
		});
	}
	render() {

		return (
			<div id="treeWrapper"
					style={{width: '50em', height: '30em' }}
					ref={tc => {
						this.treeContainer=tc
					}} className="tree-container">
					
				<Tree  
					hasInteractiveNodes={true}
					pathFunc="step"
					data={this.props.data}
					orientation="vertical"
					shouldCollapseNeighbourNodes={true}
					separation={ {siblings: 1, nonSiblings: 1}}
					centeringTransitionDuration={500}
					transitionDuration={800}
					initialDepth={0}
					translate={ {

						x: this.state.translateX,
						y: this.state.translateY
					}
					}
					onNodeClick={(...args) => this.handleNodeClick(...args)}
					// translateX={this.translateY}
					// translateY={this.translateX}
					totalNodeCount={this.state.nodeCount} 
				/>
			</div>

			
		) 
	}
}

export default CompanyTree