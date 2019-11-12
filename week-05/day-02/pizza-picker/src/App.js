import React, { useState } from 'react';
import useForm from 'react-hook-form';
import './App.css';


function App() {

  const [ pizzaInfo, setPizzaInfo ] = useState({});
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = values => {
    console.log(values);
    setPizzaInfo(
      {
      ...pizzaInfo,
      base: values.Base,
      chicken: values.Chicken,
      pineapple: values.Pineapple,
      mushroom: values.Mushroom,
      cutted: values.Cutted,
      comment: values.comment
    });
    
    //console.log(pizzaInfo);
  }

  return (
    <div className="App">
      <main className="App-header">
        <h1>Pizza Picker</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <h3>Base</h3>
            <select name="Base" ref={register({ required: true })}>
              <option value="whiteCream">white cream</option>
              <option value="ketch-up">ketch-up</option>
              <option value="mustard">mustard</option>
            </select>
          </label>
          <label>
            <h3>Toppings</h3>
            <p><input type="checkbox" 
                  name="Pineapple" 
                  ref={register({})} 
            />Pineapple</p>
            <p><input type="checkbox" 
                  name="Chicken" 
                  ref={register({})} 
            />Chicken</p>
            <p><input type="checkbox" 
                  name="Mushroom" 
                  ref={register({})} 
            />Mushroom</p>
          </label>
          <label>
            <h3>Cutted</h3>
            <p><input name="Cutted" type="radio" value="Yes" ref={register({ required: true })}/>Yes</p>
            <p><input name="Cutted" type="radio" value="No" ref={register({ required: true })}/>No</p>
          </label>
          <label>
          <p><textarea name="comment" placeholder="Any additional comment" ref={register} /></p>
          </label>
          <button>Submit</button>
        </form>
        
      </main>
    </div>
  );
}

export default App;