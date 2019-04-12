import React, { Component } from 'react'

import axios from 'axios';

export default class EditCar extends Component {
    constructor() {
        super()
        this.state = {
            car:"",
            model:"",
            year:"",
            
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


    EditCar = () => {
      const { index } = this.props
      const {car,model,year,} = this.state
      axios.put("/api/cars",{car,model,year, index}).then( () => {this.props.backToHome()})

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
            <button className="button2" onClick={this.EditCar}>Submit</button>

            </div>
            
         
      </section>
    )
  }
}
