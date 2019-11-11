import React from 'react';
//import { createStore } from 'redux';
import { connect } from 'react-redux';
import { setCounter, increaseByValue, decreaseByValue, resetCounter } from './actions';



let tempNumber = 0;

function Counter({ count, set, increase, decrease, resets }) {
  return (
    <div>
      <p style = {{'color': 'white'}}> count: { count }</p>
      <div>
        <input onChange = {(event)=> tempNumber = parseInt(event.target.value)} ></input>
        <button onClick={()=>set(tempNumber)}>Set</button>
        <button onClick={()=>increase(tempNumber)}>Increase</button>
        <button onClick={()=>decrease(tempNumber)}>Decrease</button>
        <button onClick={()=>resets()}>Reset</button>
      </div>
    </div>
  )
}

function mapStateToProps(state){
  return {
    count: state.counter
  }
}

function mapDispathToProps(dispatch){
  return{
    set: (value) => { dispatch(setCounter(value)) },
    increase: (value = 1) => { dispatch(increaseByValue(value)); },
    decrease: (value = 1) => { dispatch(decreaseByValue(value)) },
    resets: () => { dispatch(resetCounter()) }
  };
}

export default connect(mapStateToProps, mapDispathToProps)(Counter);
