import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false,
      percentage: null
    }
  }

  componentWillMount() {
    this.percentage();
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

    var a = moment(goals[0].startday, 'YYYY-MM-DD');
    var b = moment(goals[0].endday, 'YYYY-MM-DD');
    var days = b.diff(a, 'days');

    // current day
    const now = new Date();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(0, '0');
    
    var c = moment(`${now.getFullYear()}-${month}-${day}`, 'YYYY-MM-DD');
    var d = moment(goals[0].endday, 'YYYY-MM-DD');
    var differencebetweenday = d.diff(c, 'days'); 

    var n = days-differencebetweenday;
    this.setState({percentage: Math.round(n/days * 100)});
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
            <ProgressBar percentage={this.state.percentage}/>
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