//DEPENDENCIES
// const { ViewModuleSharp } = require('@material-ui/icons');
const cors = require('cors');
const express = require('express');

const productsController = require('./controllers/productsController.js');

const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());

app.use('/',productsController);

//ROUTES
app.get('*',(request,response)=>{
    response.status(404).send('404: Page not found.');
});

const db = require('./db/dbConfig.js');

app.get('/', async (request,response)=>{
    try {
        const allProducts = await db.any("SELECT * FROM photobucket");
        response.json(allProducts);
    }
    catch (err) {
        response.json(err);
    };
});


module.exports = app;