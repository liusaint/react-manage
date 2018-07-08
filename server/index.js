'use strict'

const path = require('path')
const express = require('express')

var server;

// default port where dev server listens for incoming traffic
const port = 3001;

const app = express()

//设置cors跨域
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
    next();
};
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
  res.send(resData);
});
