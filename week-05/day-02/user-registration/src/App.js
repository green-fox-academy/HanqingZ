import React, { useState } from 'react';
import './App.css';
import useForm from 'react-hook-form';

function App() {

  const { handleSubmit, register, errors } = useForm();
  const [ userInfo, setUserInfo ] = useState([]);


  const onSubmit = values => {
    console.log(values);
    setUserInfo([...userInfo, { userName: values.userName, email: values.email, password: values.password }]);
  };

  // function handleChange(event){
  //   setUserInfo([ ...userInfo, {userName: username, email: email, password: password }])
  //   event.preventDefault()
  // }

  return (
    <main className="App" >
      <form onSubmit={handleSubmit(onSubmit)} >
        <input name="userName" 
               type="text" 
               placeholder="User Name" 
               ref={register({required: 'Required' })} 
               //onChange={(event)=>{setUserName(event.target.value)}}
        />
        <input name="email" 
               type="email" 
               placeholder="Email" 
               ref={register({
                required: 'Required',
                pattern:{
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "invalid email address"
                }
               })} 
               //onChange={(event)=>{setEmail(event.target.value)}}
        />{errors.email && errors.email.message}
        <input name="password" 
               type="password" 
               ref={register({required: 'Required', minLength: 8 })} 
               //onChange={(event)=>{setPassword(event.target.value)}}
        />
        <button>Submit</button>
      </form>
      <div>
        <ul>
          {userInfo.map((e, i)=>
            <li key={i}> {e.userName}  {e.email} </li>
          )}
        </ul>
      </div>
    </main>
  );
}

export default App;
