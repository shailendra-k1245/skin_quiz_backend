const mongoose = require('mongoose');
module.exports = ()=>{
    return mongoose.connect('mongodb+srv://sarath:sarath194@cluster1.wrjri.mongodb.net/vedix');
}