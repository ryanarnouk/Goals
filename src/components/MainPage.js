import React, { Component } from 'react';
import Card from './Card.js';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

class MainPage extends Component {
  rendercards = () => {
    if(localStorage.getItem('cards') === null || localStorage.getItem('cards') === undefined) {
      return <div style={{color: 'white', textAlign: 'center'}}><p>You do not have any goals set yet.</p><br /><p>To add one click the + button in the right corner.</p></div>;
    } else {
      return <Card goal="The quick brown fox jumped over the lazy dog"/>;
    }
  }

  render() { 
    return (  
      <div style={{fontFamily: 'Montserrat', fontWeight: 'bold'}} className="MainPage">
        <h1 style={{textAlign: 'center', fontWeight: 800, color: 'white', margin: 0}}>Goals</h1>
        {this.rendercards()}
        <Link to="/new">
          <FontAwesome name="plus" className="addnew" size="2x" />
        </Link>
      </div>
    );
  }
}
 
export default MainPage;