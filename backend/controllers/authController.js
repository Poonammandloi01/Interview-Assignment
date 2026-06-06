import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {
  signup,
  login,
  getProfile,
  updateProfile
} from "../controllers/authController.js";

export const signup = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      password
    } = req.body;

    const existingUser = await User.findOne({
      email
    });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists"
      });
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user = await User.create({
      fullName,
      email,
      phone,
      password: hashedPassword
    });

    res.status(201).json({
      message: "User Registered"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const login = async (req, res) => {
  try {

    const {
      email,
      password
    } = req.body;

    const user = await User.findOne({
      email
    });

    if (!user) {
      return res.status(400).json({
        message: "Invalid Credentials"
      });
    }

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Credentials"
      });
    }

    const token = jwt.sign(
      {
        id: user._id
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d"
      }
    );

    res.json({
      token,
      user
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
  export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .select("-password");

    res.status(200).json(user);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const updateProfile = async (req, res) => {
  try {

    const {
      fullName,
      phone
    } = req.body;

    const user =
      await User.findByIdAndUpdate(
        req.user.id,
        {
          fullName,
          phone
        },
        {
          returnDocument: "after"
        }
      ).select("-password");

    res.status(200).json(user);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
};