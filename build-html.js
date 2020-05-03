var fs = require('fs'),
    ejs = require("ejs"),
    path = require("path");

function ejs2html(srcPath, destPath, information) {
    srcPath = path.join(__dirname, srcPath);
    if (!destPath) {
        destPath = path.parse(srcPath);
        destPath = path.join(destPath.dir, destPath.name + '.html');
    } else destPath = path.join(__dirname, destPath);
    
    ejs.renderFile(srcPath, function (err, html) {
        if (err) {
            console.log("ERROR: " + err);
            return false;
        }
        fs.writeFile(destPath, html, function (err) {
            if (err) {
                console.log(err);
                return false
            }
            return true;
        });
    })
}
ejs2html('views/index.ejs', 'public/index.html');
ejs2html('views/editor.ejs', 'public/editor.html');
