import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, Configuration, OpenAIApi } from 'openai';

dotenv.config();

const router = express.router();

const Configuration = new Configuration({
    apiKey: process.env.OPENAI_API+KEY
});

const openai = new OpenAIApi(Configuration);

router.route('/').post(async (req, res)=> {

    try {

        const {prompt} = req.body;

        const aiResponse = await openai.createImage({
            prompt,
            n: 4,
            size: '1024x1024',
            response_format: 'b64_json'
        });

        res.status(200).json({ images: aiResponse.data.data });
        
    } catch (error) {

        console.log(error);

        res.status(500).send(error?.responde.data.error.message || "Algo salio mal, intenta de nuevo");
        
    }

})

export default router;