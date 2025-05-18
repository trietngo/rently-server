import * as tf from '@tensorflow/tfjs'
import * as tfn from '@tensorflow/tfjs-node'

const predictRent = async (req, res) => {

    // const modelPath = 'data/model/model.json'
    // const modelHandler = tfn.io.fileSystem(modelPath)

    // const model = await tf.loadLayersModel('file://data/model/model.json')

    console.log(req.body)
    res.send("Render Server Responded.");
}

export default (app) => {
    app.post('/state', predictRent)
}
