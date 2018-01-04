angular.module('myApp').controller('ProfileController', ProfileController);

function ProfileController($location, $http) {
    var vm = this;
    $http.get('/api/users/myprofile').then(function (response) {
        if (response.status === 200) {
            vm.User = response.data.user;
        }
    });
}