/**
 * Created by KINDHTML on 2015. 11. 30..
 */
var model = {
    user: '동욱',
    items: [
        { action: '출근하기', done: false },
        { action: '스터디 예습', done: true },
        { action: '도서 구매', done: false },
        { action: '데이트', done: true }
    ]
};


var todoApp = angular.module('todoApp', []);
todoApp.controller("TodoController", function($scope){
    $scope.todo = model;
});