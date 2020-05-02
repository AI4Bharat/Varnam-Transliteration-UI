var functions = require('../lib');
var helper = require('../lib/helpers.js');

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
app.use(function(req, res, next) {
      helper.render404(res);
  });
