const express = require('express');
const app = express();
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 4000;

app.use(cors());

app.use(express.static(__dirname + '/build'));
app.use(express.static('static'));
app.use(express.static(__dirname + '/public'));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

async function start() {
  try {
    app.listen(PORT,()=>{
      console.log(`server started on port ${PORT}`);
    }) ;
  }catch (e) {
    console.log(e);
  }
}

start();
