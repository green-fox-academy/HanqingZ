import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const innerStyle = {
  "display": "flex",
  "flexDirection": "row",
  "justifyContent": "space-between",
  "width": "50vw"
}

export default function Voting({ poll, setPoll, serverStatus, setServerStatus }) {
  //console.log(poll[0]);
  const [choice, setChoice] = useState(0);
  const [choiceName, setChoiceName] = useState('');
  let history = useHistory();

  useEffect(() => {
    getName();
  }, [choice]);

  function handleSubmit(choice) {
    console.log(choice);
    fetch(`http://localhost:8080/api/vote/${choice}`, {
      method: "POST",
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log(response.status);
      if(response.status == 201){
        return history.push("/result");
      }
    })
    .catch(err => err);
  }

  function handleChange(event) {
    setChoice(event.target.value);
  }

  function getName() {
    poll.map(element => {
      //console.log(choice);
      if (element.vid == choice){
        return setChoiceName(element.name);
      }
    })
  }

  return(
    <div>
      <h1 style={{"margin": "0"}}>{ poll[0].title }</h1>
      <hr style={{"color": "rgb(46, 139, 87)", "width":"90vw"}}/>
      <form>
        {poll.map(element => 
          <div key={element.vid} className="radio">
            <label>
              <input 
                type="radio" 
                value={element.vid} 
                onChange={(event) => handleChange(event)} 
                checked={choice == element.vid}/> {element.name}
            </label>
          </div>
        )}          
      </form>
      <div style={{"textAlign": "center"}}> { 
        choice === 0
        ? <p> No option selected </p>
        : <p style={innerStyle}> Selected option: {choiceName} <button onClick={() => handleSubmit(choice)}> Vote </button></p>
      }</div>
    </div>
  )
}