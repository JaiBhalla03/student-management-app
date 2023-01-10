import mongoose from 'mongoose'

const MONGO_URI = "mongodb+srv://admin:admin1234@students.ifegyvz.mongodb.net/?retryWrites=true&w=majority"

const connectMongo = async () => {
    try {
        const {connection} = await mongoose.connect(MONGO_URI)
        if (connection.readyState === 1) {
            console.log("DataBase Connected🤗")
        } else {
            console.log("waiting for connection")
        }
    } catch (errors) {
        return Promise.reject(errors)
    }
}

export default connectMongo;