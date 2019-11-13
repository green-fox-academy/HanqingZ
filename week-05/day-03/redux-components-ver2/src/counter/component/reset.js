import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetCounter } from '../actions';

export default function Decreasement() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return(
    <div style={{'margin':'10px'}}>
      <h1>The Resetter</h1>
      <div>
        <button onClick={()=>dispatch(resetCounter())}>Reset</button>
      </div>
    </div>
  )
}