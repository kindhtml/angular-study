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

app.get('/money-book', function(req, res){
    res.sendFile(path.join(__dirname + '/public/html/money-book.html'));
});

app.get('/moneybook/data', function(req, res){
    var moneyBook = [
        {date: '2016. 1. 11. 오후 8:25:39', description : '저녁식사', money :7000},
        {date: '2016. 1. 12. 오전 7:29:49', description : '아침식사', money :3800},
        {date: '2016. 1. 12. 오전 11:45:19', description : '점심식사', money :5500}
    ];
    res.json(moneyBook);
});


app.listen(8080);
console.log('Express Listening on port 8080...');


