import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove_all_tag } from '../actions';

export default function Remove_All_Tag() {

  const tags = useSelector((state)=>state.tags);
  const dispatch = useDispatch();

  return (
    <div style={{'margin':'10px'}}>
      <h1>Remove All Tag</h1>
      <button onClick={()=>dispatch(remove_all_tag())}>Remove all tags</button>
    </div>
  )
}