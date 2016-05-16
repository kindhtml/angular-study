/**
 * Created by KINDHTML on 2016. 1. 12..
 */
angular.module("moneyBook", [])
.controller ("moneyBookCtrl", function ($scope, $filter, $http) {
    $scope.loadData = function () {
        $http.get('/moneybook/data')
            .success(function(data){
                $scope.items = data;
            });
    }

    $scope.moneyBookAdd = function(){
        $scope.items.push({
            description: $scope.description,
            money: $scope.money

        });
    }

    $scope.totalMoney = function () {
        var sum = 0,
            histories = $scope.money;

        if (angular.isArray(histories)) {
            for (var i=0; i<histories.length; i++) {
                sum += parseInt(histories[i].money);
            }
        }
        return sum;
    }

})