//function that will be used to get the data from the backend

import axios from "axios";

//const base_url = location.hostname

export async function getStudents(){
    const students = await axios.get(`/api/students`);
    return students.data
}