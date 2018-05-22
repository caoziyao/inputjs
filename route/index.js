// 导入 util.js
const util = require('../util')
const pinyin_dict_notone = require('../static/pinyin_dict_notone')

var pinyinDictNotone = pinyin_dict_notone.pinyin_dict_notone
var log = util.log

var wordsLib = null;
var wordLibZH = null
var fs = require('fs')

fs.readFile('static/en.txt', function (err, data) {
   if (err) {
       return console.error(err);
   }
   data = data.toString();
   wordsLib = data.split('\n').map((value, index, arr)=>{
     return value.trim()
   })
});

function listFromValue(line) {
  var arr = line.split(' ').map((v)=>{
    if (v !== '') {
      return v
    }
  })
  return arr
}

fs.readFile('static/zh.txt', function (err, data) {
   if (err) {
       return console.error(err);
   }
   data = data.toString();
   wordLibZH = data.split('\n').map((value, index, arr)=>{
     var value = value.trim()
     return value
   })
});


var sendHtml = function(path, response) {
    var fs = require('fs')
    var options = {
        encoding: 'utf-8'
    }

    path = 'template/' + path
    fs.readFile(path, options, function(err, data){
        // console.log(`读取的html文件 ${path} 内容是`, data)
        // 替换参数
        response.send(data)
    })
}


var wordsFromLibEN = function (key) {
  if (wordsLib == null || key == undefined) {
    return [];
  }

  let lenKey = key.length;
  var res = []
  for (let i = 0; i < wordsLib.length; i++) {
    var word = wordsLib[i]
    if (word.substring(0, lenKey) == key) {
      res.push(word)
      if (res.length == 10) {
        break
      }
    }
  }
  log('res', res)
  return res;
}

var keyFromNotoneLib = function (pinyin) {

  let keys = Object.keys(pinyinDictNotone)
  let lenPinyin = pinyin.length

  let l = []
  for (let k of keys) {
    if (k.substring(0, lenPinyin) === pinyin) {
      l.push(k)
    }
  }

  return l
}

var notoneFromPinyin = function (pinyin) {

  var keys = keyFromNotoneLib(pinyin)

  let wordString = ''
  for (let k of keys) {
    s = pinyinDictNotone[k]
    wordString += s
  }
  var l = []
  if (wordString) {
    for (let e of wordString) {
      l.push(e)
    }
  } else {
    l = []
  }

  return l
}

var isValidWords = function (words, notone, index) {

  let w = words[index]
  for (let one of notone) {
    if (w === one) {
      return true
    }
  }
  return false

  // for (let i = 0; i < words.length; i++) {
  //   let w = words[i]
  //   for (let one of notone) {
  //     if (w === one) {
  //       return true
  //     }
  //   }
  // }
  // return false
}

var wordsByPinyin = function (pinyin) {

  let res = []
  let key = ''
  for (let i = 0; i < pinyin.length; i++) {
    let p = pinyin[i]
    key += p

    let notone = notoneFromPinyin(key)

    for (let j = 0; j < wordLibZH.length; j++) {
      var words = wordLibZH[j]
      if (isValidWords(words, notone, index)) {
        index += 1
        pinyin = pinyinString.substring(i, pinyinString.length)
        res.push(words)
      }

    }
    return res
  }
}

function removeSame(arr) {
    return arr.filter((item) =>
    arr.indexOf(item) === arr.lastIndexOf(item));
}

function concatArray(arrA, arrB) {
  let arr = arrA.concat(arrB)
  a = removeSame(arr)
  return a
}

var wordsFromLibZH = function (pinyinString) {
  if (wordLibZH == null || pinyinString == undefined) {
    return [];
  }
  let pinyin = pinyinString

  let lenKey = pinyin.length;

  let index = 0

  let notone = []
  let key = ''
  var res = []
  let wordLibZHTmp = wordLibZH.concat([])

  for (let i = 0; i < lenKey; i++) {
    let p = pinyin[i]
    key += p
    notone = notoneFromPinyin(key)
    var resTmp = []
    for (let j = 0; j < wordLibZHTmp.length; j++) {
      var words = wordLibZHTmp[j]
      if (isValidWords(words, notone, index)) {
        index += 1
        key = ''
        resTmp.push(words)
      }
    }
    wordLibZHTmp = resTmp
  }

  res = wordLibZHTmp

  // for (let i = 0; i < wordLibZH.length; i++) {
  //   var words = wordLibZH[i]
  //   if (isValidWords(words, notone, index)) {
  //     res.push(words)
  //   }
  //
  // }
  // log('res', res)
  return res;
}


var apiWordsList = {
  path: '/api/words_list',
  method: 'get',
  func: function(request, response) {
    let query = request.query
    let key = query.word
    let words = wordsFromLibZH(key)
    response.send(words)
  }
}


var index = {
  path: '/',
  method: 'get',
  func: function(request, response) {
    var path = 'main.html'
    // log('index request', request)
    sendHtml(path, response)
  }
}


var routes = [
  index,
  apiWordsList,
]

module.exports.routes = routes
