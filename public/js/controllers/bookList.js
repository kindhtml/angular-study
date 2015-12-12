/**
 * Created by KINDHTML on 2015. 12. 10..
 */
angular.module('book')
    .controller('bookListCtrl', function($scope, $filter){
        var selectedCategory = null;

        $scope.selectCategory = function(newCategory){
            selectedCategory = newCategory;
        };

        $scope.categoryFilterFn = function(book){
            return selectedCategory == null || book.category == selectedCategory;
        }

    });
