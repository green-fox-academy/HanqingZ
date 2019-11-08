import React from 'react';
import arrow from './arrow.svg';

const styles = {
  'height':'368px',
  'width': '50px'
}

export default function LeftButton({ index, setIndex }) {

  return (
    <div>
      <button style={styles} onClick={()=>setIndex(index)} >
        <img src={arrow} alt={arrow} />
      </button>
    </div>
  )

}
