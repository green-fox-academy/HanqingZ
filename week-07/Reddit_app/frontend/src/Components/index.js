import React, { useState, useEffect } from 'react';
import Posts from './posts';
import Sidebars from './sidebar';

export default function Welcome({ userInfo }) {

  //let userInfomation = window.localStorage.getItem("user");

  const [dataList, setDataList] = useState([]);
  const [serverStatus, setServerStatus] = useState(0);
  // const url = `http://localhost:8080/posts`;

  function getPosts() {
    fetch('http://localhost:8080/posts', {
      method: 'GET',
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(response => {
      console.log(response);
      setDataList(response);
    })
    .catch(err => err);
  };

  useEffect(() => {
    getPosts();
  }, [dataList.toString() || serverStatus]);

  function putPosts(id, action) {
    console.log(id);
    console.log(action);

    fetch(`http://localhost:8080/posts/${id}/${action}`, {
      method: "PUT",
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      setServerStatus(response.status);
      console.log(response);
      response.json();
      setDataList([...dataList, response]);
    })
    .catch(err => err);
  }

  return(
    <div className="Main-component">
      <main>
        {dataList.map(element => 
          <Posts element={element} putPosts={putPosts}/>
        )}
      </main>
      <Sidebars userInfo={userInfo} setServerStatus={setServerStatus} />
    </div>
  )
}

