module.exports = (app) => {
  const student_fns = require("../controllers/Student.controllers.js");

  const router = require("express").Router();

  router.get("/", student_fns.findAll);
  router.post("/", student_fns.createStudent);
  router.post("/authenticate", student_fns.authenticate);

  app.use("/api/students", router);
};
