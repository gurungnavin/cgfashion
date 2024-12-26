import mongoose from "mongoose";

const connetDB = async () => {
  mongoose.connection.on('connected', () => {
    console.log('DB Connected(データベースと繋がっています。)');
  })
  await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`)

}

export default connetDB;