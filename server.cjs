// server.js
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var history = require('connect-history-api-fallback') // 追加 404回避

app = express();
app.use(history()); // 404回避 https://qiita.com/homusuke/items/52ee98a4daa49c9f94e9
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);