/**
 * Created by KINDHTML on 2015. 12. 10..
 */

var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

/*
 app.get('/', function(req, res){
 res.sendFile(path.join(__dirname + '/public/html/index.html'));
 });
 app.get('/todo', function(req, res){
 res.sendFile(path.join(__dirname + '/public/html/todo.html'));
 });
 */

app.get('/products', function(req, res){
    res.sendFile(path.join(__dirname + '/public/html/products.html'));
});

app.get('/books', function(req, res){
   res.sendFile(path.join(__dirname + '/public/html/books.html'));
});

app.get('/hello', function(req, res){
    res.sendFile(path.join(__dirname + '/public/html/hello.html'));
});

app.listen(8080);
console.log('Express Listening on port 8080...');