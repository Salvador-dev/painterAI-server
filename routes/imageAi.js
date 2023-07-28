import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, Configuration, OpenAIApi } from 'openai';

dotenv.config();

const router = express.router();

const Configuration = new Configuration({
    apiKey: process.env.OPENAI_API+KEY
})