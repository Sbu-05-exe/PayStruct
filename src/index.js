import ReactDOM from 'react-dom/client';
import {StrictMode} from "react";

import App from './components/App.js';


const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(
	<StrictMode>
		<App/>
	</StrictMode>
)