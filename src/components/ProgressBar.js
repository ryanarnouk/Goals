import React, { Component } from 'react';

const Filler = (props) => {
  console.log(props.percentage);
  return <div className="filler" style={{width: `${props.percentage}%`}}/>
}

class ProgressBar extends Component {
  render() { 
    return (  
      <div>
        <div className='progressbar'>
          <Filler percentage={this.props.percentage}/>
        </div>
        <p>{this.props.percentage}% till completion date</p>
      </div>
    );
  }
}
 
export default ProgressBar;