import React from 'react';

const imgStyle = {
  'margin': '10px',
  'width': '50px',
  'height': '50px'
}

const thumbnailStyle = {
  'display': 'flex',
  'flex-direction': 'row'
}

export default function Thumbnail({ images, index, setIndex }) {
  
  const imageList = images.image;

  return(
    <div className="thumbnail" style={thumbnailStyle} >
      {imageList.map((e, i) => 
        <img key={e.name} src= {e.url} style={imgStyle} alt={e.name} onClick={()=>setIndex(i)}/>
      )}
    </div>
  )
}