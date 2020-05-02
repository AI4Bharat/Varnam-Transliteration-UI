var helper = require('./helpers.js'),
    fs = require('fs'),
    md = require('marked').parse,
    regexp = new RegExp(/\{([^}]+)\}/);

md.setOptions({
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value;
  }
});

// Key will be the full path name to the .md file
// Value will be a a hash with 'title' and 'html' keys
var docsCache = {};

function serveDocs(req, res) {
    var viewToRender = 'index';
    if (req.params.length > 0 && req.params[0].length != '') {
        viewToRender = req.params[0];
    }
    var fileToRender = app.get('root_directory') + '/docs/' + viewToRender + '.md';
    if (fileToRender in docsCache) {
        var item = docsCache[fileToRender];
        res.render('docs', {content: item.html, title: item.title});
    }
    else {
        fs.readFile(fileToRender, 'utf8', function(err, str) {
            if (err) {
                console.log (err);
                helper.render404 (res);
            }
            else {
                try {
                    var matches = str.match(regexp);
                    var title = (matches != null && matches.length > 1) ? matches[1] : '';
                    var html = md(str);
                    html = html.replace(/\{([^}]+)\}/, function(_, name){return '';});
                    docsCache[fileToRender] = {title: title, html: html};
                    res.render('docs', {content: html, title: title});
                } catch(err) {
                    console.log (err);
                    helper.render404 (res);
                }
            }
        });    
    }
}

exports.serveDocs = serveDocs;
