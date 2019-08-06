import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './User';
import { getUsers } from '../store/users/usersActions';

class UsersList extends Component {
  render() {
    if (!this.props.users) {
      return null;
    }

    return (
      <div>
        <h1>Пользователи</h1>
        { this.props.users.map(user => { return <User key={user.id} {...user} /> }) }
      </div>
    )
  }

  componentDidMount() {
    this.props.getUsers()
  }
}
function mapStateToProps(state) {
  return {
    users: state.usersState.users // смотри rootReducer.js

  }
}

function mapDispatchToProps(dispatch){
  return {
    getUsers: () => dispatch(getUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)