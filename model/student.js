//creating schema for the student
import {Schema, models, model} from 'mongoose';

const studentSchema = new Schema({
    name: String,
    age: Number,
    phoneNumber: Number,
    email: String,
    address: String,
    imageUrl: String
})

const Students = models.student || model('student', studentSchema)
export default Students;