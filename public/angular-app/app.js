angular.module('myApp', ['ngRoute', 'angular-jwt', 'ui.bootstrap']).config(config).run(run);

function config($httpProvider, $routeProvider) {
  $httpProvider.interceptors.push('AuthInterceptor');

  $routeProvider
    .when('/', {
      templateUrl: 'angular-app/home/home.html',
      controller: HomeController,
      controllerAs: 'vm',
      access:{
        restricted: false
      }
    })
    .when('/book/:id', {
      templateUrl: 'angular-app/book/book.html',
      controller: BookController,
      controllerAs: 'vm',
      access:{
        restricted: false
      }
    })
    .when('/browse', {
      templateUrl: 'angular-app/browse/browse.html',
      controller: HomeController,
      controllerAs: 'vm',
      access:{
        restricted: false
      }
    })
    .when('/register', {
      templateUrl: 'angular-app/register/register.html',
      controller: RegisterController,
      controllerAs: 'vm',
      access:{
        restricted: false
      }
      //css: ['angular-app/register/register.css']
    })
    .when('/login', {
      templateUrl: 'angular-app/login/login.html',
      controller: LoginController,
      controllerAs: 'vm',
      access:{
        restricted: false
      }
    })
    .when('/profile', {
      templateUrl: 'angular-app/profile/profile.html',
      controller: ProfileController,
      controllerAs: 'vm',
      access:{
        restricted: true
      }
    })
    .when('/test', {
      templateUrl: 'angular-app/test/test.html',
      controller: Car,
      controllerAs: 'vm',
      access:{
        restricted: false
      }
    })
    .otherwise({
      redirectTo: '/'
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
