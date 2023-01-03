import connectMongo from "../../../database/conn";
import {getStudents, postStudents} from "../../../database/controller"

export default async function handler(req, res){
    connectMongo().catch(()=>res.status(405).json({error: "Error while connecting to the database"}))
    const {method} = req;
    switch(method){
        case 'GET':
            await getStudents(req, res);
            break;
        case 'POST':
            await postStudents(req, res);
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
            res.status(405).end(`Method ${method} not allow hahaha ;)`)
    }
}