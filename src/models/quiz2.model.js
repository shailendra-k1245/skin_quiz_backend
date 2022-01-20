const mongoose = require('mongoose');

const quiz2Schema = new mongoose.Schema({
    size:{type:String, require:true},
    time:{type:String, require:true},
    skin_feel:{type:String, require:true},
    skin_type:{type:String, require:true},
    quiz1_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"quiz1",
        required:true
    }
},
    {
        versionkey:false,
        timestamps:true,
    }
)

module.exports = mongoose.model('quiz2',quiz2Schema);