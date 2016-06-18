angular.module('cerebro', [])
.controller('mainCtrl', function($scope, $http) {
    $scope.menus = [
        {display : 'Sports', api : 'sports'},
        {display : 'Films', api : 'film'},
        {display : 'Technology', api : 'tech'}
    ];
});