import React from 'react';
import { Route } from 'react-router-dom';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';
import Main from '../pages/Main';

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
              <Route exact path="/"component={Main}/>                                                                     
            </div>
          </div>
        </div>
        <footer className="card-footer text-light bg-dark">
          &copy; 2019
        </footer>
      </div>
    );
  }
}