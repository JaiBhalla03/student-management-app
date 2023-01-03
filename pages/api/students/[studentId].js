import connectMongo from "../../../database/conn";
import {deleteStudent, getStudent, updateStudent} from "../../../database/controller";


export default async function handler(req, res) {
    connectMongo().catch(() => res.status(405).json({error: "Database not connected"}))
    const {method} = req;
    switch (method){
        case 'GET':
            await getStudent(req, res);
            break;
        case 'DELETE':
            await deleteStudent(req, res);
            break;
        case 'PUT':
            await updateStudent(req, res);
        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
            res.status(405).json(`Method ${method} not allowed!`);
    }
}
