angular.module('myApp').directive('maNavigation', maNavigation);

function maNavigation() {
  return {
    restrict: 'E',
    templateUrl: 'angular-app/navigation-directive/navigation-directive.html'
  };
}