//function that will be used to get the data from the backend

import axios from "axios";

//const base_url = location.hostname

export async function getStudents(){
    const students = await axios.get(`/api/students`);
    return students.data
}

export async function postStudent(data){
    await axios.post('/api/students', data)
}

export async function deleteStudent(studentId){
    await axios.delete(`/api/students/${studentId}`);
}

export async function getStudent(studentId){
    const res = await axios.get(`/api/students/${studentId}`);
    return res.data;
}