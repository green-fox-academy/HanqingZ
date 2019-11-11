import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function ComplexCounter() {
  const tags = useSelector((state)=>state.tags);
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div style={{ 'margin':'10px' }}>
      <h1>Complex Counter</h1>
      <p>{tags.length+count}</p>
    </div>
  )
}