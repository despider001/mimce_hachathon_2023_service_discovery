const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', (req, res) => {
    const availableRoutes = {
        "/services": "All available services",
        "/models": "Database models"
    }
    res.status(200).json({ api: availableRoutes });
});

app.get('/services', (req, res) => {
    const services = fs.readFileSync(__dirname + '/data/services.json', 'utf-8');
    res.status(200).json(JSON.parse(services));
})

app.get('/models', (req, res) => {
    const models = fs.readFileSync(__dirname + '/data/models.json', 'utf-8');
    res.status(200).json(JSON.parse(models));
});

app.get('*', (req, res) => {
    res.redirect('/');
})

app.listen(3000, () => {
    console.log('App is running on 3000');
})