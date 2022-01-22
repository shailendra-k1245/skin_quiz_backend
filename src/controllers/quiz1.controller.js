const express = require('express');
const router = express.Router();
const Quiz1 = require("../models/quiz1.model");

router.post('',async(req,res) => {
    try {
        const quiz1 = await Quiz1.create(req.body);
        return res.status(200).send(quiz1);
    } catch (err) {
        return res.status(500).send(err.message);
    }  
});

router.get('/',async(req, res)=>{
    try {
        const quiz1_data = await Quiz1.findById(req.params.id).lean().exec();
         return res.render("quizzes/quiz1")
        // return res.status(200).send(quiz1_data);
    } catch (err) {
        return res.status(500).send(err.message);
    }
})
    module.exports = router;