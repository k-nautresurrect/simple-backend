import mongoose from "mongoose";
import { Teacher } from "./teacher.js";

const studentSchema = new mongoose.Schema({
    name: String,
    score: Number,
    dob: String,
    rollno: Number,
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Teacher
    }
})

const Student = mongoose.model('Student', studentSchema);

export {Student};