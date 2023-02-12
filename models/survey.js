const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create a schema for our database
var SurveySchema = new Schema({
  surveyname:"string",
  surveydate: "string",
  name: "string",
  phoneNumber: "string",
  gender: "string",
  birthday: "string",
  employmentStatus: "string",
  networth: "string",
  do_you_own_a_home: "string",
});

// convert the schema into a Model
let Survey = mongoose.model("surveys", SurveySchema);

module.exports = Survey;