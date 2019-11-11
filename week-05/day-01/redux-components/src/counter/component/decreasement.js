import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decreaseByValue } from '../actions';

export default function Decreasement() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return(
    <div style={{'margin':'10px'}}>
      <h1>The Decreaser</h1>
      <p> { count }</p>
      <div>
        <button onClick={()=>dispatch(decreaseByValue(1))}>Decrease</button>
      </div>
    </div>
  )
}