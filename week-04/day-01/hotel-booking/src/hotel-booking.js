import React from 'react';

import data from './hotel-list';
import Selecting from './selecting';
import Properties from './properties';


export default class HotelBooking extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      hotel: data.hotels
    };
    //this.hotel = props.hotels;
  }

  innerLayout = {
    'display': 'flex',
    'flex-direction': 'row',
    'margin':'5px'
  }

  render() {
    return(
      <>
        <main style = {{ 'width': '500px' }}>
          {this.state.hotel.map((element) => 
              <div style = {{ 'display': 'flex', 'flex-direction': 'column', 'flex-wrap': 'wrap', 'border': '1px solid black' }}>
                <h3>{element.name}</h3>
                <div style = { this.innerLayout }>
                  <img src={element.imageURL} style={ {'width': '100px', 'height': '100px'} } />
                  <div style = {{ 'display': 'flex', 'flex-direction': 'column', 'flex-wrap': 'wrap', 'padding': '5px' }}>
                    <p>{element.description}</p>
                    <button style = {{ 'width': '90px' }} >Book Now!</button>
                  </div>
                </div>
              </div>
            )
          }
        </main>
      </>
    );
  }
}