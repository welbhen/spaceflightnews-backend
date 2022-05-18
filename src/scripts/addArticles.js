const fetch = require('node-fetch');

const mongoose = require('mongoose');
require('../models/Article');
const Article = mongoose.model('Article');
require('../database');

// Spaceflight News API:
    const url = 'https://api.spaceflightnewsapi.net/v3/articles';

const addArticles = async () => {
    try{
       await fetch(url, { method: 'GET' })
        .then((response) => {
            if(response.ok) {
                response.json()
                .then((res) => {
                    //console.log(res);
                    res.map((article) => {
                        setTimeout(() => {
                            Article.findOne({
                                id: article.id
                            })
                            .then((articleFound) => {
                                if(articleFound) {
                                    console.log("Article " + articleFound.id + " already exists!");
                                }else {
                                    const newArticle = {
                                        id: article.id,
                                        featured: article.featured,
                                        title: article.title,
                                        url: article.url,
                                        imageUrl: article.imageUrl,
                                        newsSite: article.newsSite,
                                        summary: article.summary,
                                        publishedAt: article.publishedAt,
                                        updatedAt: article.updatedAt,
                                        launches: article.launches,
                                        events: article.events
                                    }

                                    new Article(newArticle).save()
                                    .then(() => {
                                        console.log("Article saved to the DB!");
                                    })
                                    .catch((err) => {
                                        console.log("Error saving article: ", err);
                                    })
                                }
                            })
                            .catch((err) => {
                                console.log("Error searching for existing article: ", err);
                            });
                        }, 100);
                    });
                })
                .catch((err) => {
                    console.log("Error on response.json(): ", err);
                })
            }
        })
        .catch((err) => {
            console.log("Error fetching: ", err);
        })
    }catch(err){
        console.log("ERROR: ", err);
    };
};

addArticles();

module.exports = addArticles;