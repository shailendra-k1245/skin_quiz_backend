const express = require('express');
const router = express.Router();
const Quiz2 = require('../models/quiz2.model')
router.post('',async(req,res)=>{
    try {
        const quiz2 = await Quiz2.create(req.body);
        return res.status(200).send(quiz2);
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

router.get('/',async(req, res)=>{
    try {
        const quiz2_data = await Quiz2.findById(req.params.id).populate('quiz1_id');
        return res.render("quizzes/quiz2")
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

router.get('/subscription',async(req, res)=>{
    try {
        return res.render("quizzes/subscription")
    } catch (err) {
        return res.status(500).send(err.message);
    }
})

    module.exports = router;