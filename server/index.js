const express = require("express")
const app = express()
const {getAllCarrs,makeCar} = require("./Controler/All _cars")
app.use(express.json())


app.get("/api/cars", getAllCarrs)
app.post("/api/makeCar", makeCar)






app.listen(5050, () => console.log("server is ready at 5050"))