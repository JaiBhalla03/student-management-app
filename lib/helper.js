//function that will be used to get the data from the backend

import axios from "axios";

export async function getStudents(){
    const students = await axios.get("http://localhost:3000/api/students" || "https://jaibhalla03-student-management-app.vercel.app/api/students");
    return students.data
}