import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from './Components';
import CreatePost from './Components/needUserLogin/createPost';
import ModifyPost from './Components/needUserLogin/modifyPost';
import Login from './Components/login';
import Comment from './Components/comments';

export default function App() {

  const [userInfo, setUserInfo] = useState({"userID": 0 ,"username": ""});
  console.log(userInfo);

  //let { pid } = useParams();

  return (
    <div className="App">
      <div className="userbar">
        <p className="username">{ userInfo.username == "" ? "Guest" : userInfo.username.toUpperCase() }</p>
      </div>
      <header className="App-header">
        <h1>SPACE</h1>
      </header>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <Welcome userInfo={userInfo} />} />
            <Route path="/comments/:id" render={({match}) => <Comment pid={match.params.id}/>} />
            <Route path="/login" render={() => <Login userInfo={userInfo} setUserInfo={setUserInfo}/>} />
            <Route path="/newPost" render={() => <CreatePost userInfo={userInfo} />} />
            <Route path="/modifyPost/:id" render={({match}) => <ModifyPost userInfo={userInfo} pid={match.params.id} />} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}
