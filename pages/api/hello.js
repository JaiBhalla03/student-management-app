import connectMongo from '../../database/conn'

export default function handler(req, res) {
    connectMongo()
}
