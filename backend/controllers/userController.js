import userModel from "../models/userModel.js";
import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// create token
const createToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET)
}
// Route for user login
const loginUser = async (req, res) => {
  try {
    // we need email and password to login
  const {email, password} = req.body;
  const user = await userModel.findOne({email});
  if(!user) {
    return res.json({success: false, message: "User is not available"})
  }
  const isMatch = await bcrypt.compare(password, user.password)
  if(isMatch) {
    const token = createToken(user._id)
    res.json({success: true,message: "User logged in Successfully", token})
  }
  else {
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
    
  } 
  catch (error) {
    console.log(error)
    res.json({message: error.message})
  }
};

// Route for user register
const registerUser = async (req, res) => {
  try {
    //変数(名前、メールアドレス、パスワード)
    const { name, email, password } = req.body;
    // check user already or not
    const exists = await userModel.findOne({ email });
    // exists will check email on userModel schema on database.
    if (exists) {
      return res.json({
        success: false,
        message: "ご入力いただいたメールアドレスはすでに登録されています。"
      });
    }
    // validating email format and strong password.
    if(!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "有効なメールアドレスを入力してください。"
      });
    }
    if(password < 8) {
      return res.json({
        success: false,
        message: "Enter strong password"
      });
    }
    //hashing password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    //update data with hashedPassword
    const newUser = new userModel ({
      name,
      email,
      password: hashedPassword
    })
    // the newUser is saved
    const user = await newUser.save();
    // new user with unique token
    const token = createToken(user._id)
    res.json({'success': true, token})


  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message
    })
  }
};

// Route for admin login
const adminLogin = async (req, res) => {
  res.json({ msg: "Admin Panel is working" });
};

export { loginUser, registerUser, adminLogin };
