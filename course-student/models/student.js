const mongoose = require('mongoose')
const Joi = require('joi')
const {courseSchema} = require('./course')
const Student = mongoose.model('Student', new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  courseDetails: {
    type: courseSchema,
    required: true
  },
  dateOfEnrollment: {
    type: Date,
    required: true
  }
}));

function validateStudent(student) {
  const schema = {
    name: Joi.string().min(3).required(),
    courseId: Joi.string().required(),
    dateOfEnrollment: Joi.date().required()
  };
  return Joi.validate(student, schema);
}

exports.Student = Student;
exports.validateStudent = validateStudent;