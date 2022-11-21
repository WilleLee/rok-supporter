const maria  = require('../database/connect/maria');
maria.connect();

module.exports = {
  needs : () => XMLHttpRequestUpload,

  api : {

    test : (req,res) => {
      res.json({content : 'now connected with server'})
    },

    file : (req,res) => {
      return res.sendFile(__dirname + "/build/index.html")
    },

    testDb : (req,res) => {
      maria.query("SELECT * FROM roksupporter.table;", (err, rows) => {
        if(!err) {
          res.send(rows);
        } else {
          console.log('query error : ${err}');
          res.send(err);
        }
      });
    },

    testPost : (req,res) => {
      maria.query("SELECT name FROM roksupporter.table WHERE id = '" + req.body.test.userid+"':", (err, result) => {
        if(!err) {
          res.json(result);
        } else {
          console.log('query error : ${err}');
          res.json(result);
        }
      });

      console.log(" userid : "+req.body.test.userid);
    }
  }
}