angular.module('myApp', ['ngRoute'])
.config(config);

function config($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'angular-app/home/home.html',
      controller: HomeController,
      controllerAs: 'vm'
    })
    .when('/book/:id', {
      templateUrl: 'angular-app/book/book.html',
      controller: BookController,
      controllerAs: 'vm'
    })
    .when('/browse', {
      templateUrl: 'angular-app/browse/browse.html',
      controller: HomeController,
      controllerAs: 'vm'
    });
}
