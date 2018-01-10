

angular.module('myApp').controller('RegisterController', RegisterController);

function RegisterController($http, $window, AuthFactory, $rootScope) {
    var vm = this;
    vm.step="one"; 

    vm.stepOne=stepOne;

    function stepOne(){
      vm.step="one";
    }

    vm.stepTwo=stepTwo;

    function stepTwo(){
      vm.step="two";
    }

    vm.stepThree=stepThree;
    
        function stepThree(){
          vm.step="three";
        }
  
    vm.register = function() {
      var user = {
        email: vm.email,
        username: vm.username,
        password: vm.password,
        age: vm.age,
        genres: vm.genres
      };
  
      if (!vm.email || !vm.username || !vm.password || !vm.age || !vm.genres) {
        vm.error = 'Please add valid email, username, password and complete information about age and genres.';
      } else {
        if (vm.password !== vm.passwordRepeat) {
          vm.error = 'Please make sure the passwords match.';
        } else {
          $http.post('/api/users/register', user).then(function(result) {
            console.log(result);
            AuthFactory.isLoggedIn = true;
            $window.location.href = '#';
            vm.error = '';
            $rootScope.$broadcast('login', vm);
          }).catch(function(error) {
            console.log(error);
          });
        }
      }
    }
  };