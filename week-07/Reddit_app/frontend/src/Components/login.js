import React from 'react';
import { useHistory } from 'react-router-dom';


export default function Login({ userInfo, setUserInfo }) {

  let username = '';
  let password = '';
  let history = useHistory();

  function handleSubmit(username, password) {
    console.log(`username: ${username}`);
    fetch('http://localhost:8080/user/login', {
        method: "POST",
        body: JSON.stringify({ "username": `${username}`, "password": `${password}` }),
        headers: {
          'Accept': 'application/json', 
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        //console.log(response.status);
        if(response.status === 200){
          console.log(response);
          return response.json();
        }
      })
      .then(response => {
          alert(`${response.message}`);
          setUserInfo( {"userID": response.userID ,"username": response.username} );
          return history.push("/");
      })
      .catch(err => err);
  }

  return (
    <main>
      <h1>Please Login</h1>
      <p>username</p>
      <input name="text" type="text" onChange={(e)=> username = e.target.value}></input>
      <p>password</p>
      <input name="password" type="password" onChange={(e)=> password = e.target.value} />
      <p><button onClick={() => handleSubmit(username,password)}>Login</button></p>
    </main>
  )
}