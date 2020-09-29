module.exports = (app) => {
  const student_fns = require("../controllers/Question.controllers.js");

  var router = require("express").Router();

  router.get("/mcqtheory", student_fns.getRandomMCQTheory);
  router.get("/mcqcode", student_fns.getRandomMCQCode);
  router.get("/shorttheory", student_fns.getRandomShortTheory);
  router.get("/shortcode", student_fns.getRandomShortCode);

  app.use("/api/questions", router);
};
