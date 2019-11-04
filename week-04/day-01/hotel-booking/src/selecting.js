import React from 'react';
//import data from './hotel-list';

export default class Selecting extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      filter: props.filter['Star rating']
    }
  }

  handleClick(event) {
    this.setState();
  }

  render(){
    return(
      <div style={{ 'border': '1px solid black', 'display':'flex', 'flex-direction': 'column', 'padding':'10px' }}>
        <h3>Star rating</h3>
        {this.state.filter.map((element, index) => 
          <label>
            <input type="checkbox" key={element.name} value={element.checked} onChange={(e) => this.handleClick.bind(e)}/>{element.name}
          </label>
        )}
        
      </div>
    )
  }
}