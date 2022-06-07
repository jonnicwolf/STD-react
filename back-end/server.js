// DEPENDENCIES
const app = require('./middlewear_app.js');

// CONFIGURATION
const process = require('dotenv').config();

const PORT = process.env.PORT;

// LISTEN
app.listen(PORT, ()=> 
    console.log(`🎧 Listening on port ${PORT} 🎧`)
);