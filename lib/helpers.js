// Helper functions used across the project

function getYesterdaysDate() {
    var d = new Date();
    d.setDate (d.getDate() - 1);
    return d;
}

function convertToYYYMMDD(d) {
    var month = (d.getMonth() + 1).toString(); // JS getMonth() is 0 based
    month = month.length == 1 ? '0' + month : month;
    var date = d.getDate().toString().length == 1 ? '0' + d.getDate().toString() : d.getDate().toString();
    return d.getFullYear().toString() +  '-' + month + '-' + date;
}

exports.getYesterdaysDate = getYesterdaysDate;
exports.convertToYYYMMDD = convertToYYYMMDD;
