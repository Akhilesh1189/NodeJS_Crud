const sql = require('mssql/msnodesqlv8')

var connect = function() {
    var conn = new sql.ConnectionPool({
        driver: "msnodesqlv8",
        server: 'DESKTOP-UQSA6MG',
        database: 'herdum',
        user: 'name',
        password: '',
        port: 1433,
        options: {
            trustedConnection: true,
            useUTC: true
          }   
    });
 
    return conn;
};

module.exports = connect;