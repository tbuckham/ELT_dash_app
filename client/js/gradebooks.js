var gradebookApp = angular.module('gradebookApp', ['ui.bootstrap', 'ngAnimate']);

// Define the `gradebooksController` controller on the `gradebooks` module
gradebookApp.controller('gradebookAppController', function gradebookAppController($scope) {
    // enter wizadry here

    console.log(GradebookObject);
     $scope.Gradebooks = GradebookObject;
     
     $scope.greaterThan = function(prop, val){
    return function(item){
      if (item[prop] > val) return true;
    }
  }
       $scope.lessThan = function(prop, val){
    return function(item){
      if (item[prop] < val && item[prop]) return true;
    }
  }
    $scope.passing = function(prop, val, val2){
    return function(item){
      if (item[prop] > val && item[prop] < val2) return true;
      
    }
  }
     
});


