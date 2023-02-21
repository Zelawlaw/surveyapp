const express = require("express");
const Survey = require("../models/survey");
const router = express.Router();

// Home page router
router.get("/", (req, res) => {
  Survey.find({}, (error, samplesurveys) => {
    if (error) {
      console.log(error);
    } else {
      console.log("samplesurveys :" + samplesurveys);
      res.render("home", {
        msg: "Summary of Surveys",
        samplesurveys: samplesurveys,
      });
    }
  });
});

// new Survey router
router.get("/newsurvey", (req, res) => {
  res.render("newsurvey", { msg: "Kindly fill in the information below:" });
});

// aboutUs router
router.get("/about-Us", (req, res) => {
  res.render("aboutUs", { msg: "About Us" });
});

router.get("/details/:id", (req, res) => {
  Survey.findById(req.params.id, (error, survey) => {
    if (error) {
      console.log(error);
    } else {
      // console.log(survey);
      res.render("surveydetails", { survey: survey });
      // res.render("surveydetails", { survey: JSON.stringify(survey, null, 2) });
    }
  });
});

// router.get("/details/:id", (req, res) => {
//   // const id = req.params.id;
//   // Survey.findOne({ _id: id }, (err, survey) => {
//   Survey.findById(req.params.id, (error, survey) => {
//     if (err) {
//       console.log("Error retrieving record:", err);
//       res.status(500).send("Error retrieving record");
//       return;
//     }

//     if (!survey) {
//       res.status(404).send("Record not found");
//       return;
//     }
//     res.render("surveydetails", { survey: JSON.stringify(survey, null, 2) });
//     // res.json(survey);
//   });
// });

router.post("/upload", async (req, resp) => {
  //   Create a new Survey
  const newSurvey = new Survey({
    firstName: req.body.survey.firstName,
    surname: req.body.survey.surname,
    surveyname: "Home Survey",
    surveyDate: req.body.survey.surveyDate,
    phoneNumber: +req.body.survey.phonenumber,
    gender: req.body.survey.gender,
    birthday: req.body.survey.birthday,
    employmentStatus: req.body.survey.employmentstatus,
    networth: req.body.survey.networth,
    do_you_own_a_home: req.body.survey.iownhome,
  });

  newSurvey.save();
  resp.render("newSurvey", { msg: "Survey Saved!Home Ownership survey" });
});

module.exports = router;
