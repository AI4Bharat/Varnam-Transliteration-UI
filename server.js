#!/bin/env node

var express = require('express');
var path    = require('path');
var favicon = require('serve-favicon');
var compress = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var session = require('express-session');

// var port    = process.env.VARNAM_WEB_PORT || 3000;
var port = process.env.PORT || 3000;

// Create "express" server.
app = express();

// --------------------- ROUTES --------------------- //

// Force redirect to HTTPS
app.use(function(req, res, next) {
  if (req.hostname != 'localhost' && req.get('X-Forwarded-Proto') == 'http') {
    res.redirect(`https://${req.hostname}${req.url}`);
    return;
  }
  next();
});

app.set('port', port);
app.set('root_directory', __dirname);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('view cache', true);
app.use(favicon(path.join(__dirname, 'favicon.ico')));
app.use(compress());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(cookieParser('ai4b-cookie'));
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'ai4b-session'
}));
app.use(express.static(path.join(__dirname, 'public')));


var functions = require('./lib/index.js');
var helper = require('./lib/helpers.js');

app.get('/editor', function(req, res) {
  	res.render('editor');
});

app.get('/', function(req, res) {
      res.render('index', { title: 'AI4Bharat Transliterator' });
      // res.redirect("/editor");
});

app.get('/downloads', function (req, res) {
	res.redirect("/docs/downloads");
});
app.get('/docs', functions.serveDocs);
app.get('/docs/*', functions.serveDocs);

// Handle 404 - Keep this as a last route
app.use(function(req, res) {
    res.status(404).sendFile(__dirname+'/views/404.html');
  });

// --------------------- END OF ROUTES --------------------- //

//  terminator === the termination handler.
function terminator(sig) {
   if (typeof sig === "string") {
      console.log('%s: Received %s - terminating Node server ...',
                  Date(Date.now()), sig);
      process.exit(1);
   }
   console.log('%s: Node server stopped.', Date(Date.now()) );
}

//  Process on exit and signals.
process.on('exit', function() { terminator(); });

['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT', 'SIGBUS',
 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGPIPE', 'SIGTERM'
].forEach(function(element, index, array) {
    process.on(element, function() { terminator(element); });
});

//  And start the app on that interface (and port).
app.listen(port, function() {
   console.log('%s: Node server started on port:%d ...', Date(Date.now() ),
               port);
});

module.exports = app;
