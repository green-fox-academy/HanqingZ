import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCounter } from '../actions';

export default function Decreasement() {
  let tempNumber = 0;
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return(
    <div style={{'margin':'10px'}}>
      <h1>The Setter</h1>
      <div>
        <input onChange={(event)=>tempNumber = event.target.value} />
      </div>
      <button onClick={()=>dispatch(setCounter(tempNumber))}>Set</button>
    </div>
  )
}