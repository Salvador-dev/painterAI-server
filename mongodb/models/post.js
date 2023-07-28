import mongoose from 'mongoose';	

const post = new mongoose.Schema({
    name: {type: String, require: true},
    prompt: {type: String, require: true},
    images: {type: Array, require: true}
})

const postSchema = mongoose.model('Post', post);

export default postSchema