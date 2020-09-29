const csv = require("csvtojson");

const numMCQTheory = 100;
const numMCQCode = 100;
const numShortTheory = 100;
const numShortCode = 100;

exports.getRandomMCQTheory = async (req, res) => {
  let index = Math.floor(Math.random() * numMCQTheory) + 1;
  const jsonArray = await csv().fromFile("data/MCQ_Theory.csv");
  let jsonQn = jsonArray[index];
  res.send({ message: "successful", Question: jsonQn });
  // return({"message": "successful", "Index": index, "Question": jsonQn})
};

exports.getRandomMCQCode = async (req, res) => {
  let index = Math.floor(Math.random() * numMCQCode) + 1;
  const jsonArray = await csv().fromFile("data/MCQ_Code.csv");
  let jsonQn = jsonArray[index];
  res.send({ message: "successful", Question: jsonQn });
};
exports.getRandomShortTheory = async (req, res) => {
  let index = Math.floor(Math.random() * numShortTheory) + 1;
  const jsonArray = await csv().fromFile("data/Short_Answer_Theory.csv");
  let jsonQn = jsonArray[index];
  res.send({ message: "successful", Question: jsonQn });
};
exports.getRandomShortCode = async (req, res) => {
  let index = Math.floor(Math.random() * numShortCode) + 1;
  const jsonArray = await csv().fromFile("data/Short_Answer_Code.csv");
  let jsonQn = jsonArray[index];
  res.send({ message: "successful", Question: jsonQn });
};

// exports.getRandomMCQTheory(1,1)
//     .then((data)=> {console.log(data)})
//     .catch((err)=> {console.log("ERROR", err.message)})
