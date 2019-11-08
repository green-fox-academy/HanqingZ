import React from 'react';

const sectionStyle = {
  'position': 'relative'
}

const imgStyle = {
  'display': 'block',
  'max-width': '656px',
  'max-height': '368px',
  'width': 'auto',
  'height': 'auto'
}

const pStyle = {
  'position':'absolute',
  'width': '629.4px',
  'height': '100px',
  'background-color': 'rgba(0,0,0,0.7)',
  'font':'left',
  'bottom': '0',
  'margin': '0',
  'text-align': 'left',
  'padding-left': '20px'
}

export default function MainView({ images, index = 0 }) {

  const imageList = images.image[index];

  return (
    <section style = {sectionStyle}>
      <img src= {imageList.url} alt={imageList.name} style={imgStyle} />
      <p style={pStyle} >{imageList.name}</p> 
    </section>
  )
}