import userModel from "../models/userModel.js";
import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

//token

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};
//user register
const userRegister = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const image = req.file.filename;
  try {
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exits!" });
    }
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Use a valid email" });
    }
    if (password.length < 8) {
      return res.json({ success: false, message: "User a stronger password >8 characters" });
    }
    //hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await userModel({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      image: `${image}`,
    });
    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, message: "User registered", token, data: user });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "An error occurred while registering the user",
    });
  }
};

//user login
const userLogin = async (req, res) => {
  const { password, email } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User does not exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Wrong password or email" });
    }
    const token = createToken(user._id);
    res.json({ success: true, message: "Logged in successfuly", token });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "An error occurred while loging in the user",
    });
  }
};

export { userRegister, userLogin };
