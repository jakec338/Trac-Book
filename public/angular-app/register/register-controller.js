angular.module('myApp').controller('RegisterController', RegisterController);

function RegisterController($http) {
    var vm = this;
  
    vm.register = function() {
      var user = {
        email: vm.email,
        username: vm.username,
        password: vm.password
      };
  
      if (!vm.email || !vm.username || !vm.password) {
        vm.error = 'Please add valid email, username and password.';
      } else {
        if (vm.password !== vm.passwordRepeat) {
          vm.error = 'Please make sure the passwords match.';
        } else {
          $http.post('/api/users/register', user).then(function(result) {
            console.log(result);
            vm.message = 'Successful registration, please login.';
            vm.error = '';
          }).catch(function(error) {
            console.log(error);
          });
        }
      }
    }
  };
  