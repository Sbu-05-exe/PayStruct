import {useEffect, useRef} from 'react';
import * as d3 from 'd3';


const CompanyTree = () => {
	const canvas = useRef();

	const drawBarChart = data => {

		console.log("drawing the chart once")
		const svgCanvas = d3.select(canvas);

		



	}

	useEffect(() => {
		const data = [2,4,2,6,8];
		drawBarChart(data);
	}, [])

	return (
		<canvas ref={canvas}></canvas>
	) 
}

export default CompanyTree