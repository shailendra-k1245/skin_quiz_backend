const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
  {
    image_url:{type:String, required:true},
    title:{type:String, required:true},
    price:{type:Number , required:true},
    offer_price:{type:Number, required:true},
  },{
    versionKey:false,
    timestamps:true,
  }
)

module.exports = mongoose.model('cart', cartSchema);