import { db } from "../connectDB.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

// use ? instead req.body.smth - provides extra security
export const register = (req, res) => {
  // check if user exists
  const sql = "SELECT * FROM users WHERE username = ?";

  db.query(sql, [req.body.username], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    if (data.length) {
      return res.status(409).json("User already exists");
    }
    // hash password
    const salt = bcrypt.genSaltSync(10);
    m;
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    // create user
    const q =
      "INSERT INTO users (`username`, `email`, `password`, `name`) VALUES (?)";
    // values should be in the same order
    const values = [
      req.body.username,
      req.body.email,
      hashedPassword,
      req.body.name,
    ];

    db.query(q, [values], (err, data) => {
      if (err) {
        return res.status(500).json(err);
      }

      return res.status(200).json("User has been created");
    });
  });
};

export const login = (req, res) => {
  const sql = "SELECT * FROM users WHERE username = ?";

  db.query(sql, [req.body.username], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    if (data.length === 0) {
      return res.status(404).json("User not found");
    }

    const { password, ...others } = data[0];
    const checkPassword = bcrypt.compareSync(req.body.password, password);

    if (!checkPassword) {
      return res.status(400).json("Wrong password or username");
    }

    const token = jwt.sign({ id: others.id }, secret, {
      expiresIn: "30d",
    });

    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  });
};

export const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      // to be able to receive cookies from react port:
      sameSite: "none",
    })
    .status(200)
    .json("User has been logged out");
};
