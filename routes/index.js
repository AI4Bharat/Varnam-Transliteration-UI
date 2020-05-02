app.get('/editor', function(req, res) {
  	res.render('editor');
});

app.get('/', function(req, res) {
      res.render('index', { title: 'AI4Bharat Transliterator' });
      // res.redirect("/editor");
});

// app.get('/downloads', function (req, res) {
// 	res.redirect("/docs/downloads");
// });
// app.get('/docs', functions.serveDocs);
// app.get('/docs/*', functions.serveDocs);

//app.get("*", function(req, res) {
//    res.status(404).sendfile('404.html');
//});
