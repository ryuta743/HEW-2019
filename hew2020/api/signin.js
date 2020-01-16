import express from 'express'

// expressの読み込み
var app = express();

// var express = require('express');

const router = express.Router();

export default {
    path: '/api',
    handler: router
}

router.use((req, res, next) => {
    Object.setPrototypeOf(req, app.request)
    Object.setPrototypeOf(res, app.response)
    req.res = res
    res.req = req
    next()
})



router.post('/sessionin', function (req, res) {
    console.log('セッションスタート');
    const id = req.body.id;
    console.log(id);
    if(id){
      req.session.loginuserdata = {user_id : id}
      console.log(req.session.loginuserdata)
      return res.json({user_id : id})
    }
    return res.status(401).json({ message: 'Bad credentials' })
})

