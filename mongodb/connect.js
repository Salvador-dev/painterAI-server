import mongoose from 'mongoose';

const connectDB = (url) => {
    mongoose.set('strictQuery', true);
    mongoose.connect(url).then(()=> {

        console.log("conexion exitosa");

    }).catch(() => {
        console.log("fallo la conexion");s
    })
}

export default connectDB;