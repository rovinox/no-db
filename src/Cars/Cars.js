
import React, { Component } from 'react'
import axios from "axios"
import "./car.css"




export default class Allcars extends Component {
    constructor(){
        super()
        this.state = {
            cars: []
        }   

    }

    componentDidMount(){
      axios.get("/api/cars").then(res => {
        
        this.setState({
          cars: res.data
          
        })
      })
    }


  render() {
      const carDisplay = this.state.cars.map((car, index) =>{
        return (
          <div key={index} className="card">
            <div className="cmp">
            <p>Car: {car.car}</p>
            <p>Year: {car.year}</p>
            <p>Model: {car.model}</p>
            <p>Price: {car.price}</p>
            </div>
            <img className="car-image" src={car.image} />
            <button className="btn1">Edit</button>
            <button className="btn2">Remove</button>

            

          </div>
        )
      })
    return (
      <div className="main">
          {carDisplay }
      </div>
    )
  }
}
