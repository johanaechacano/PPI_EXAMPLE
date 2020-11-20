const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
 host: 'bltswwm6kvjs5jtuspfx-mysql.services.clever-cloud.com',
 user:'urxfbwauutd7btqb',
 password: 'IKKcPVWTRZ2BSucv0pTv',
 database: 'bltswwm6kvjs5jtuspfx',
 multipleStatements: true
});

mysqlConnection.connect(function (err){
  if (err){
    console.error(err);
    return;
  } else {
    console.log('BASE DE DATOS CONECTADA');
  }
}); 

module.exports = mysqlConnection;