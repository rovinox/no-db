import React, { Component } from 'react'
import "./Cart.css"
import allen from "./Allen.PNG"
import may from "./may.PNG"
import flores from "./flores.PNG"
//this is the about page 


export default class cart extends Component {
  render() {
    return (
      <div className="container">
        <p className="about">
        You always hear car dealer dealerships telling  you  about <mark> BAD CREDIT, NO CREDIT, NO PROBLEM BULLSHIT.</mark> Here at Devmountain Auto we don’t that we only give you the car you can afford. We don’t want you to carry a loan for the rest of your life, like you’re your student loan. We have cars in all price range. Nissan, Honda, Toyota, etc. Matter the fact we even got bicycles. So come on down to South Ervay st. We’re waiting.
        </p>
        <div className="managers">

            <div className="self">
              <h3 className="sell">General Manager</h3>
              <p className="name">Jonathan May</p>
            <img className="ins" src={may} alt="allen"></img>

            </div>


            <div className="self">
            <h3 className="sell" >Vehicle Specialist</h3>
            <p className="name">Mykenzie Allen Roger</p>
            <img className="ins" src={allen} alt="allen"></img>
            </div>


            <div className="self">
            <h3 className="sell" >Finance Manager</h3>
                  <p className="name">Jonathan May</p>
            <img className="ins" src={flores} alt="allen"></img>

            </div>




        </div>
      </div>
    )
  }
}
