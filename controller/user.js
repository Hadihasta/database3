const db = require("../database");
const register = (req, res) => {
  const { username, password } = req.body;
  // conts query = "INSERT INTO users
  // db.query(query, [username,password], (err,result)=>)
  if (err) {
    return res.status(500).json(err);
  }
  return res.send("register");
};

module.exports = { register };
