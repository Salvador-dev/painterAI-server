import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';
import checkAuth from '../middleware/auth.js';

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

router.route('/').post(checkAuth, async (req, res)=> {

    try {

        const {prompt} = req.body;

        const aiResponse = await openai.createImage({
            prompt,
            n: 4,
            size: '1024x1024',
            response_format: 'b64_json'
        });

        let images = aiResponse.data.data.map( e => {
            return ('data:image/jpeg;base64,' + e.b64_json)
        })

        res.status(200).json({images});
        
    } catch (error) {

        console.log(error);

        res.status(500).send(error?.responde.data.error.message || "Algo salio mal, intenta de nuevo");
        
    }

})

export default router;