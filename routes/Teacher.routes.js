module.exports = app => {
    const teacher_fns = require("../controllers/Teacher.controllers.js")

    var router = require("express").Router()

    router.get("/", teacher_fns.findAll)
    router.post("/", teacher_fns.createTeacher)
    router.post("/authenticate", teacher_fns.authenticate)

    app.use("/api/teachers", router)
}