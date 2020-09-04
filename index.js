import DBHandler from "./db_handler.js"
const dbHandler = new DBHandler()

import express from "express"
const app = express()
app.use(express.json()) // Set Header "Content-Type" = "applications/json"

let count = 1
// console.log("Server Starting")

app.get("/", function (req, res) {
    dbHandler.add_actor("NewActor"+count)
    dbHandler.display_table("actor")
    res.send('Display Table ' + count++)
})

app.post("/", function (req, res) {
    console.log(req.body)

    if (req.body.action == "add")
    {
        for (let actor of req.body.actors)
        {
            dbHandler.add_actor(actor)
        }
    }
    
    dbHandler.display_table("actor")
    res.send('Post Request Successful! ' + count++);
})

app.listen(3000);