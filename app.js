const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const serveStatic = require('serve-static');

const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/satelitedb', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
.then(db => console.log('DB está conectado'))
.catch(err => console.log(err));

const app = express();



//Settings
app.set('port', process.env.PORT || 7000);
app.set('appName', 'Mi primer servidor');
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(serveStatic(path.join(__dirname, 'public'), { 
  dotfiles: 'allow'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const routes = require('./routes/index');

app.use(routes);


app.use(function(req, res, next) {
  res.status(404).redirect("/");
});


//Iniciar el servidor

app.listen(app.get('port'), () => {
	console.log('server on port' + app.get('port'));
});

/*httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port 443');
});*/