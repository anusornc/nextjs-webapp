//q: what is mongoose?
//a: Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.
import mongoose from 'mongoose';

let isConnected = false; // track the connection

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('MongoDB is already connected');
        return;
    }

    try {
        //connect to the database
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",     // name of the database
            useNewUrlParser: true,      // use new url parser
            useUnifiedTopology: true,   // use new topology
        })

        isConnected = true;

        console.log('MongoDB connected')
    } catch (error) {
        console.log(error);
    }
}