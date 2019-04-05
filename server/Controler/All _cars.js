const cars = require("./All_Cars_list.json")


const getAllCarrs =(req, res) => {
    res.json(cars)
}
const makeCar =(req, res) => {
    console.log(req.body)
    const newCars = cars.unshift(req.body)
    res.json(newCars)
}



module.exports = {
    getAllCarrs,makeCar
}