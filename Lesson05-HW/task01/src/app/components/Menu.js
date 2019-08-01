import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Menu extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            {this.props.brand}
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              {this.props.children}
            </ul>
          </div>
        </div>
      </nav>
      </div>
    )
  }
}
