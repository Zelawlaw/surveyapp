const express = require("express");
const Survey = require("../models/survey");
const router = express.Router();

const samplesurveys = [
  {
    name: "John Doe",
    phonenumber: "0723222453",
    gender: "male",
    birthday: "01/01/1980",
    surveydate:"01/01/2023",
    employmentstatus: "employed",
    networth: "50000",
    iownhome: false,
    surveyname:'HomeOwnership'
  },
  {
    name: "Jane Doe",
    phonenumber: "0723654789",
    gender: "female",
    birthday: "01/01/1996",
    surveydate:"01/01/2023",
    employmentstatus: "employed",
    networth: "10000",
    iownhome: true,
    surveyname:'HomeOwnership'
  },
  {
    name: "Kimani Kamani",
    phonenumber: "0723654982",
    gender: "male",
    birthday: "01/01/1970",
    surveydate:"01/01/2023",
    employmentstatus: "self-employed",
    networth: "1000000",
    iownhome: true,
    surveyname:'HomeOwnership'
  },
  {
    name: "Reuben Kiongos",
    phonenumber: "0723654982",
    gender: "male",
    birthday: "01/01/1990",
    surveydate:"01/01/2023",
    employmentstatus: "EMPLOYED",
    networth: "2300000",
    iownhome: true,
    surveyname:'HomeOwnership'
  }
];

// Home page router
router.get("/", (req, res) => {
 Survey.find({}, (error, samplesurveys)=>{
  if (error){
      console.log(error);
  }else{
     console.log('samplesurveys :'+samplesurveys);
     res.render("home", { msg: "Summary of Surveys" ,samplesurveys: samplesurveys});
  }
});
 

  // for(let i=0;i<samplesurveys.length;i++){
  //   console.log("i"+i+" name :"+samplesurveys[i]['name']);
  // }

});

// new Survey router
router.get("/newsurvey", (req, res) => {
  res.render("newsurvey", { msg: "Kindly enter the info below:"});
 
});

router.get("/details/:id", (req, res) => {
    
 Survey.findById(req.params.id, (error, survey)=>{
    if (error){
        console.log(error)
    }else{
        console.log(survey)
        res.render('surveydetails', {survey:survey})
    }
})
  
 
});

router.post('/upload',(req,resp)=>{
  
  console.log("request :"+JSON.stringify(req.body));
  console.log("req.body.survey.name :"+req.body.survey.name);
 console.log("response :"+resp);
  //   Create a new Survey
     let newSurvey = new Survey({
      name: req.body.survey.name,
      surveyname:'Home Survey',
      surveydate: 'somedate',
      phoneNumber: +req.body.survey.phonenumber,
      gender: req.body.survey.gender,
      birthday: req.body.survey.birthday,
      employmentStatus: req.body.survey.employmentstatus,
      networth: req.body.survey.networth,
      do_you_own_a_home: req.body.survey.iownhome,
   })


  newSurvey.save() 
  resp.render("newsurvey", { msg: "Survey Saved!Home Ownership survey"});

  

});

module.exports = router;
