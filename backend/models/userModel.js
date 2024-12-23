import mongoose from "mongoose";

// minimize false : cartData will create as empty object, otherwise it will ignore it(not using minimize).
const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  cartData: {type: Object, default: {}},
}, {minimize: false})

const userModel = mongoose.models.user || mongoose.model('user', userSchema)

export default userModel;