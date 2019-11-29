import React from 'react';
import { Link } from 'react-router-dom';
import Upvote from './arrows/upvote.png';
import Upvoted from './arrows/upvoted.png';
import Downvote from './arrows/downvote.png';
import Downvoted from './arrows/downvoted.png';

const spanStyle = {
  "display" : "flex", 
  "flexDirection" : "row", 
  "justifyContent": "center", 
  "margin": "20px",
  "weight": "20px"
}

let upFlag = false;
let downFlag = false;

export default function Posts({ element, putPosts }) {
  
  function getTime(time) {
    let timeDiff = Math.floor((Date.now() - time)/ 1000);

    if(Math.floor(timeDiff / (365 * 24 * 60 * 60)) > 1){
      return `${Math.floor(timeDiff / (365 * 24 * 60 * 60))} years`;
    }
    else if(Math.floor(timeDiff / (365 * 24 * 60 * 60)) === 1) {
      return `1 year`;
    }
    else if(Math.floor(timeDiff / (30 * 24 * 60 * 60)) > 1){
      return `${Math.floor(timeDiff / (30 * 24 * 60 * 60))} months`;
    }
    else if(Math.floor(timeDiff / (30 * 24 * 60 * 60)) === 1){
      return `1 month`;
    }
    else if(Math.floor(timeDiff / (24 * 60 * 60)) > 1){
      return `${Math.floor(timeDiff / (24 * 60 * 60))} hours`;
    }
    else if(Math.floor(timeDiff / (24 * 60 * 60)) === 1){
      return `1 hour`;
    }
    else if(Math.floor(timeDiff / (60 * 60)) > 1){
      return `${Math.floor(timeDiff / (60 * 60))} minutes`;
    }
    else if(Math.floor(timeDiff / (60 * 60)) === 1){
      return `1 minute`;
    }
    else {
      return "few seconds ago";
    }
  }

  function getScore(score) {
    if(score / 1000000 >= 1){
      return `${Math.floor(score/1000000)}M`;
    }
    else if(score / 1000 >= 1){
      return `${Math.floor(score/1000)}K`;
    }
    else {
      return score;
    }
  }

  function voteAction(id, actions) {
    if(actions === 'upvote' ){
      if(!upFlag){
        console.log(`${id} -> ${actions}`);
        putPosts(id, actions);
        upFlag = true;
      }
      else if(upFlag){
        console.log(`${id} -> ${actions}`);
        putPosts(id, 'downvote');
        upFlag = false;
      }
    }
    else if(actions === 'downvote' ){
      if(!downFlag){
        console.log(`${id} -> ${actions}`);
        putPosts(id, actions);
        downFlag = true;
      }
      else if(downFlag){
        console.log(`${id} -> ${actions}`);
        putPosts(id, 'upvote');
        downFlag = false;
      }
    }
  }

  return (
    <span key={element.pid} style={spanStyle} >
      <div style={{"margin": "0 30px"}}>
        <img src={upFlag ? Upvoted : Upvote} onClick={() => {voteAction(element.pid, 'upvote')}}/>
        <p>{getScore(element.score)}</p>
        <img src={downFlag ? Downvoted : Downvote} onClick={() => {voteAction(element.pid, 'downvote')}}/>
      </div>
      <div style={{"textAlign": "left", "fontSize": "10pt"}}>
        { element.url !== "" 
          ? <h3 style={{"marginBottom":"5px", "fontSize":"18pt"}}><a href={element.url}>{element.title}</a></h3>
          : <h3 style={{"marginBottom":"5px", "fontSize":"18pt"}}>{element.title}</h3>
        }
        <p>submitted {getTime(element.timestamp)} ago by {element.username}</p>
        <p><Link to={`comments/${element.pid}`} >{element.comments} comments</Link>  share  save  hide  report  crosspost  pocket</p>
      </div>
    </span>
  )
}