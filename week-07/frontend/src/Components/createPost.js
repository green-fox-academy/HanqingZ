import React from 'react';
import { useHistory } from 'react-router-dom';



export default function CreatePost({ setStateServer }) {
  
  let ptitle = '';
  let purl = '';
  let history = useHistory();

  function create(title, url) {
    
    console.log(title);
    if(title.length > 5){
      fetch('http://localhost:8080/posts/', {
        method: "POST",
        body: JSON.stringify({"title": `${title}`, "url": `${url}`}),
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
      .catch(err => err);
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