angular.module('myApp', ['ngRoute', 'angular-jwt']).config(config).run(run);

function config($httpProvider, $routeProvider) {
  $httpProvider.interceptors.push('AuthInterceptor');  
  
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
    })
    .when('/register', {
      templateUrl: 'angular-app/register/register.html',
      controller: RegisterController,
      controllerAs: 'vm',
      //css: ['angular-app/register/register.css']
    })
    .when('/register2', {
      templateUrl: 'angular-app/register/register2.html'
    })
    .when('/register3', {
      templateUrl: 'angular-app/register/register3.html'
    })
    .when('/login', {
      templateUrl: 'angular-app/login/login.html',
      controller: LoginController,
      controllerAs: 'vm'
    })
    .when('/profile', {
      templateUrl: 'angular-app/profile/profile.html',
  
    });
}


function run($rootScope, $location, $window, AuthFactory) {
  $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
    if (nextRoute.access !== undefined && nextRoute.access.restricted && !$window.sessionStorage.token && !AuthFactory.isLoggedIn) {
      event.preventDefault();
      $location.path('/');
    }
  });
}
