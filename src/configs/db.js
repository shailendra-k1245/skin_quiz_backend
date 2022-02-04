const mongoose = require("mongoose");
let Praveen_db = "mongodb+srv://praveen:prav1234@vedix.op3a8.mongodb.net/vedix";
let Sharath_db = "mongodb+srv://sarath:sarath194@cluster1.wrjri.mongodb.net/vedix";
module.exports = () => {
  return mongoose.connect(
  Sharath_db
  );
   
};
