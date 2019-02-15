import React, { Component } from 'react';
import Card from './Card.js';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

class MainPage extends Component {
  rendercards = () => {
    if(localStorage.getItem('cards') === null || localStorage.getItem('cards') === undefined) {
      return <div style={{color: 'white', textAlign: 'center'}}><p>You do not have any goals set yet.</p><br /><p>To add one click the + button in the right corner.</p></div>;
    } else {
      var goals = JSON.parse(localStorage.getItem('cards'));
      return (
        <div className="cardouter">
          {goals.map((a, i) => {
            return [
              <Card key={i} id={i} goal={a.goal}/>
            ];
          })}
        </div>
      );
    }
  }

  render() { 
    return (  
      <div style={{fontFamily: 'Montserrat', fontWeight: 'bold'}} className="MainPage">
        <h1 style={{textAlign: 'center', fontWeight: 800, color: 'white', paddingBottom: 2}}>Goals</h1>
        <div> 
          {this.rendercards()}
        </div>
        <Link to="/new">
          <FontAwesome name="plus" className="addnew" size="2x" />
        </Link>
      </div>
    );
  }
}
 
export default MainPage;