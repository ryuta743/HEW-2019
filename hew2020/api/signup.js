import express from 'express';

const router = express.Router();

// sqlを読み込む
var mysql = require('mysql');

export default {
    path: '/api',
    handler: router
}

// mysqlと接続する
var db = mysql.createConnection({
    host: 'localhost', //後で変える
    user: 'root',
    password: 'root',
    database: 'tensyoku'
});

router.get('/createuser', function (req, res,) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    console.log('API届いたよ くそ');
    const name = req.query.name;
    console.log(name);
    const password = req.query.pass;
    const mail = req.query.mail;
    const gender = req.query.gender;
    const countory = req.query.countory;
    const type = req.query.user_type;
    const sql = `INSERT INTO user_lists VALUES (null,'${name}','${password}','${mail}','${countory}',${gender},'${type}','GETDATA()');`
    console.log(sql)
    db.query(sql, function (error) {
      if (error) return res.json(error);
      res.json(1);
    })
})

// (user_id,user_name,user_pass,user_mail,nationality,gender,user_type,createday) 