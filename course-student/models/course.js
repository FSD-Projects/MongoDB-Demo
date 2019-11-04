const mongoose = require('mongoose')
const Joi = require('joi')
const courseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 30
    }
});
const Course = mongoose.model('Course', courseSchema);

function validateCourse(course) {
    const schema = {
        courseName: Joi.string().min(5).max(50).required()
    }
    return Joi.validate(course, schema);
};

exports.courseSchema = courseSchema;
exports.Course = Course;
exports.validateCourse = validateCourse;



