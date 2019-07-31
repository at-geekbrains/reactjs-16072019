import React from 'react';
//import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Router,Redirect } from 'react-router-dom';
import { createBrowserHistory } from "history";
import 'bootstrap/dist/css/bootstrap.min.css';



import Layout from './app/layouts/Layout';
import Main from './app/pages/Main';
import Users from './app/pages/Users';
import User from './app/pages/User';
//import PageNotFound from './app/pages/PageNotFound';
import './App.css';

const customHistory = createBrowserHistory();

function App() {
  return (
	<BrowserRouter>
		<Switch>
			<Router history={customHistory}>
			<Route path="/" component={Layout}>
				<Route exact path="/"component={Main} />
				<Route path="users" component={Users}>
					<Route path=":userId" component={User} />
				</Route>
				{/* <Route path="*" component={PageNotFound} /> */}
				<Redirect from='*' to='/' />
			</Route>
			</Router>
		</Switch>	
	</BrowserRouter>
  );
}

export default App;
