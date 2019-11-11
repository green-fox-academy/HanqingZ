import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Tags() {

  const tags = useSelector((state)=>state.tags);
  const dispatch = useDispatch();

  return (
    <div style={{'margin':'10px'}}>
      <h1>Tags</h1>
      {tags.map((e, i)=>
        <p key={i} style={{'color': 'white', 'backgroundColor':'rgb(100, 149, 237)', 'width':'90px', 'text-align':'center' }} > { e } </p>
      )}
    </div>
  )
}