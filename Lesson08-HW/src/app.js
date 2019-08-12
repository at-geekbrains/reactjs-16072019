import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import {Route, Switch, BrowserRouter} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "./app/layouts/layout";


import store from './store';


ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Route path="/" component={Layout}/>
		</BrowserRouter>
	</Provider>, document.getElementById("root"));


	// <Layout>
	// 	<About/>
	// </Layout>