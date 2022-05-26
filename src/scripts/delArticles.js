const mongoose = require('mongoose');
require('../models/Article');
const Article = mongoose.model('Article');
require('../database');


const delArticles = async () => {
    try{
        Article.deleteMany({
            //empty filter -> delete all
        })
        .then(() => {
            console.log("All documents from the Collection were deleted!");
        })
        .catch((err) => {
            console.log("Error deleting documents from the Collection: " + err);
        });
    }catch(err){
        console.log("ERROR: ", err);
    };
};

delArticles();

module.exports = delArticles;