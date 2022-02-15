import express from 'express';
import mysql from 'mysql';

const db = mysql.createConnection({
    host: "database-2.c5vqsol7uibo.ap-south-1.rds.amazonaws.com",
    port: "3306",
    user: "admin",
    password: "amar123456",
    database: "shope"
});
db.connect((err)=>{
    if (err) {
        console.log(err.message);
        return;
    }
    console.log("Database connected");
});
