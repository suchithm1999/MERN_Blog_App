const User = require("../models/user.model");
const bcryptjs = require("bcryptjs");
const errorHandler = require("../utils/error");
const jwt = require("jsonwebtoken");

const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    next(errorHandler(400, "All fields are required"));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    const user = await newUser.save();
    res.json("SignUp successful");
  } catch (error) {
    next(error);
  }
};

const signIn = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(errorHandler(400, "All fields are required"));
  }

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, "Invalid Credentials"));
    }

    const token = jwt.sign(
      { id: validUser._id, exp: Math.floor(Date.now() / 1000) + 60 * 60 },
      process.env.JWT_SECRET
    );

    const { password: pass, ...rest } = validUser._doc;

    res
      .status(200)
      .cookie("access_token", token, { httpOnly: true })
      .json(rest);
  } catch (error) {
    return next(error);
  }
};

const google = async (req, res, next) => {
  const { email, name, photoUrl } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (validUser) {
      const token = jwt.sign(
        { id: validUser._id, exp: Math.floor(Date.now() / 1000) + 60 * 60 },
        process.env.JWT_SECRET
      );

      const { password: pass, ...rest } = validUser._doc;

      res
        .status(200)
        .cookie("access_token", token, { httpOnly: true })
        .json(rest);
    } else {
      const username =
        name.toLowerCase().split(" ").join("") +
        Math.random().toString(10).slice(-4);
      const password = Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(password, 10);

      const newUser = new User({
        username,
        password: hashedPassword,
        email,
        photoUrl,
      });
      const validUser = await newUser.save();

      if (validUser) {
        const token = jwt.sign(
          { id: validUser._id, exp: Math.floor(Date.now() / 1000) + 60 * 60 },
          process.env.JWT_SECRET
        );

        const { password: pass, ...rest } = validUser._doc;

        res
          .status(200)
          .cookie("access_token", token, { httpOnly: true })
          .json(rest);
      }
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { signUp, signIn, google };
