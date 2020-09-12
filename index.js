import {db_connection} from "./Database/reset_models.js"

import express from "express"
const app = express()
app.use(express.json()) // Set Header "Content-Type" = "applications/json"

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