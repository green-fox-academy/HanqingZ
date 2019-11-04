import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import HotelBooking from './hotel-booking';
import Sidebar from './side-bar';

const element = (
  <>
  <header><h1>Hotel List</h1></header>
  <div style={{ 'display':'flex', 'flex-direction': 'row', 'justifyContent':'center' }}>
    <Sidebar />
    <HotelBooking />
  </div>
  </>
)

ReactDOM.render(element, document.getElementById('root'));
