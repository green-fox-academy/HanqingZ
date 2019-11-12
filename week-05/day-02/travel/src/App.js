import React from 'react';
import useForm from 'react-hook-form';
import './App.css';

function App() {

  //const [ clientInfo, setClientInfo ] = useState([]);
  const { handleSubmit, register } = useForm();

  const onSubmit = values => {
    let dietary = [
      values.vegetarian? 'Vegetarian': null,
      values.kosher? 'Kosher': null,
      values.lactoseFree? 'Lactose Free': null
    ]
    alert(`
      First Name: ${values.firstName}
      Last Name: ${values.lastName}
      Age: ${values.age}
      Gender: ${values.gender}
      Location: ${values.location}
      Dietary restrictions: ${dietary.join('  ')}`
    )
  };

  return (
    <div className="App">
      <main>
        <form onSubmit={handleSubmit(onSubmit)} >
          <p>First Name: <input name="firstName" 
                type="text" 
                placeholder="First Name" 
                ref={register({required: 'Required' })} 
          /></p>
          <p>Last Name: <input name="lastName" 
                type="text" 
                placeholder="Last Name" 
                ref={register({required: 'Required' })}
          /></p>
          <p>Age: <input name="age" 
                type="number" 
                ref={register({required: 'Required' })} 
          /></p>
          <p>Gender: </p>
          <p><input name="gender" type="radio" value="Male" ref={register({ required: true })}/>Male</p>
          <p><input name="gender" type="radio" value="Female" ref={register({ required: true })}/>Female</p>
          <p>Destination: </p>
          <select name="location" ref={register({ required: true })}>
            <option value="Shanghai">Shanghai</option>
            <option value="Beijing">Beijing</option>
            <option value="Shenzhen">Shenzhen</option>
          </select>
          <label>
            <p>Dietary Restrictions: </p>
            <p><input type="checkbox" 
                    name="vegetarian" 
                    ref={register} 
              />Vegetarian</p>
              <p><input type="checkbox" 
                    name="kosher" 
                    ref={register} 
              />Kosher</p>
              <p><input type="checkbox" 
                    name="lactoseFree" 
                    ref={register} 
              />Lactose Free</p>
            </label>
          <button>Submit</button>
        </form>
      </main>
    </div>
  );
}

export default App;
