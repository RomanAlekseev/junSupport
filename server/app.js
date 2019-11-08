//const sendgridAPIKey = "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"
//sgMail.setApiKey(sendgridAPIKey)

//app.get('/sendmail', (req, res) => {
//	console.log(req.query)
//
//	sgMail.send({
//	to: 'sinmassagistochki@gmail.com',
//	from: `${req.query.author}@mail.com`,
//	subject: 'from JunSupport',
//	text: req.query.message
//})
//
//	res.send({super: "ok"})
//})
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");

const app = express().use("*", cors()); // express start
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
const port = process.env.PORT || 3001;

// установка схемы
const questionScheme = new Schema(
  {
    content: String,
    answers: Array
  },
  { versionKey: false }
);

const trueAnswerScheme = new Schema(
  {
    answer: String
  },
  { versionKey: false }
);

// подключение
mongoose.connect(
  "mongodb://localhost:27017/junSupport",
  { useNewUrlParser: true },
  function(err) {
    if (err) return console.log(err);
    app.listen(port, function() {
      console.log("Сервер ожидает подключения...");
    });
  }
);

const Question = mongoose.model("Question", questionScheme);
const TrueAnswer = mongoose.model(
  "TrueAnswer",
  trueAnswerScheme,
  "trueAnswers"
);
const Test = mongoose.model(
  "Test",
  new Schema(
  {
    title: String,
	href: String,
	questions: Array,
	answerVariants: Array,
	trueAnswers: Array
  },
  { versionKey: false }
),
  "tests"
);

app.get("/questions", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
	
	Test.findOne({title: "Job interview"}, function(err, tests) {
      if (err) return console.log(err);	  
      res.send(tests);
  });
});

app.get("/getList", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  let titles = []
  Test.find({}, function(err, tests) {
    if (err) return console.log(err);
    
	tests.forEach(test => titles.push({title: test.title, href: test.href}))
	  
    res.send(titles);
  });
});

app.post("/result", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  const answers = req.body;
  let result = {};
  let shablon = {};
  let description = {};
	
	Test.findOne({title: "Job interview"}, function(err, test) {
    test.trueAnswers.forEach(val => {
      shablon[val.for] = val.answer;
	  description[val.for] = val.explanation
    });

    for (let key in answers) {
		console.log(key)
      if (answers[key] !== shablon[key]) {
        result[key] = [answers[key], shablon[key]];
      }
    }

//  TrueAnswer.find({}, function(err, trueAnswers) {
//    trueAnswers.forEach(val => {
//      shablon[val._id] = val.answer;
//    });
//
//    for (let key in answers) {
//      if (answers[key] !== shablon[key]) {
//        result[key] = [answers[key], shablon[key]];
//      }
//    }
    //console.log(result);
    res.status(201).send({result, description});
  });
});
