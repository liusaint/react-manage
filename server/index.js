'use strict'

const path = require('path')
const express = require('express')

var server;

// default port where dev server listens for incoming traffic
const port = 3001;

const app = express()

//设置cors跨域
var allowCrossDomain = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", req.headers.origin||"*"); //需要显示设置来源
    
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
    next();
};
// 设置了代理，这里先注释
app.use(allowCrossDomain);



// serve pure static assets
const staticPath = path.posix.join('', 'static')
app.use(staticPath, express.static('./static'))

const uri = 'http://localhost:' + port

var _resolve
var _reject
var readyPromise = new Promise((resolve, reject) => {
  _resolve = resolve
  _reject = reject
})


var portfinder = require('portfinder')
portfinder.basePort = port

console.log('> Starting dev server...')

  portfinder.getPort((err, port) => {
    if (err) {
      _reject(err)
    }
    process.env.PORT = port
    var uri = 'http://localhost:' + port
    console.log('> Listening at ' + uri + '\n')
    // when env is testing, don't need open it

    server = app.listen(port)
    _resolve()
  })


// module.exports = {
//   ready: readyPromise,
//   close: () => {
//     server.close()
//   }
// }

app.get('/home', function(req, res, next){

  var resData = {
    status: 1,
    data: [{
        url:'/1',
        text:'我的审批',
        id:1
      },
      {
        url:'/2',
        text:'消息中心',
        id:2
      },]
  }
  setTimeout(()=>{
    res.send(resData);
  },1000)
});


app.get('/notice-list', function(req, res, next){

  var resData = {
    status: 1,
    data: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
  }
  setTimeout(()=>{
    res.send(resData);
  },1000)
  
});

app.get('/login', function(req, res, next){

  var resData = {
    status: 1
  }
  res.header('Set-Cookie','islogin=true;path=/;');
  // setTimeout(()=>{
    res.send(resData);
    res.end();
  // },1000)
});


app.get('/get-user-info', function(req, res, next){

  var Cookies = {};
  req.headers.cookie && req.headers.cookie.split(';').forEach(function( Cookie ) {
      var parts = Cookie.split('=');
      Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
  });

  var resData = {};

  if (Cookies.islogin == 'true') {
    resData = {
      status: 1,
      data: {
        username: 'ls',
        email: '841766635@qq.com',
        age: 25
      }
    }
  } else {
    resData = {
      status: 0,
      msg:'not login'
    }
  }
  setTimeout(()=>{
    res.send(resData);
  },1000)
  
});