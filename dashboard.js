/**
 * Created by grevi on 6/29/2017.
 */

var app = angular.module('dashboard', []);

app.controller('frame', function($scope) {
    $scope.username = '16@test.com';
    $scope.profile = function() {
        alert("you clicked edit profile");
    };
    $scope.logout = function() {
        alert("you clicked log out");
    };
    }
);

app.controller('topSection', function($scope) {
    $scope.editProfile = function() {
        alert("you clicked edit profile");
    }
});
