const mongoose = require('mongoose');
const courses = require('./routes/courses');
const students = require('./routes/students');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/course-student-instructor-api', { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use('/api/courses', courses);
app.use('/api/students', students);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));