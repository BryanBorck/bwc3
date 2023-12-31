
import "./setup.js";


import express from 'express';
import { createcourses, getcourses } from "./courseModel.js";

const app = express();
const port = 3001;

app.use(express.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/courses', async (req, res) => {
  try {
    const courses = await getcourses();
    res.status(200).send(courses);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/course/:id', async (req, res) => {
  try {
    const courses = await getcourses();
    const course = courses.find((course) => course.id === Number(req.params.id));
    if (course) {
      res.status(200).send(course);
    } else {
      res.status(404).send('Not found');
    }
  } catch (error) {
    console.log(error);
  }
});


app.post('/course', async (req, res) => {
  console.log(req.body);
  try {
    const tx = await createcourses(req.body);
    if(!tx){
      console.log("ERROR");
      console.log(tx)
      return res.status(500).send("ERROR");
    }
    return res.status(201).send("CREATED");
  } catch (error) {
    console.log(error);
    return res.status(500).send("ERROR");
  }
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});