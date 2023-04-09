const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
const route = require('./routes')
const db = require('./config/db')
const bodyParser = require('body-parser');
const bb = require('express-busboy')
app.use(express.static(path.join(__dirname, 'public')));
const multer = require('multer');

require('dotenv').config()
const upload = multer({
    dest: 'uploads/'
});

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


port = 7000;
db.connect();
app.engine('.hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


route(app)

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`),
);
