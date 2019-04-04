import Cars from "./Cars.json";
import React, { Component } from 'react'




export default class Allcars extends Component {
    constructor(){
        super()
        this.state = {
            car:"",
            model:"",
            pirce:"",
            year:"",
            image:""
        }

    }
  render() {
      let car = Cars.map(car => {
         return (
             <div>
             <ul>
                 <li>{car.car}</li>
                 <li>{car.year}</li>
                 <li>{car.model}</li>
                 <li>{car.pirce}</li>
             </ul>
              <img src= {car.image} />
             </div>
         ) 
      })
    return (
      <div>
          <ul>{car}</ul>
      </div>
    )
  }
}
