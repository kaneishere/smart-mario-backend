module.exports = app => {
    const student_fns = require("../controllers/Student.controllers.js")

    var router = require("express").Router()

    router.get("/", student_fns.findAll)

    router.post("/", student_fns.createAcc)
    router.post("/search", student_fns.authenticate)

    app.use("/api/students", router)
}