// ../ 表示上一级目录
const blog = require('../model/blog')



var detailBlog = {
  path: '/api/blog/:id',
  method: 'get',
  func: function(request, response) {
    var id = Number(request.params.id)
    var b = blog.data
    var r = JSON.stringify(b)
    response.send(r)
  }
}



var routes = [
  detailBlog,
]

module.exports.routes = routes
