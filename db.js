var mysql = require('mysql');

module.exports = {
    getData: function(sql, param, callback){
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'pharmacy'
        });

        connection.connect(function(err){
            if(err)
            {
                console.log('error connecting database ...');
            } else{
                console.log("Successfully connected to database.....")
            }
        });
        if(param == null)
        {
            connection.query(sql, function(err, result){
                callback(result);
            });
        }
        else
        {
            connection.query(sql, param, function(err,result){
                callback(result);
            });
        }
    }
};
