const express = require("express")
const app = express()
const {getAllCarrs,makeCar, editCar, deleteCar} = require("./Controler/All _cars")

app.use(express.json())


app.get("/api/cars", getAllCarrs)
app.post("/api/cars", makeCar)
app.put("/api/cars", editCar)
app.delete("/api/cars", deleteCar)




app.listen(5050, () => console.log("server is ready at 5050"))