
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
        handleDelete = (index) =>{
          axios.delete(`api/cars/${index}`).then( () => {this.props.backToHome()})
          
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
            <button className="btn1" onClick={ () => {this.props.handleEdit(car.car,car.year,car.model, index)}}>Edit</button>
            <button className="btn2" onClick={ () => this.handleDelete(index)} >Remove</button>

            

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
