// Include the React library
import React from "react";

// Include the react-router module
import { Route, IndexRoute, Router, browserHistory } from "react-router";
import { Switch } from 'react-router-dom';


// Reference the high-level components
import Outline from "../components/Outline";
import Chart from '../components/children/Chart';

// Export the Routes
const routes = (

// The high level component is the Router component
	<Router history={browserHistory}>
    	<Route path="/" component={Outline}>
    		<Switch>
	        	<Route path="Chart/" component={Chart}/>
        	</Switch>
    	</Route>
	</Router>
);

export default routes;