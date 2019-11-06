import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      article: [],
      load: false,
    }
  }

  componentDidMount(){
    const newapi_key = 'f5bdda68a887445bb4d26831177a0efc';
    const delayTime = 3000;
    const newapi_url = `https://newsapi.org/v2/top-headlines?q=china&apiKey=${newapi_key}`;
    const delay_url =  `http://slowwy.greenfox.academy/delay/${delayTime}/url/${newapi_url}`;

    fetch(delay_url)
      .then(response => response.json())
      .then(data =>{
        console.log(data);
        {this.setState({
          article: [...data.articles],
          load: true
        })}
      })
  }


  render(){
    return (
      <div className="App">
          <ul>
            {this.state.load?
              (this.state.article.map(e => (
                <li key={e.title}> {e.title} </li>
              ))):(
                <div className="lds-heart"><div> </div></div>
              )
            }
          </ul>
      </div>
    );
  }
}

export default App;
