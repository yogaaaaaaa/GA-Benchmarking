const mongoose = require("mongoose"); //importing mongoose

const uri = process.env.MONGO_URI; // adding the uri for MongoDB


//connect express to mongoDB with mongoose
mongoose
  .connect(uri, {
    useUnifiedTopology: true, //required for initialise
    useNewUrlParser: true, //required for initialise
    useCreateIndex: true, //use to enable unique data type
    useFindAndModify: false, // use findOneAndUpdate instead of findAndModify
  })
  .then(() => console.log("mongodb connecteddddddddddd"))
  .catch((err) => console.log(err));

//importing models
const profile = require("./profile");


module.exports = { profile };
