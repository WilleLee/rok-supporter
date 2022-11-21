const maria = require('../database/connect/maria');
maria.connect();

module.exports = {
  nedds : () => XMLHttpRequestUpload,

  api : {
    test : (req,res) => {
      res.json({content : 'now connected with server'})
    },

    file : (req,res) => {
      return res.sendFile(__dirname+"/build/index.html")
    },

    testDb : (req,res) => {
      maria.query("SELECT * from roksupporter.table;", (err,rows) => {
        if(!err) {
          res.send(rows);
        } else {
          console.log('query error : ${err}');
          res.send(err);
        }
      });
    },

    testPost : (req,res) => {
      maria.query("SELECT name FROM roksupporter.table WHERE id = '" + req.body.test.userid+"';", (err, result) => {
        if(!err) {
          res.json(result);
        } else {
          console.log('query error : ${err}');
          res.send(err);
        }
      });
      console.log("userid : " + req.body.test.userid);
    }
  }
}