import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

const app = express();
const $PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("build"));

app.get("/test", (req,res) => res.json({content:'hi'}));

app.get("/file", (req,res) => {
    return res.sendFile(__dirname + "/build/index.html");
  
})

app.use("/testPost", function(req,res) {
  console.log("name   : "+req.body.information.name);
  console.log("userid : "+req.body.information.userid);
  res.json({content: 'done'});
});



app.listen($PORT, () => {
  console.log(`The ROK Supporter now runs on the port number ${$PORT}`);
});
