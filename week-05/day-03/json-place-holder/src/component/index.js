import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetching } from './actionCreator';


export default () => {

  const dataList = useSelector((state) => state.dataList);
  const message = useSelector((state) => state.message);
  const dispatch = useDispatch();
  

  return (
    <main>
      <button onClick={() => dispatch(fetching())} > Click </button>
      {dataList.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
          <hr />
        </div>
      ))}
    </main>
  )
}