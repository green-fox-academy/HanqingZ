import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add_tag } from '../actions';

let selectedColor = '';

export default function Add_Tag() {

  const tags = useSelector((state)=>state.tags);
  const dispatch = useDispatch();

  return (
    <div style={{'margin':'10px'}}>
      <h1>Add Tag</h1>
      <div><input onChange = {(event)=> selectedColor = event.target.value} ></input></div>
      <button onClick={()=>dispatch(add_tag(selectedColor))}>Add</button>
    </div>
  )
}