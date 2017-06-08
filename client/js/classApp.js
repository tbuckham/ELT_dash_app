// Define the `ClassApp` module
var ClassApp = angular.module('ClassApp', ['ui.bootstrap', 'ngAnimate']);

// Define the `ClassListController` controller on the `ClassApp` module
ClassApp.controller('ClassListController', function ClassListController($scope) {
  
  angular.forEach(CoursesObject, function(item1) {
    angular.forEach(ClassesObject, function(item2) {
      if(item1.id===item2['course-id']) {
        if(item1.classes){
          item1.classes.push(item2);
        }
        else{
          item1.classes = [];
          item1.classes.push(item2);
        }
      }
    });
  });
  // Find classes that match that course-id and attach them to a new course.classes attribute.
  $scope.Courses = CoursesObject;
  $scope.Classes = ClassesObject;

});