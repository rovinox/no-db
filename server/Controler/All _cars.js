const cars = require("./All_Cars_list.json")


const getAllCarrs =(req, res) => {
    res.json(cars)
}
const makeCar =(req, res) => {
    
    const newCars = cars.unshift(req.body)
    res.json(newCars)
}


const editCar = (req, res) => {
    cars.map( (car, index) => {
        if (req.body.index === index ){
            car.car = req.body.car
            car.model = req.body.model
            car.year = req.body.year

        }
    })
}


const  deleteCar = (req, res) => {
   
    let id = req.params.id
   cars.splice(id,1)
    res.send(cars)
    
    
    
}





module.exports = {
editCar, getAllCarrs, makeCar, deleteCar
}