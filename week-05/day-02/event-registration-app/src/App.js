import React, { useState } from 'react';
import './App.css';

function App() {

  //const { register, errors } = useForm();
  const [ userInfo, setUserInfo ] = useState([]);
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ email, setEmail ] = useState('');

  function handleChange(event){
    setUserInfo([ ...userInfo, {firstName: firstName, lastName: lastName, email: email }])
    event.preventDefault()
  }

  return (
    <main className="App">
      <form onSubmit={handleChange}>
        <input name="firstName" type="text" placeholder="First Name" onChange={(event)=>{setFirstName(event.target.value)}} />
        <input name="lastName" type="text" placeholder="Last Name" onChange={(event)=>{setLastName(event.target.value)}} />
        <input name="email" 
               type="email" 
               placeholder="Email" 
               onChange={(event)=>{setEmail(event.target.value)}}
        />
        <button>Submit</button>
      </form>
      <div>
        <ul>
          {userInfo.map((e, i)=>
            <li key={i}> {e.firstName}  {e.lastName}  {e.email} </li>
          )}
        </ul>
      </div>
    </main>
  );
}

export default App;
