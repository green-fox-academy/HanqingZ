import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove_tag } from '../actions';

const TagStyle = {
  'color': 'white', 
  'backgroundColor':'rgb(220, 20, 60)', 
  'width':'90px', 
  'text-align':'center'
}

export default function Remove_Tag() {

  const tags = useSelector((state)=>state.tags);
  const dispatch = useDispatch();

  return (
    <div style={{'margin':'10px'}}>
      <h1>Tags</h1>
      {tags.map((e, i)=>
        <p key={i} style={TagStyle} onClick={()=>{dispatch(remove_tag(e))}} > { e } </p>
      )}
    </div>
  )
}