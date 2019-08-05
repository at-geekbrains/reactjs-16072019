import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';
import Main from '../pages/Main';
import Users from '../pages/Users';
//import User from '../pages/User';
import User from '../components/User';


export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.brand = "React blog!";
  }

  isActive(href) {
    return window.location.pathname === href;
  }

  render() {
    return (
      <div>
        <Menu brand={this.brand}>
          <MenuItem href="/" active={this.isActive('/')}>          
            Главная
          </MenuItem>
          <MenuItem href="/users" active={this.isActive('/users')}>
            Пользователи
          </MenuItem>
        </Menu>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Switch>                        
                <Route exact path="/"component={Main}/>              
                <Route exact path="/users"component={Users}/>
                <Route path="/users/:userId" component={User}/>
              </Switch>     
            </div>
          </div>
        </div>
        <footer className="card-footer text-center">
          &copy; 2019
        </footer>
      </div>
    );
  }
}