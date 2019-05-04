const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );
app.listen( 8888, () => {
    console.log("start");
});