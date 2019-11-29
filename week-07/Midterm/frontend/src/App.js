import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Voting from './components/voting';
import Result from './components/result';

function App() {

  const [poll, setPoll] = useState([{"title": "title"}]);
  const [serverStatus, setServerStatus] = useState(0);
  let qid = 1;

  function getVote() {
    let http = `http://localhost:8080/api/poll`;
    if(parseInt(qid) > 1){
      http = `http://localhost:8080/api/poll/${qid}`;
    }

    fetch(http)
    .then(response => {
      setServerStatus(response.status);
      return response.json();
    })
    .then(response => {
      console.log(response);
      return setPoll(response);
      //console.log(poll);
    })
    .catch(err => err);
  }

  useEffect(() => {
    getVote();
  }, [poll.toString() || serverStatus]);
  
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() =>  <a href='./voting'>start</a> } />
            <Route path="/voting" render={() => <Voting poll={poll} setPoll={setPoll} setServerStatus={setServerStatus} serverStatus={serverStatus}/>} />
            <Route path="/result" render={() => <Result poll={poll} />} />
            {/* <Route path="/comments/:id" render={({match}) => <Comment pid={match.params.id}/>} />
            <Route path="/newPost" render={() => <CreatePost userInfo={userInfo} />} />
            <Route path="/modifyPost/:id" render={({match}) => <ModifyPost userInfo={userInfo} pid={match.params.id} />} /> */}
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
