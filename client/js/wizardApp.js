// Define the `WizardApp` module
var WizardApp = angular.module('WizardApp', []);

// Define the `WizardController` controller on the `WizardApp` module
WizardApp.controller('WizardController', function WizardController($scope) {
  
  $scope.Users = UsersObject;
  
  // Perform any other Wizardy here

});