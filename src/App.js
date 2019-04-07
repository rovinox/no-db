import React, { Component } from 'react';
import logo from "./picture/devmountain.png"
import Cart from "./Cart/cart"
import "./Reset.css";
import './App.css';
import Allcars from './Cars/Cars';
import Sell from "./Sell/Sell"
import Edit_Car from './EditCar/Edit_Car';

class App extends Component {
  constructor(){
    super()
    this.state = {
      page: "home",
      selectedCar: null,
      selectedYear: null,
      selectedModel: null
    }
  }


    backToHome = () => {
      this.setState({
        page: "home"
      })

    }
    handleEdit = (carName, carYear, carModel, index) => {
      this.setState({
        page: "edit",
        selectedCar: carName,
        selectedYear: carYear,
        selectedModel: carModel,
        index: index

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
        { this.state.page === "home" ? <Allcars handleEdit={this.handleEdit} backToHome={this.backToHome}/> : null}
        { this.state.page === "cart" ? < Cart/>  : null}
        { this.state.page === "sell" ? < Sell  backToHome={this.backToHome}/>  : null}
        { this.state.page === "edit" ? <Edit_Car backToHome={this.backToHome} index={this.state.index}/> :null}
      </div>
    );
  }
}

export default App;
