const mysql= require('mysql');
const {promisify}=require('util');
const {database}=require('./configdb');
const pool= mysql.createPool(database);
pool.getConnection((err, connection)=>{
    if (err){
        console.error("Error de conexion a la bd");
    }
    if (connection) connection.release();
    console.log("conexion exitosa");
    return;
});

pool.query=promisify(pool.query);
module.exports=pool;