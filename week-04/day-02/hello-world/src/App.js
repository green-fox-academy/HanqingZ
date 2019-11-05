import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';


class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 'home',
    };
  }

  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/error" component={Errors} />
          <Route path="/error/:errorcode" component={ErrorCode} />
          <Route render={() => <h1>This page is not implemented yet</h1>} />
        </Switch>
      </BrowserRouter>
    );
  }

}
const Home = () => <h1>Hello World!</h1>;
const Errors = () => <h1>Something bad happened.</h1>;
const ErrorCode = ({ match }) => <h1>Error: {match.params.errorcode}</h1>;


export default App;
