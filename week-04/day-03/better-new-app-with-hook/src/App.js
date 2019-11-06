import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  var word = '';
  const [countryName, setCountryName] = useState('china');
  const [articles, setArticles] = useState([]);
  const newapi_key = 'f5bdda68a887445bb4d26831177a0efc';
  const newapi_url = `https://newsapi.org/v2/top-headlines?q=${countryName}&apiKey=${newapi_key}`;

  let startup = () => {
    fetch(newapi_url)
    .then(response => response.json())
    .then(data =>{
      console.log(data.articles);
      {setArticles(data.articles)
      }
    })
  }

  useEffect(()=> {
    if (countryName !== '' ) {
      startup();
    }
  }, [countryName])

  return (
    <div className="App">
      <header>
        <input type="text" className="input-text" onChange={event => word = event.target.value} />
        <button className="button-text" onClick={() => setCountryName(word)}> Add </button>
      </header>
      <main>
        <ul>
          {articles.map((e,i) => (
            <li key={i}> {e.title} </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
