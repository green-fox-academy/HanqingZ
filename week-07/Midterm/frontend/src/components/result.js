import React, { useState, useEffect } from 'react';

export default function Result({ poll, setPoll, serverStatus, setServerStatus }) {

  return (
    <div>
      <h1 style={{"margin": "0"}}>{ poll[0].title }</h1>
      <hr style={{"color": "rgb(46, 139, 87)", "width":"90vw"}}/>
      {poll.map(element => 
        <ul>
          <li>{element.name}</li>
          <li>{element.votes}</li>
        </ul>
      )}
    </div>
  )
}