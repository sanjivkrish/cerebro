angular.module('cerebro', [])
.controller('mainCtrl', function($scope, $http) {
    //
    //
    //
    var serverAddress = 'http://localhost:3333';

    //
    // Top menus - categories of news
    //
    $scope.menus = [
        {display : 'Sports', api : 'sports'},
        {display : 'Films', api : 'film'},
        {display : 'Technology', api : 'tech'}
    ];

    //
    // Array of news content to be displayed
    //
    $scope.newsContent = [];

    //
    // Make a call for 'World' news
    //
    $http.get(serverAddress + '/world').then(function(res) {
        console.log(res.data);
        $scope.newsContent = res.data;
    }, function(err) {
        console.log('API news/world failed : ', err);
    });
});