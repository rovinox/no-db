import React, { Component } from 'react';
import logo from "./picture/devmountain.png"
import Cart from "./Cart/cart"
import "./Reset.css";
import './App.css';
import Allcars from './Cars/Cars';
import Sell from "./Sell/Sell"

class App extends Component {
  constructor(){
    super()
    this.state = {
      page: "home"

    }
  }


    backToHome = () => {
      this.setState({
        page: "home"
      })

    }

  render() {
    return (
      <div>
        
        <header className="nav" >
        <img className="dev" src={logo} alt="logo"></img>
        <h1 className="auto">Devmountain auto</h1>
        <button className="sell" onClick={(e) => this.setState({page:"home"})}>Home</button>
        <button className="sell" onClick={(e) => this.setState({page:"sell"})}>Sell</button>
        <button onClick={(e) => this.setState({page:"cart"})} className="cart">Cart</button>

          <input className="search" type="text" placeholder="Search.."></input>


        </header>
        { this.state.page === "home" ? <Allcars/> : null}
        { this.state.page === "cart" ? < Cart/>  : null}
        { this.state.page === "sell" ? < Sell  backToHome={this.backToHome}/>  : null}
    
      </div>
    );
  }
}

export default App;
