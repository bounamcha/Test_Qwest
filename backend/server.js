require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const path = require('path');

const app = express();

//------------------Data Base---------------//
mongoose.connect(process.env.DATABASE,{ useNewUrlParser: true,  useUnifiedTopology: true,useFindAndModify: false  ,useCreateIndex: true})
mongoose.connection.on('connected', () => {console.log('connected in the database');})
mongoose.connection.on('error', (err) => { console.log('error '+err);});


//------------------middlewares-------------//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': true}));

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use(cors());
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization, Accept, X-Request-With");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
  });
 

app.use(express.static(path.join(__dirname, 'dist ')));


//------------------routes-------------------//
const UserRouter = require('./routes/user.routes');
const PersonRouter = require('./routes/person.routes');
app.use('/user.routes', UserRouter);
app.use('/person.routes', PersonRouter);

 

//---------------server--------------//
const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
