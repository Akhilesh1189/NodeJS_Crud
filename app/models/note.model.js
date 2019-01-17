
var sql = require('../config/sql');
var connection = require('../config/database');
var md5=require('md5');

//var encryptor = require('simple-encryptor')(connection.key);
//======================================== Change email ===============================

exports.signUp = function (userId, email, callback) {
    var query = 'CALL change_Email("' + userId + '","' + email + '","' + random + '")';
    sql.executeSql(query, function (err, data) {
        if (!err) {
            callback(null, data);
        }
        else {
            callback(err, null);
        }
    });
} 

// ============================================ verify email ==================================
