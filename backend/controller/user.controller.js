import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
export const Signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    const user = await User.findOne({ email: email });
    if (user) {
      return res
        .status(400)
        .json({ message: "User already exist with this email" });
    }
    // create user
    const hashpassword = await bcryptjs.hash(password, 10);
    const createdUser = new User({
      fullname: fullname,
      email: email,
      password: hashpassword,
    });

    await createdUser.save();
    return res.status(201).json({
      message: "User created Successfully!",
      user: {
        _id: createdUser._id,
        email: createdUser.email,
        fullname: createdUser.fullname,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const matcher = await bcryptjs.compare(password, user.password);
    if (!user || !matcher) {
      return res.status(400).json({ message: "Invalid username or password" });
    } else {
      res.status(200).json({
        message: "logged in Successfully",
        user: { _id: user._id, fullname: user.fullname, email: user.email },
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
