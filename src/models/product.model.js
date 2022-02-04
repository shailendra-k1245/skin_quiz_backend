const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
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

module.exports = mongoose.model('products', productSchema);