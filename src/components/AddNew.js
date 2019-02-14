import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Card extends Component {
  constructor(props) {
    super(props);
    const now = new Date();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(0, '0');

    this.state = {
      completed: false,
      startday: `${now.getFullYear()}-${month}-${day}`,
      endday: '',
      goal: '',
      redirect: false
    }
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  appendToStorage = (name, data) => {
    var old = localStorage.getItem(name);
    if(old === null) old = "";
    if(localStorage.getItem(name) === undefined || localStorage.getItem(name) === null) {
      // this function appends data to localstorage 
      localStorage.setItem(name, '[' + old + data + ']');
    } else if(typeof localStorage.getItem(name) === "string"){
      // we need to append the data because the object already exists
      var newstring = JSON.parse(old);
      newstring.push(JSON.parse(data));
      localStorage.setItem('cards', JSON.stringify(newstring));
      console.log(JSON.stringify(newstring))
    }
  }

  onSubmit = event => {
    event.preventDefault();
    var goal = {
      completed: this.state.completed, 
      startday: this.state.startday,
      endday: this.state.endday,
      goal: this.state.goal
    }
    this.appendToStorage('cards', JSON.stringify(goal));

    this.setState({redirect: true})
    console.log(JSON.parse(localStorage.getItem('cards')));
  };


  render() { 
    return (  
      <div className='AddNewPage'>
        <h1 style={{textAlign: 'center', fontWeight: 800, color: 'white', margin: 0}}>Add New Goal</h1>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="goal" placeholder="Goal" onChange={this.onChange}/>
          <p>Start date:</p>
          <input type="date" name="startday" value={this.state.startday} onChange={this.onChange}/><br />
          <p>End Date:</p>
          <input type="date" name="endday" placeholder="End Date" onChange={this.onChange}/><br />
          <input type="submit" value="Done" />
        </form>

        {this.state.redirect ? <Redirect to="/" /> : false}
      </div>
    );
  }
}
 
export default Card;