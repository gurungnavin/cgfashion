import mongoose from "mongoose";

const connetDB = async () => {
  mongoose.connection.on('connected', () => {
    console.log('DB Connected');
  })
  await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`)

}

export default connetDB;