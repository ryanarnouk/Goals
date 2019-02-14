import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';

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
      localStorage.setItem('completed' + this.props.id, this.state.completed)
    } else {
      this.setState({completed: true});
      localStorage.setItem('completed' + this.props.id, this.state.completed)
    }
  }

  percentage = () => {
    var goals = JSON.parse(localStorage.getItem('cards'));
    var a = moment(goals[1].startday, 'YYYY-MM-DD');
    var b = moment(goals[1].endday, 'YYYY-MM-DD');
    var days = b.diff(a, 'days');
    console.log(days);
  }

  render() { 
    this.percentage();
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