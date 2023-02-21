const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create a schema for our database
var SurveySchema = new Schema(
  {
    surveyname: "string",
    surveyDate: {
      type: Date,
      default: Date.now,
      get: (val) => val ? val.toISOString().slice(0, 10) : null,
    },
    firstName: "string",
    surname: "string",
    phoneNumber: "string",
    gender: "string",
    birthday: "string",
    employmentStatus: "string",
    networth: "string",
    do_you_own_a_home: "string",
  },
  {
    versionKey: false, // You should be aware of the outcome after set to false
  }
);
SurveySchema.gender;
// convert the schema into a Model
let Survey = mongoose.model("surveys", SurveySchema);

module.exports = Survey;
