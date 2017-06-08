angular.module('dashboard')
 
//controller for Fusion Gauge chart - pulls in the required chart data values from 'fusionGaugeChart' factory
.controller('currentProgress', ['$scope', 'fusionGaugeChart', function ($scope, fusionGaugeChart) {
 
$scope.myDataSource = fusionGaugeChart.getData();
 
  $scope.gradebookData = GradebookObject;  //provides all the gradebook objects
  $scope.scores = [];    //empty array to hold the individual average score values for subsequent calculation
  
  //push each gradebook score into a $scope.scores array to allow calculating the average
 angular.forEach($scope.gradebookData, function (object) {
      if (object['average-score']) {
       $scope.scores.push(object['average-score']);
      }
});

//calculate the average score of the values in $scope.scores
 var thisTotal=0,thisAverage=0;
// add elements of array together
 for(i=0; i<$scope.scores.length; i++)
  {thisTotal+=$scope.scores[i];}
// calculate average
 thisAverage=(thisTotal/$scope.scores.length);
// display result
// console.log(thisAverage);
 var startvalue = thisAverage; 
 //not sure if we need to convert the number to a string or not...?


 //use the 'startvalue' variable to show a dotted/marked line highlighting the average score
 $scope.myDataSource.dials.dial[0].value = $scope.gradebookData[11]['average-score']; //mmarcon is user 11, but calculated-score reporting as 0 so replaced with a temp user
 //console.log($scope.gradebookData[11]);

//use the 'startvalue' variable to move the main gauge dial to highlight the average score
$scope.myDataSource.trendpoints.point[0].startvalue = startvalue;
                
console.log($scope.myDataSource.trendpoints.point[0]); // shows the items in the first object in 'point'
//console.log($scope.myDataSource.trendpoints.point);   // shows all the items in 'point' - to show the average score is provided to the trendpoints data
console.log($scope.myDataSource.dials.dial);  // shows all the items in 'dial' - to show the average score is provided to the dial data

console.log($scope.gradebookData);     //console logs to show the main gradebook data    
console.log($scope.myDataSource);
}])




//this controller covers handling of the unit scores data - used by Chartist line chart
.controller('student_unit_avgscore_chart', ['$scope', 'chartistLineChartFactory', function ($scope, chartistLineChartFactory) {

  $scope.data = chartistLineChartFactory.getData();
  $scope.options = chartistLineChartFactory.getOptions();

  $scope.unitData = UnitObject; 

// Create a new line chart object where as first parameter we pass in a selector
// that is resolving to our chart container element. The Second parameter is the actual data object.
new Chartist.Line('.ct-chart', $scope.data, $scope.options);
    
  angular.forEach($scope.unitData.unitscores, function (object) {
       if (object['calc-percentage-score']) {
        $scope.data.series[0].push(object['calc-percentage-score']);
        $scope.data.labels.push(object['unit-name']);
       // $scope.data.series[0].imageUrl = 'img/star_image.png'; 
        //adds the icon URL to the series data
       }
    });

 console.log($scope.data.series);
  console.log($scope.data.labels);
    console.log($scope.data);
  //console.log($scope.data.series[0].imageUrl); - earlier code used to check that the correct star icon was mapped and added to the line chart (now removed)


var chart = new Chartist.Bar('.skills-chart', {
  labels: ['Listening', 'Speaking', 'Reading', 'Writing', 'Grammar'],
  series: [
    [10, 20, 40, 60, 60]
  ]
  
}, {
    high: 100,
//
  plugins: [
   // Chartist.plugins.ctBarLabels({
    //  barAnchor: 'middle'
    //}),  
    Chartist.plugins.ctAxisTitle({
      axisX: {
        axisTitle: 'Skill type',
        axisClass: 'ct-axis-title',
        offset: {
          x: 0,
          y: 30
        },
        textAnchor: 'middle'
      },
      axisY: {
        axisTitle: 'Performance',
        axisClass: 'ct-axis-title',
        offset: {
          x: 10,
          y: -5
        },
        textAnchor: 'middle',
        flipTitle: false
      }
    }),
  ]
});


}])



//this controls the content-level data - used in the best / worst / most recent content panels
//have added in loads of data for best/worst content here for ease, rather than a new controller...
 
.controller('contentDataController', function ($scope, $http) {  
  $scope.contentData = ContentObject;
 

//for sorting the best/worst/to-be-started content lists

 $scope.highContent = [];
 $scope.lowContent = [];
 $scope.notStarted = [];
 $scope.mostRecent = [];
 $scope.contentToPractice = [];
 
 
 //variables for page filtering for content not started
 $scope.currentPage = 0;
 $scope.pageSize = 6;
 $scope.increment = 0;
 

 angular.forEach($scope.contentData, function (object) {
       if (object['calc-percentage-score'] > 50) {
        $scope.highContent.push(object['content-name']); 
       }
        else if (object['calc-percentage-score'] && object['calc-percentage-score'] < 50) {  
            $scope.lowContent.push(object['content-name']) ;
        }
       });
    
 angular.forEach($scope.contentData, function (object) {
        if (object['calc-percentage-score'] === 0) {
             $scope.notStarted.push(object['content-name']) ;
        }
 //        else if (object['calc-percentage-score'] && object['calc-percentage-score'] > 50) {  
 //          $scope.contentToPractice.push(object['content-name']) ;
 //       }
 });
 
  angular.forEach($scope.contentData, function (object) {
        if (object['calc-percentage-score']) {
             $scope.mostRecent.push({
                 name: object['content-name'],
                 time: object['time-accessed']
        });
        }
  });
     
    console.log($scope.notStarted);   console.log($scope.mostRecent);  console.log($scope.totalContent);
     
    $scope.progress = $scope.highContent.length / $scope.contentData.length * 100;
    console.log($scope.progress);
     
 
$scope.progressChart = 
    new Chartist.Pie('.ct-chartProgress',
    {
        series: [],
        labels: ['Mastered', 'To Complete', 'Not Started']
    }, {
        donut: true,
        donutWidth: 50,
        startAngle: 210,
        total: $scope.contentData.length,
        showLabel: false,
        plugins: [
            Chartist.plugins.fillDonut({
                items: [{
                    content: '<i class="img-responsive"></i>',
                    position: 'relative',
                    offsetY : 10,
                    offsetX: -2
                }, {
                    content: ''//<img class="img-responsive" src="img/studying_Student.png">'
                }]
            })
        ],
    });

$scope.progressChart.data.series.push($scope.lowContent.length, $scope.highContent.length, $scope.notStarted.length );
console.log($scope.progressChart.data.series);

})


.controller('scoreBasedProgressController', ['$scope', 'newProgressCalculator', function ($scope, newProgressCalculator) {  
 
//this moves the server side content data into a variable, so it can be passed to the Factory to process. 
$scope.contentData = ContentObject;
var data = [];
data.push($scope.contentData);

//calls the Factory function and passes the array of content objects as data
$scope.items = newProgressCalculator.contentItems(data[0]);

$scope.progress = newProgressCalculator.progressAverage();

console.log(data[0]);
console.log($scope.items);
//console.log($scope.notStarted); - previously this was rendering the items not started, despite not being declared in the $scope. 
//Moving the 'foreach' function that references the variable 'notStarted' into the 'notStarted() function allowed $scope.toComplete to render the not started items'
//assume that previously the factory had automatically made a 'notStarted' variable available to the controller scope, depsite not being declared within the controller

}
])

.controller('currentSkillController', ['$scope', 'contentFactory', function ($scope, contentFactory) {  

$scope.contentData = ContentObject;  //any issues with multiple scopes with the same name? Presume no if assignmenet nesting does not overlap
var data = [];
data.push($scope.contentData); 

$scope.passAllContentItemsToFactory = contentFactory.contentItems(data[0]);

//$scope.selectedGoal = 95; // placeholder for testing dynamic updating of goal/skill data

$scope.currentSkill = contentFactory.currentItem(95);
//console.log($scope.currentSkill);
//console.log($scope.contentData);
 


 
}
]);