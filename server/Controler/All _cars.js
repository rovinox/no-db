const cars = require("./All_Cars_list.json")


const getAllCarrs =(req, res) => {
    res.json(cars)
}



module.exports = {
    getAllCarrs
}