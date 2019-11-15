import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetching } from './actionCreator';

let texts = '';

export default function Chat() {

  const dataList = useSelector((state) => state.dataList);
  const statusMessage = useSelector((state) => state.message)
  const dispatch = useDispatch();

  return (
    <main>
      <p>{statusMessage}</p>
      <button onClick={() => dispatch(fetching())}> Click </button>
        {dataList.map((e,i)=> (
        <ul style={e.style} key={i}>
          <li>{e.user}  {e.createdAt}</li>
          <li>{e.text}</li>
        </ul>
        ))}
      
    </main>
  )
}