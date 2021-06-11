require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  });


const express = require('express');
// const githubRoutes = require("./routes/githubRoutes")

const app = express();

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.get("/", (req, res) => res.send("API Running"));


//make route
app.use("/github", require("./routes/githubRoutes.js"));
app.use("/createprofile", require("./routes/githubRoutes.js"));

//if environement is test this wont executed
if (process.env.node_ENV !== 'test'){
    //runs server
    app.listen(3000, ()=> console.log('server running on 3000'))
}

module.exports = app;