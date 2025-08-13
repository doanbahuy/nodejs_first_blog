const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;
const methodOverride = require('method-override')
const route = require('./routes');
const connectDB = require('./config/db');

// Connect to MongoDB
connectDB.connectDB();

const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTTP logger
// app.use(morgan('combined'));

// Template engine 
app.engine('handlebars', handlebars({
  helpers: {
    sum: (a, b) => a + b,
  },
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(methodOverride('_method'))

// Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
