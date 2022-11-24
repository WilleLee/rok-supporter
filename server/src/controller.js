import * as dotenv from "dotenv";
dotenv.config();
const mysql = require("./rds");
mysql.connect();

module.exports = {
  needs: () => upload,

  api: {
    test: (req, res) => {
      res.json({ content: "now connected with server" });
    },

    login: (req, res) => {
      const { password } = req.body;
      try {
        if (!password)
          return res
            .status(400)
            .json({ checkPw: false, msg: "password is required" });
        return password === process.env.ADMIN_PASSWORD
          ? res.status(200).json({ checkPw: true })
          : res.status(400).json({ checkPw: false, msg: "wrong password" });
      } catch (err) {
        console.log(err);
        return res
          .status(400)
          .json({ checkPw: false, msg: "unexpected error happened" });
      }
    },

    file: (req, res) => {
      return res.sendFile(__dirname + "/build/index.html");
    },

    testDb: (req, res) => {
      mysql.query("SELECT * FROM rok_supporter.testData;", (err, rows) => {
        if (!err) {
          res.send(rows);
        } else {
          console.log("query error : ${err}");
          res.send(err);
        }
      });
    },

    testPost: (req, res) => {
      mysql.query(
        "SELECT name FROM rok_supporter.testData WHERE id = '" +
          req.body.information.userid +
          "';",
        (err, result) => {
          if (!err) {
            res.json(result);
          } else {
            console.log("query error : ${err}");
            res.json(result);
          }
        }
      );

      console.log(" userid : " + req.body.information.userid);
    },
  },
};
