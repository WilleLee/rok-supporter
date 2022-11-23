const mysql = require("./rds");
mysql.connect();

module.exports = {
  needs: () => upload,

  api: {
    test: (req, res) => {
      res.json({ content: "now connected with server" });
    },

    login: (req, res) => {
      console.log(req.body.password);
      if (req.body.password == "aaa") {
        res.json({ checkPw: true });
      } else {
        res.json({ checkPw: false });
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
