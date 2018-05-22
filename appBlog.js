// 导入库文件
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

// 导入 util.js
const util = require('./util')
var log = util.log

// 配置静态文件目录
app.use(bodyParser.json())
app.use(express.static('static'))

// 注册路由函数
const registerRoutes = function(app, routes) {
  for (var i = 0; i < routes.length; i++) {
    var route = routes[i]
    log('route', route)
    app[route.method](route.path, route.func)

  }
}

// 导入 index 路由
const routeIndex = require('./route/index')
registerRoutes(app, routeIndex.routes)

// 导入 blog 路由
const routeBlog = require('./route/blog')
registerRoutes(app, routeBlog.routes)


var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port

  log("address  http://%s:%s", host, port)
})






























//
