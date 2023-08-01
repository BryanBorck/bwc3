const express = require('express');
const courseModel = require('./course_model');

const app = express();
const port = 3001;

app.use(express.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/', async (req, res) => {
  try {
    const credits = await courseModel.getcourses();
    res.status(200).send(credits);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/add-course', async (req, res) => {
  try {
    const credit = await courseModel.createcourse(req.body);
    res.status(200).send(credit);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});