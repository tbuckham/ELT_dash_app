//var sandbox = angular.module('sandbox', [])

// Define the `WizardController` controller on the `WizardApp` module
//sandbox.controller('SandboxController', function SandboxController($scope) {
    // enter wizadry here
//});


// Define the `ClassApp` module
var app = angular.module('app', ['chart.js', 'ngAnimate']);

app.controller("chart1", function ($scope) {
 
 //console.log(ChartObject);
  //$scope.chartData = ChartObject;
  $scope.labels = [];
  $scope.data = [];
  $scope.series = ['placeholder'];
  $scope.height_chart = window.innerHeight*0.9;
  $scope.options = {
    responsive: true,
    title: {display: "true", position: "top", text: "Student Average Scores", fontSize: 18},
    legend: {display: "false", position: "bottom"}
    
  };
  $scope.chartData = ChartObject;
  
  angular.forEach($scope.chartData, function (object) {
       if (object['average-score']) {
        $scope.data.push(object['average-score']);
        $scope.labels.push(object['user-id']);
       }
  
});

  console.log($scope.data);
  console.log($scope.labels);
  console.log($scope.chartData);
  
});
 
    
app.controller("chart2", function ($scope) {
 
  $scope.labels = [];
  $scope.data = [];
  $scope.series = ['placeholder'];
  $scope.height_chart = window.innerHeight*0.9;
  $scope.options = {
    responsive: true,
    title: {display: "true", position: "top", text: "Student time", fontSize: 18},
    legend: {display: "false", position: "bottom"}
    
    
  };
  $scope.chart2Data = ChartObject;
  
  angular.forEach($scope.chart2Data, function (object) {
       if (object['total-time']) {
        $scope.data.push(object['total-time']);
        $scope.labels.push(object['user-id']);
       }
  
});

  console.log($scope.data);
  console.log($scope.labels);
  console.log($scope.chart2Data);
  
}); 
   
