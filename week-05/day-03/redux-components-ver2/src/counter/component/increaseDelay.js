import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseByValueDelay } from '../actions';

let tempNumber = 0;
let delayTime = 0;

export default function IncreasementDelay () {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();


  return (
    <div style={{'margin':'10px'}}>
      <h1>The Increaser Delay</h1>
      <p> { count }</p>
      <div>
        <input onChange={(event)=>tempNumber = parseInt(event.target.value)} placeholder="number" />
        <input onChange={(event)=>delayTime = parseInt(event.target.value)} placeholder="time (in ms)" />
        <button onClick={()=>dispatch(increaseByValueDelay(tempNumber, delayTime))}>Increase</button>
      </div>
    </div>
  )
}