import React from 'react';
import { useHistory } from 'react-router-dom';


export default function CreatePost({ userInfo, setStateServer }) {
 
  let ptitle = '';
  let purl = '';
  let history = useHistory();

  console.log("username is "+ userInfo.userID);
  
  function create(title, url) {
    
    console.log(title);
    if(title.length > 5){
      fetch('http://localhost:8080/posts/', {
        method: "POST",
        body: JSON.stringify({"title": `${title}`, "url": `${url}`, "uid":`${userInfo.userID}`}),
        headers: {
          'Accept': 'application/json', 
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        console.log(response.status);
        if(response.status == 201){
          return history.push("/");
        }
      })
      .catch(err => console.log(err));
    }
  }

  return (
    <main>
      <p><span style={{"color":"red"}}>*</span><span>title</span></p>
      <input onChange={ e => ptitle = e.target.value} />
      <p>URL</p>
      <input onChange={ e => purl = e.target.value} />
      <p><button onClick={() => create(ptitle, purl)}>SUBMIT</button></p>
    </main>
  )
}