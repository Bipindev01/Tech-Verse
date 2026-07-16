const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const User = require("../models/user");

//Register user

const registerUser = async (req, res) => {
    try {
        const {name, email, password, role} = req.body;

        //validation
        if(!name || !email || !password){
            return res.status(400).json({message: "All fields required"})
        }

        //checking existing user
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({message: "email already exists"})
        }

        //Hash password
        const hashedPassword = await bcrypt.hash(password, 10)

         // Create User
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role: "user",
        });

        res.status(201).json({
        success: true,
        message: "User Registered Successfully",
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
        },
        });


    } catch (error) {
        res.status(500).json({
      message: error.message,
    });
    }
}

// =========================
// Login User
// =========================

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check fields
    if (!email || !password) {
      return res.status(400).json({
        message: "Please enter email and password",
      });
    }

    // Find User
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid Email",
      });
    }

    // Compare Password
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({
        message: "Invalid Password",
      });
    }

    // JWT Token
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};