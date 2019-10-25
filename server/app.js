const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = "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"
sgMail.setApiKey(sendgridAPIKey)

const app=express().use('*', cors()); // express start
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
const port = process.env.PORT || 3001

app.get('/questions', (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "*")
    res.setHeader("Access-Control-Allow-Headers", "content-type")
	res.send([
  {
    id: "q1",
    content: "Сколько типов данных в js",
	answers: [
      `5 (string, number, boolean, null, undefined)`,
      `6 (string, number, boolean, null, undefined)`,
      `7 (string, number, boolean, null, undefined)`,
      `8 (string, number, boolean, null, undefined)`
    ]
  },
  {
    id: "q2",
    content: "Что такое замыкание",
	answers: [
      `5 (string, number, boolean, null, undefined)`,
      `6 (string, number, boolean, null, undefined)`,
      `7 (string, number, boolean, null, undefined)`,
      `8 (string, number, boolean, null, undefined)`
    ]
  },
  {
    id: "q3",
    content: "Сколько типов данных в js",
	answers: [
      `5 (string, number, boolean, null, undefined)`,
      `6 (string, number, boolean, null, undefined)`,
      `7 (string, number, boolean, null, undefined)`,
      `8 (string, number, boolean, null, undefined)`
    ]
  },
  {
    id: "q4",
    content: "Что такое замыкание",
	answers: [
      `5 (string, number, boolean, null, undefined)`,
      `6 (string, number, boolean, null, undefined)`,
      `7 (string, number, boolean, null, undefined)`,
      `8 (string, number, boolean, null, undefined)`
    ]
  },
  {
    id: "q5",
    content: "Сколько типов данных в js",
	answers: [
      `5 (string, number, boolean, null, undefined)`,
      `6 (string, number, boolean, null, undefined)`,
      `7 (string, number, boolean, null, undefined)`,
      `8 (string, number, boolean, null, undefined)`
    ]
  },
  {
    id: "q6",
    content: "Что такое замыкание",
	answers: [
      `5 (string, number, boolean, null, undefined)`,
      `6 (string, number, boolean, null, undefined)`,
      `7 (string, number, boolean, null, undefined)`,
      `8 (string, number, boolean, null, undefined)`
    ]
  }
])
})

const trueAnswers = {
    q1: "0",
    q2: "1",
    q3: "2",
    q4: "3",
    q5: "0",
    q6: "1"
  }

app.post('/result', (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "*")
	res.setHeader("Access-Control-Allow-Headers", "*")
    //res.setHeader("Access-Control-Allow-Headers", "content-type")
	console.log(req.body)
	
	const answers = req.body
	let result = {}
	for (key in answers) {
		if (answers[key] !== trueAnswers[key]){
		   result[key] = [answers[key], trueAnswers[key]]
		}
	}
	
	try {
		res.status(201).send(result)
	} catch (e) {
		res.status(400).send(e.message)
	}
})

app.get('/sendmail', (req, res) => {
	console.log(req.query)
	
	sgMail.send({
	to: 'sinmassagistochki@gmail.com',
	from: `${req.query.author}@mail.com`,
	subject: 'from JunSupport',
	text: req.query.message
})
	
	res.send({super: "ok"})
})

app.listen(port, () => {
	console.log(`Server is up on port ${port}.`)
})
