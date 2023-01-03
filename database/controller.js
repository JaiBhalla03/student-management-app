//creating the rest apis for the application

import Students from '../model/student'

//api to get all the students
export async function getStudents(req, res){
    try{
        const students = await Students.find({})
        if(!students) return res.status(404).json({error: 'Data not found'})
        res.status(200).json(students)
    }
    catch(error){
        res.status(404).json(
            {
                error: "Error while fetching the data!"
            }
        )
    }
}


//api to add a student (POST)
export async function postStudents(req, res){
    try{
        const formData = req.body;
        if(!formData) return res.status(404).json({
            error: "Data not provided!"
        })
        await Students.create(formData, function(err, data){
                return res.status(200).json(data);
        })
    }
    catch(error){
        return res.status(404).json({error})
    }
}

//api for get a single student
export async function getStudent(req, res){
    try{
        const {studentId} = req.query;
        if(studentId){
            const student = await Students.findById(studentId);
            return res.status(200).json(student)
        }
        return res.status(404).json({error: "Student not selected!"})
    }
    catch(error){
        res.status(404).json({
            error: "Error while finding the individual student"
        })
    }
}


//api to delete the students

export async function deleteStudent(req, res){
    try{
        const {studentId} = req.query;
        if(studentId){
            const student = await Students.findByIdAndDelete(studentId)
            return res.status(200).json({deleted: studentId})
        }
        return res.status(404).json({
            error: "Student not selected"
        })
    }
    catch(error){
        return res.status(404).json({
            error: "error while deleting the student"
        })
    }
}

//api to updating the data of the user
export async function updateStudent(req, res){
    try{
        const {studentId} = req.query;
        const formData = req.body;
        if(studentId && formData){
            await Students.findByIdAndUpdate(studentId, formData);
            return res.status(200).json(formData)
        }
        return res.status(404).json({
            error: "Student not selected!"
        })
    }
    catch(error){
        return res.status(404).json({error: "Error while updating the user"})
    }
}