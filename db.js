import mongoose from "mongoose";

const conn = () => {
    mongoose.connect(process.env.DB_URL, {
        dbName: "lenslight",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("connected to the db succesfully")
    }).catch((err) => {
        console.log(`db connection err ${err}`)
    })
};

export default conn;