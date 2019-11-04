import React from 'react';
//import { filters, hotels } from './hotel-list';

export default class Property extends React.Component {
  constructor(props){
    super(props);
    this.state={
      filter: props.filter['Property type']
    }
    //let filter = props.filter['Property type'];
  }

  handleClick(event) {
    //if()
  }

  render(){
    return(
      <div style={{ 'border': '1px solid black', 'display':'flex', 'flex-direction': 'column', 'padding':'10px' }}>
        <h3>Property type</h3>
        {this.state.filter.map((element, index) => 
          <label>
            <input type="checkbox" key={element.name} value={element.checked} onChange={(e) => this.handleClick.bind(e)}/>{element.name}
          </label>
        )}
        
      </div>
    )
  }
  
}