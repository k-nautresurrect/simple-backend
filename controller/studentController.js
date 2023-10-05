import { Student } from "../model/student.js";

const getResultForStudent = async (req, res) => {
    const {rollno, dob} = req.body;
    const St = await Student.findOne({rollno: parseInt(rollno), dob});
    if(!St){
        res.status(404);
        res.send({message: "student doesn't exist"});
        return;
    }
    res.status(200);
    res.send(St);
};

export { getResultForStudent };
