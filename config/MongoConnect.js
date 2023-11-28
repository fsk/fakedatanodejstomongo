import mongoose from "mongoose";

export function connectToDb(MONGO_URI) {
    return mongoose
        .connect(MONGO_URI)
        .then(_ => {
            console.log(`Connect to DB`);
            mongoose.set('debug', true)
        })
        .catch(err => console.log(`Error : ${err}`));
}