import * as dotenv from "dotenv";
dotenv.config();
const mysql = require("./rds");
mysql.connect();

module.exports = {
  needs: () => upload,

  main: {
    test: (req, res) => {
      res.json({ content: "now connected with server" });
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

  api: {
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

    kingsMessage: (req, res) => {
      const { kingsMessage } = req.body;
      mysql.query(
        "INSERT INTO rok_supporter.KingMsg (kingsMessage) VALUE ('" +
          kingsMessage +
          "');",
        (err, result) => {
          if (!err) {
            console.log("new Message : " + kingsMessage);
            return res.status(200).json({ success: true });
          } else {
            console.log(err);
            return res.status(400).json({ success: false });
          }
        }
      );
    },

    readKingsMessage: (req, res) => {
      mysql.query(
        "SELECT kingsMessage FROM rok_supporter.KingMsg ORDER BY id DESC LIMIT 1;",
        (err, result) => {
          if (!err) {
            const kingsMessage = result[0].kingsMessage;
            return res.status(200).json({ kingsMessage });
          } else {
            console.log(err);
            return res.status(400).json({ message: false });
          }
        }
      );
    },

    readAllCommanders: (req, res) => {
      mysql.query(
        "SELECT * FROM rok_supporter.commanders ORDER BY id;",
        (err, result) => {
          if (!err) {
            return res.status(200).json(result);
          } else {
            console.log(err);
            return res.sendStatus(400);
          }
        }
      );
    },

    readCommander: (req, res) => {
      const { id } = req.body;
      try {
        mysql.query(
          "SELECT * FROM rok_supporter.commanders WHERE id = '" + id + "'",
          (err, result) => {
            if (!result.length) return res.sendStatus(400);
            return res.status(200).json(result);
          }
        );
      } catch {
        console.log(err);
        return res.sendStatus(400);
      }
    },
  },
};
