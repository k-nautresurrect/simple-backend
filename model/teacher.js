import mongoose from "mongoose";

const teacherSchema = mongoose.Schema({
    name: String,
    username: String,
    password: String,
    subject: String,
})

const Teacher = mongoose.model('Teacher', teacherSchema);

export {Teacher};