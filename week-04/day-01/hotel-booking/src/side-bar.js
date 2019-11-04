import React from 'react';
import Selecting from './selecting';
import data from './hotel-list';
import Property from './properties';

export default function Sidebar() {
  const sidebarStyle = {
    'display': 'flex',
    'flex-direction': 'column',
    'margin': '10px'
  }

  return (
    <>
      <div style={sidebarStyle}>
        <Selecting filter = {data.filters} ></Selecting>
        <Property filter = {data.filters} ></Property>
      </div>
    </>
  );
}