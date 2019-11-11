import React from 'react';
import { connect } from 'react-redux';
import { add_tag, remove_tag, remove_all_tag } from './actions';

let selectedColor = '';

function Counter({ tags, add, remove, removeAll }) {
  return (
    <div>
      {tags.map((e, i)=>
        <p key = {i} style = {{'color': 'white'}}> {e} </p>
      )}
      <div>
        <input onChange = {(event)=> selectedColor = event.target.value} ></input>
        <button onClick={()=>add(selectedColor)}>ADD</button>
        <button onClick={()=>remove(selectedColor)}>REMOVE</button>
        <button onClick={()=>removeAll()}>CLEAN</button>
      </div>
    </div>
  )
}

function mapStateToProps(state){
  return {
    tags: state.tags
  }
}

function mapDispathToProps(dispatch){
  return{
    add: (value) => { dispatch(add_tag(value)); },
    remove: (value) => { dispatch(remove_tag(value)) },
    removeAll: () => { dispatch(remove_all_tag()) }
  };
}

export default connect(mapStateToProps, mapDispathToProps)(Counter);
