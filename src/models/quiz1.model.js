const mongoose = require('mongoose');

 //put gender in smallcase.
const quiz1Schema = new mongoose.Schema({
    name:{type:String, required:true},
    age:{type:Number, required:true},
    gender:{type:String, required:true},
    skin_concerns:{type:String, required:true}
},
    {
        versionkey:false,
        timestamps:true,
    }
)

module.exports = mongoose.model('quiz1',quiz1Schema);