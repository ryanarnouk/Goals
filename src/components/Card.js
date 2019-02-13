import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import FontAwesome from 'react-fontawesome';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false
    }
  }

  onClick = () => {
    if(this.state.completed) {
      this.setState({completed: false});
    } else {
      this.setState({completed: true});
    }
  }

  render() { 
    return (  
      <div className='card'>
        <h1 style={{color: 'black'}}>{this.props.goal}</h1>
        {this.state.completed ?
          <div style={{display: 'flex'}} className="markascomplete" onClick={this.onClick}>
            <FontAwesome name="check" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}/>
            <p style={{margin: 0, marginLeft: 10}}>Completed. Good Job!</p>
          </div>:
          <div>
            <ProgressBar percentage={30}/>
            <div style={{display: 'flex'}} className="markascomplete" onClick={this.onClick}>
              <FontAwesome name="check" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}/>
              <p style={{margin: 0, marginLeft: 10}}>Mark as completed</p>
            </div>
          </div>
        }
      </div>
    );
  }
}
 
export default Card;