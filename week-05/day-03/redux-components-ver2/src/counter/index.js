import React from 'react';
//import { createStore } from 'redux';
//import { useSelector, useDispatch } from 'react-redux';
//import { setCounter, increaseByValue, decreaseByValue, resetCounter } from './actions';
import Increasement from './component/increasement';
import Decreasement from './component/decreasement';
import Set from './component/set';
import Reset from './component/reset';
import IncreasementDelay from './component/increaseDelay';


export default function Counter() {
  // const count = useSelector((state) => state.counter);
  // const dispatch = useDispatch();

  return (
    <div style={{'display':'flex', 'flex-direction':'row' }}>
      <Increasement />
      <Decreasement />
      <Reset />
      <Set />
      <IncreasementDelay />
    </div>
  )
}


{/* <div>
      <p style = {{'color': 'white'}}> count: { count }</p>
      <div>
        <input onChange = {(event)=> tempNumber = parseInt(event.target.value)} ></input>
        <button onClick={()=>dispatch(setCounter(tempNumber))}>Set</button>
        <button onClick={()=>dispatch(increaseByValue(tempNumber))}>Increase</button>
        <button onClick={()=>dispatch(decreaseByValue(tempNumber))}>Decrease</button>
        <button onClick={()=>dispatch(resetCounter())}>Reset</button>
      </div>
    </div> */}