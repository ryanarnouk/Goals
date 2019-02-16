import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';

class Card extends Component {
  constructor(props) {
    super(props);
    var goals = JSON.parse(localStorage.getItem('cards'));
    this.state = {
      completed: goals[this.props.id].completed,
      percentage: null
    }
  }

  componentWillMount() {
    this.percentage();
  }

  completed = () => {
    var goals = JSON.parse(localStorage.getItem('cards'));

    if(this.state.completed) {
      this.setState({completed: false});
      localStorage.setItem('completed' + this.props.id, this.state.completed)
      goals[this.props.id].completed = false;
    } else {
      this.setState({completed: true});
      localStorage.setItem('completed' + this.props.id, this.state.completed)
      goals[this.props.id].completed = true;
    }
    localStorage.setItem('cards', JSON.stringify(goals));
    console.log(goals[this.props.id].completed); 
  }

  percentage = () => {
    var goals = JSON.parse(localStorage.getItem('cards'));
    var a = moment(goals[this.props.id].startday, 'YYYY-MM-DD');
    var b = moment(goals[this.props.id].endday, 'YYYY-MM-DD');
    var days = b.diff(a, 'days');

    // current day
    const now = new Date();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(0, '0');
    
    var c = moment(`${now.getFullYear()}-${month}-${day}`, 'YYYY-MM-DD');
    var d = moment(goals[this.props.id].endday, 'YYYY-MM-DD');
    var differencebetweenday = d.diff(c, 'days'); 

    var n = days-differencebetweenday;
    this.setState({percentage: Math.round(n/days * 100)}); 
  }

  delete = () => {
    var old = JSON.parse(localStorage.getItem('cards'));
    old.splice(this.props.id, 1);
    localStorage.setItem('cards', JSON.stringify(old));
    
    // should change this to forceUpdate or update state to refresh component

    if(old.length === 0) {
      localStorage.removeItem('cards');
    }
    window.location.reload();
  }

  render() { 
    console.log(this.state.completed);
    return (  
      <div className='card'>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <h1 style={{color: 'black'}}>{this.props.goal}</h1>
          <FontAwesome name="trash-alt" className="trash" onClick={this.delete}/>
        </div>
        {this.state.completed ?
          <div style={{display: 'flex'}} className="markascomplete" onClick={this.completed}>
            <FontAwesome name="check" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}/>
            <p style={{margin: 0, marginLeft: 10}}>Completed. Good Job!</p>
          </div>:
          <div>
            <ProgressBar percentage={this.state.percentage}/>
            <div style={{display: 'flex'}} className="markascomplete" onClick={this.completed}>
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