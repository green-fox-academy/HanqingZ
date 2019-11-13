import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseByValue } from '../actions';

export default function Increasement() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return(
    <div style={{'margin':'10px'}}>
      <h1>The Increaser</h1>
      <p> { count }</p>
      <div>
        <button onClick={()=>dispatch(increaseByValue(1))}>Increase</button>
      </div>
    </div>
  )
}
