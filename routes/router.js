import { Router } from "express";
import { getResultForStudent } from "../controller/studentController.js";
import {
  addStudent,
  addTeacher,
  deleteStudentEntry,
  editStudent,
  getResultByTeacher,
  loginTeacher,
} from "../controller/teacherController.js";

const router = Router();

router.get('', (req,res) => res.send("test route"));

router.get("/teacher/get-result/:teacherID", getResultByTeacher);
router.post("/teacher/delete-student/:studentID/:teacherID", deleteStudentEntry);
router.post("/teacher/edit-student/:studentID/:teacherID", editStudent);
router.post("/teacher/add-student",addStudent);
router.post("/teacher/add-teacher",addTeacher);
router.post("/teacher/login",loginTeacher);

router.post("/student/get-result", getResultForStudent);

export { router };
