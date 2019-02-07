import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Friendlist from './friendlist';

class App extends Component {
  render() {
    let friendslist =[{name:"Sobha",age:22},{name:"Vamsi",age:2,},{name:"Varshi",age:3},{name:"Ganga",age:23}];     
    
    return (
      <div>
        <Hello name="Sobha" />
        <Friendlist friend={friendslist} />
      </div>
    );
  }
}

export default App;
