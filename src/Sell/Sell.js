import React, { Component } from 'react'
import "./Sell.css"
import axios from 'axios';

export default class Sell extends Component {
    constructor() {
        super()
        this.state = {
            car:"",
            model:"",
            year:"",
            price:"",
            image:""
        }               
    }   



    handleMake = e => {
        this.setState({
            car: e.target.value

        })
    }
    handleModel = e => {
        this.setState({
            model: e.target.value
        })
    }
    handleYear = e => {
        this.setState({
            year: e.target.value
        })
    }
    handlePrice = e => {
        this.setState({
            price: e.target.value
        })
    }
    handlePicture = e => {
        this.setState({
            image: e.target.value
        })
    }
    addCar = () => {
        
        const {car,model,year,price,image} = this.state
        axios.post("/api/cars",{car,model,year,price,image}).then( () => {this.props.backToHome()})
        
    }
    
    render() {
        
      
    return (
        <section className="data">
          <div className="sellinfo"> 
              <h1>Make</h1>
            <input type="text" onChange={this.handleMake} ></input>
            <h1>Model</h1>
            <input type="text" onChange={this.handleModel}></input>
            <h1>Year</h1>
            <input type="number" onChange={this.handleYear}></input>
            <h1>Price</h1>
            <input type="number" onChange={this.handlePrice}></input>
            <h1>Picture</h1>
            <input type="text" onChange={this.handlePicture}></input> 
            <button className="button2" onClick={this.addCar} >Submit</button>
            </div>
            
         
     </section>
    )
  }
}
