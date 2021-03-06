
import React, { Component } from 'react'
import axios from "axios"
import "./car.css"



function searching(term) {
  return function (x) {
    return x.car.toLowerCase().includes(term.toLowerCase()) || !term
    
  }
  
}


export default class Allcars extends Component {
    constructor(props){
        super(props)
        this.state = {
            cars: [],
           term: "" ,


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
          axios.delete(`api/cars/${index}`).then( (res) => {
            
            this.setState({cars: res.data}) 
            this.props.backToHome()
          }).catch(err =>{
            console.log(err);
          })
          
        }
          
        searchHandler = (event) =>{
          this.setState({term: event.target.value})

        }

            
  render() {
      const carDisplay = this.state.cars.filter(searching(this.state.term)).map((car, index) =>{
        
        return (
          <section key={index} className="card">
            <div className="cmp">
            <p>Car: {car.car}</p>
            <p>Year: {car.year}</p>
            <p>Model: {car.model}</p>
            <p>Price: {car.price}</p>
            </div>
            <img className="car-image" alt="car" src={car.image} />
            <button className="btn1" onClick={ () => {this.props.handleEdit(car.car,car.year,car.model, index)}}>Edit</button>
            <button className="btn2" onClick={ () => this.handleDelete(index)} >Remove</button>

            

          </section>
        )
      })
    return (
     <div>
       <input type="text" className="search" placeholder="Search Your Car..." onChange={this.searchHandler} value={this.term}></input>
      <main className="main">
      
          {carDisplay }
          </main>
      </div>
    )
  }
}
