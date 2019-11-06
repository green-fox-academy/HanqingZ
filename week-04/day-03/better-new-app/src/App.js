import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      countryWord: 'china',
      article: [],
    }
    this.item = '';
  }

  componentDidMount(){
    const newapi_key = 'f5bdda68a887445bb4d26831177a0efc';
    const newapi_url = `https://newsapi.org/v2/top-headlines?q=${this.state.countryWord}&apiKey=${newapi_key}`;

    fetch(newapi_url)
      .then(response => response.json())
      .then(data =>{
        console.log(data);
        {this.setState({
          article: [...data.articles]
        })}
      })
  }

  componentDidUpdate(prevState){
    const newapi_key = 'f5bdda68a887445bb4d26831177a0efc';
    const newapi_url = `https://newsapi.org/v2/top-headlines?q=${this.state.countryWord}&apiKey=${newapi_key}`;

    if(this.state.countryWord !== prevState.countryWord){
    fetch(newapi_url)
      .then(response => response.json())
      .then(data =>{
        console.log(data);
        {this.setState({
          article: [...data.articles]
        })}
      })
    }
  }

  render(){
    return (
      <div className="App">
        <header>
          <input type="text" className="input-text" onChange={event => this.item = event.target.value} />
          <button className="button-text" onClick={() => this.setState({countryWord: this.item})}> Add </button>
        </header>
        <main>
          <ul>
            {this.state.article.map(e => (
              <li key={e.title}> {e.title} </li>
            ))}
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
