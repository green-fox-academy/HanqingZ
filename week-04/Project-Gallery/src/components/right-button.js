import React from 'react';
import arrow from './arrow.svg';

const styles = {
  'height':'368px',
  'width': '50px'
  
}

export default function RightButton({index, setIndex}) {
  
  return (
    <div>
      <button style={styles} onClick={()=>setIndex(index)} >
        <img src={arrow} alt={arrow} style={{ 'transform':'rotate(180deg)' }}/>
      </button>
    </div>
  )
}