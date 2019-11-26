import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from './Components';
// import Posts from './Components/posts';
// import Sidebars from './Components/sidebar';
import CreatePost from './Components/createPost';

export default function App() {

  // const [dataList, setDataList] = useState([]);
  // const [serverStatus, setServerStatus] = useState(0);
  // //const url = `http://localhost:8080/posts`;

  // function getPosts() {
  //   fetch('http://localhost:8080/posts', {
  //     method: 'GET',
  //     headers: {
  //       'Accept': 'application/json', 
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(response => {
  //     console.log(response);
  //     setDataList(response);
  //   })
  //   .catch(err => err);
  // };

  // useEffect(() => {
  //   getPosts();
  // }, [serverStatus]);

  // function postPosts(title, url) {
  //   fetch('http://localhost:8080/posts', {
  //     method: "POST",
  //     body: {"title": "title", "url": "url"},
  //     headers: {
  //       'Accept': 'application/json', 
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(response => {
  //     console.log(response.status);
  //     console.log(response.body);
  //     setServerStatus(response.status);
  //     setDataList([...dataList, response.body]);
  //   })
  //   .catch(err => err);
  // }

  return (
    <div className="App">
      <header className="App-header">
        <h1>SPACE</h1>
      </header>
        <BrowserRouter>
          <Switch>
            <Route path="/newPost" component={ CreatePost } />
            <Route exact path="/" component={ Welcome }/>
          </Switch>
        </BrowserRouter>
    </div>
  );
}
