const mongoose = require("mongoose");

function getUserTable() {
  try {
    mongoose.connect(process.env.DATABASE_URL);
    console.log('connection to database in successful')


    const userSchema = new mongoose.Schema({
      name: String,
      email: { type: String, unique: true },
      password: String,
      money: { type: Number, default: 10000 },
    });
    var Users = mongoose.model("USERS", userSchema);
    return Users;
  } catch (e) {
    console.error('error while connecting to database: ', e);
    throw e;
  }
}
module.exports = getUserTable;
