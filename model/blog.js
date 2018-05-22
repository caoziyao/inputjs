var fs = require('fs')

var blogFilePath = 'db/blog.json'


const loadBlogs = function() {
    // 确保文件有内容, 这里就不用处理文件不存在或者内容错误的情况了
    var content = fs.readFileSync(blogFilePath, 'utf8')
    var blogs = JSON.parse(content)
    return blogs
}


var b = {
  data: loadBlogs()
}


b.get = function(id) {
  var blogs
}



// 导出一个对象的时候用 module.exports = 对象 的方式
// 这样引用的时候就可以直接把模块当这个对象来用了(具体看使用方法)
module.exports = b
