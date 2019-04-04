import React, { Component } from 'react';
import logo from "./picture/devmountain.png"
import "./Reset.css";
import './App.css';
import Allcars from './Cars/Cars';

class App extends Component {
  render() {
    return (
      <div>
        
        <header className="nav" >
        <img className="dev" src={logo} alt="logo"></img>
        <h1 className="auto">Devmountain auto</h1>
        <button className="sell">Sell</button>
        <button className="cart">Cart</button>

          <input className="search" type="text" placeholder="Search.."></input>


        </header>
        <Allcars />
    
      </div>
    );
  }
}

export default App;
