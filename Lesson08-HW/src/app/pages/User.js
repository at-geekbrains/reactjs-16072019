import React, {useState, useEffect} from 'react';
import axios from 'axios';
import UserProfile from '../components/User';

const User = props => {
  const [stateUser, setStateUser] = useState({user: null});
  
  useEffect(() => {
    axios.get('http://jsonplaceholder.typicode.com/users/' + props.match.params.userId)
    .then(response => {setStateUser({user: response.data})})
  });

  return(
    <>
      {stateUser.user && <UserProfile {...stateUser.user}/>}
    </>
  );
}

export default User;