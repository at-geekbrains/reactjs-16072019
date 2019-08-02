import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import UsersList from '../components/UsersList';
import User from '../pages/User';
//<Route path=":userId" component={User} />
export default class Users extends Component {
  
  render() {
    return (
      <div>        
        {                    
          (!this.props.children) ?(<UsersList />):(<User {... this.props.params}/>)
        }
      </div>
    );
  }
}
