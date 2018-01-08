angular.module('myApp').controller('TestController', TestController).directive('myPrepareText', function() {
return {
  restrict: 'A',
  template: '<div><span ng-repeat="word in words" ng-click="highlight($event)">{{word}} </span></div>',
  link: function($scope, $element) {
    $scope.words = $element.attr('words').split(' ');
    $scope.highlight = function(event){
      angular.element(event.target).append('<input type="checkbox" ng-model="input.checked"/><button ng-if="input.checked" ng-click="input.checked=false">X</button>');
    };
  }
};
  });;


function TestController() {
      var vm = this;
      
  }