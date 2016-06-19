angular.module('cerebro', [])
.controller('mainCtrl', function($scope, $http) {
    //
    // Address to which the api requests are send
    //
    var serverAddress = 'http://localhost:3333';

    //
    // Top menus - categories of news
    //
    $scope.menus = [
        {display : 'Sports', api : 'sports'},
        {display : 'Films', api : 'films'},
        {display : 'Technology', api : 'technology'}
    ];

    //
    // Array of news content to be displayed
    //
    $scope.newsContent = [];

    //
    // Make a call for 'World' news
    //
    $http.get(serverAddress + '/world').then(function(res) {
        $scope.newsContent = res.data;
    }, function(err) {
        console.log('API news/world failed : ', err);
    });

    //
    // Switch Menu
    //
    $scope.switchMenu = function(api) {
        //
        // Make a call for requested menu
        //
        $http.get(serverAddress + '/' + api).then(function(res) {
            $scope.newsContent = res.data;
        }, function(err) {
            console.log('Error : ', err);
        });
    };
});