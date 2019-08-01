import React from 'react';
import { Route, Router,Redirect } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Layout from './app/layouts/Layout';
//import PageNotFound from './app/pages/PageNotFound';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const customHistory = createBrowserHistory();

export default () => (
	<Router history={customHistory}>
		<Route path="/" component={Layout}/>		
		<Redirect from='*' to='/' />
	</Router>
);
