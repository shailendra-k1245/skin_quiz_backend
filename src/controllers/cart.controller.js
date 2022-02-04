const express =  require('express');

const Cart =  require('../models/cart.model');

const router = express.Router();

router.get('', async(req, res) => {
  try {
    const cart = await Cart.find().lean().exec();
    return res.render('cart/cart', {cart} )
  } catch (err) {
    return res.status(500).send(err.message)
  }
})

module.exports = router