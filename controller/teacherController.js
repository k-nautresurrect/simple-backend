import { Student } from "../model/student.js";
import { Teacher } from "../model/teacher.js";

const getResultByTeacher = async (req, res) => {
  const teacherID = req.params.teacherID;
  const t = await Teacher.findOne({_id: teacherID});
  if(!t){
    res.status(404);
    res.send({message: "teacher doesn't exist"});
    return;
  }
  const students = await Student.find({teacher: teacherID});
  res.status(200);
  res.send(students);
};

const editStudent = async (req, res) => {
  const studentID = req.params.studentID;
  const {name, score, dob} = req.body
  const updated = await Student.updateOne({rollno: studentID}, {name, score, dob});
  if(!updated){
    res.status(404);
    res.send({message: "student is not updated"});
    return;
  }
  res.status(200); res.send({message: "updated successfully"});
};
const deleteStudentEntry = async (req, res) => {
  const studentID = req.params.studentID;
  const deleted = await Student.deleteOne({rollno: studentID});
  if(!deleted) {
    res.status(404);
    res.send({message: "student doesn't exist, not deleted"});
    return;
  }
  res.status(200); res.send({message: "deleted successfully"});
};

const addStudent = async (req, res) => {
  const { student, teacherID } = req.body;
  const t = await Teacher.findOne({ _id: teacherID });
  if (!t) {
    res.status(404);
    res.send({ message: "teacher don't exist" });
    return;
  }
  const st = await Student.create({
    name: student.name,
    score: student.score,
    dob: student.dob,
    rollno: student.rollno,
    teacher: teacherID
  });
  if (!st) {
    res.status(404);
    res.send({ message: "student is not created" });
    return;
  }
  const students = await Student.find({teacher: teacherID});
  res.status(200);
  res.send(students);
};

const loginTeacher = async (req, res) => {
  const { username, password } = req.body;
  const t = await Teacher.findOne({ username, password });
  if (!t) {
    res.status(404);
    res.send({ id: null });
    res.end();
    return;
  }
  const resp = { id: t._id, username, name: t.name };
  res.status(200);
  res.send(resp);
};

const addTeacher = async (req, res) => {
  const { name, username, password, subject } = req.body;
  const t = await Teacher.create({
    username,
    password,
    name,
    subject,
  });
  console.log(t);
  const resp = t ? { username, name, id: t._id } : null;
  res.status(200);
  res.send(resp);
};

export {
  getResultByTeacher,
  editStudent,
  deleteStudentEntry,
  addStudent,
  addTeacher,
  loginTeacher,
};
