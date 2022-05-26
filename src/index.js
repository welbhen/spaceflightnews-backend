// Imports:
    const express = require('express');
    const app = express();
    const morgan = require('morgan');
    const cors = require('cors');
    const CronJob = require('cron').CronJob;
    const addArticles = require('../src/scripts/addArticles.js');


// Config .env
    const path = require('path');
    const dotenv = require('dotenv');
    dotenv.config({ path: path.resolve(__dirname, '../.env')});

// Other Configs:
    app.use(cors({ 
        methods: "GET,POST,PUT,DELETE",
        credentials: true
    }));
    app.use(morgan('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

// Routes:
    // Main routes:
        app.use('/', require('./routes/main.routes'));

// Server:
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
        console.log("Env: " + process.env.NODE_ENV);
        console.log("Server opened! Port: " + PORT);

        // CRON:
            const job = new CronJob('0 0 9 1/1 * *', () => {
                console.log("Updating articles...");
                addArticles();
            }, null, true, 'America/Sao_Paulo');

    });