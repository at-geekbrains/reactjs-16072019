import React, {useState, useEffect} from 'react';
import axios from 'axios';
import User from './User';

const UsersList = (props) => {
  const [stateUsers, setStateUsers] = useState({users: []});

  useEffect(() => {    
    axios.get('http://jsonplaceholder.typicode.com/users/')
    .then(response => {
      setStateUsers({users: response.data})
    });
  });

  if (!stateUsers.users.length) {
      return null;
  }
  const users = stateUsers.users.map((user, index) => <User key={index} {...user}/>);
  return (
    <>
      <h1>Пользователи</h1>
      {users}
    </>
  );
}

export default UsersList;