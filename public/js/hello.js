/**
 * Created by KINDHTML on 2015. 12. 12..
 */
angular.module('hello', [])
.controller('HelloController', function($scope, $filter){
    $scope.hello = {
        msg: 'hello!'
    }

    $scope.toUpper = function(){
        $scope.hello.msg = $filter('uppercase')($scope.hello.msg);
    }

    $scope.delete = function(index){
        $scope.items.splice(index, 1);
    }

    $scope.items = [
        {
            title : 'ballpen',
            count : 4,
            price : 1800
        },
        {
            title : 'ballpen2',
            count : 1,
            price : 800
        },
        {
            title : 'ballpen3',
            count : 12,
            price : 400
        }

    ];

});