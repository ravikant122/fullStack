const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const getUserTable = require("./db/index");

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server started listening on ${PORT}`);
});

const Users = getUserTable();

// login API
app.post("/", async (req, res) => {
  try {
    const data = await Users.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (!data) {
      throw new Error("couldn't find the user");
    }

    const token = jwt.sign({ email: req.body.email }, process.env.JWT_STRING);
    return res.json({
      token,
    });
  } catch (e) {
    console.error("Invalid user creds", e);
    return res.status(401).json({
      message: "User is not authorized",
    });
  }
});

// signup
app.post("/signup", async (req, res) => {
  try {
    const data = await Users.create({
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
    });

    return res.json({
      message: "Sign up successful.",
    });
  } catch (e) {
    console.error(
      "Unable to save user to db because an user already exists the email",
      e
    );
    return res.status(409).json({
      message: "User with this email already exists",
    });
  }
});

// dashboard
app.get("/dashboard", async (req, res) => {
  try {
    // finding current user with JWT
    console.log(req);
    const decoded = jwt.verify(
      req.headers["authorization"],
      process.env.JWT_STRING
    );
    const { email } = decoded;

    const userData = await Users.findOne({
      email,
    });

    const otherUsersData = await Users.find().select({
      name: 1,
      email: 1,
      _id: 0,
    });
    return res.json({
      userData,
      otherUsersData,
    });
  } catch (e) {
    console.error("some error occurred while fetching dashoard details", e);
    return res.status(500).json({
      message: "Some error occurred while fetching dashboard details",
    });
  }
});

// send money
app.post("/send", async (req, res) => {
  try {
    // finding current user with JWT
    const decoded = jwt.verify(
      req.headers.Authorization,
      process.env.JWT_STRING
    );
    const { email: senderEmail } = decoded;
    const { recieverEmail, moneyToSend } = req.body;

    const { money: sendersMoney } = await Users.findOne({
      email: senderEmail,
    }).select({ money: 1, _id: 0 });
    if (parseInt(moneyToSend) > parseInt(sendersMoney)) {
      return res.json({
        message: "Sender doesn't have enough money",
      });
    }

    const isMoneyDeducted = await Users.updateOne(
      { email: senderEmail },
      { $set: { money: parseInt(sendersMoney) - parseInt(moneyToSend) } }
    );

    const { money: recieverMoney } = await Users.findOne({
      email: recieverEmail,
    }).select({ money: 1, _id: 0 });
    const isMoneyRecieved = await Users.updateOne(
      { email: recieverEmail },
      { $set: { money: parseInt(recieverMoney) + parseInt(moneyToSend) } }
    );
    return res.send();
  } catch (e) {
    console.error("some error occurred while fetching dashoard details", e);
    return res.status(500).json({
      message: "Some error occurred while fetching dashboard details",
    });
  }
});
