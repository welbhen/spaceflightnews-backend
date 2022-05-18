const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
require('../models/Article');
const Article = mongoose.model('Article');
require('../database');

router.get('/', (req, res) => {
    try{
        res.status(200).json({
            error: false,
            message: "Fullstack Challenge 2021 🏅 - Space Flight News"
        });
    }catch(err){
        res.json({
            error: true,
            message: err.message
        });
    }
});

router.get('/articles/', async (req, res) => {
    try{
        // Pagination:
            const page = req.query.page;
            const limit = req.query.limit;

            const startIndex = (page - 1) * limit;
            const endIndex = page * limit;

        //let articles = await Article.find().lean();
        let articles = await Article.find().limit(limit).skip(startIndex).lean();
        res.status(200).json({
            error: false,
            articles
        });
    }catch(err){
        res.json({
            error: true,
            message: err.message
        });
    }
});

router.get('/articles/:id', async (req, res) => {
    try{
        Article.findOne({
            id: req.params.id
        })
        .then((articleFound) => {
            if(articleFound){
                res.status(200).json({
                    error: false,
                    articleFound
                });
            }else {
                res.status(400).json({
                    error: true,
                    message: "No article found with this ID!"
                });
            }
        })
        .catch((err) => {
            console.log("Error finding article: ", err);
            res.json({
                error: true,
                message: err.message
            })
        });
        
    }catch(err){
        res.json({
            error: true,
            message: err.message
        });
    }
});

module.exports = router;