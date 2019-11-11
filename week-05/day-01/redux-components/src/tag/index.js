import React from 'react';
import Tags from './component/tags';
import Add_Tags from './component/addTag';
import Remove_Tag from './component/removeTag';
import Remove_All_Tag from './component/removeAll';
import ComplexCounter from './component/complexCounter';

export default function Tag() {

  return (
    <div style={{'display':'flex', 'flex-direction':'row' }}>
      <Tags />
      <Add_Tags />
      <ComplexCounter />
      <Remove_Tag />
      <Remove_All_Tag />
    </div>
  )
}
