// https://bezkoder.com/node-js-express-sequelize-mysql/

const express = require("express")
const app = express()
app.use(express.json()) // Set Header "Content-Type" = "applications/json"



const db = require("./models/index.js")
db.sequelize.sync({force: true}).then(() => {
    console.log("DB Synced")
})

let count = 1
// console.log("Server Starting")

app.get("/", function (req, res) {

    // db_connection.find 
    res.send('Display Table ' + count++)
})

app.post("/", function (req, res) {
    console.log(req.body)

    if (req.body.action == "add")
    {
        for (let actor of req.body.actors)
        {
             // db_connection.create 
        }
    }
    res.send('Post Request Successful! ' + count++);
})

app.listen(3000);