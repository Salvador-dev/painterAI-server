import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));

app.get('/', async (req, res) => {

    res.status(200).json({
        message: 'hola mundo'
    })
});

const startServer = () => {

    try {

        app.listen(8000, () => {
            console.log('Server is running')
        })
        
    } catch (error) {

        console.log(error);
        
    }

}

startServer();


