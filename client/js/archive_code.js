//sample code to render a chart.js line chart showing average score per unit - fully functional, also in use at 'studentdash'

angular.module('dashboard')
.controller('unitScoreController', function ($scope, $http) {  
 
  $scope.unitData = UnitObject; 

  $scope.labels = [];
  $scope.data = [];
  $scope.series = ['placeholder'];
  $scope.height_chart = 100;
  $scope.options = {
    responsive: true,
    title: {display: "true", position: "top", text: "Single Student Unit Scores", fontSize: 18},
    legend: {display: "false", position: "bottom"}
    };
  
  
  angular.forEach($scope.unitData.unitscores, function (object) {
       if (object['calc-percentage-score']) {
        $scope.data.push(object['calc-percentage-score']);
        $scope.labels.push(object['unit-name']);
       }
    });
    
});


//sample code to add custom images to a chartist line chart - functioning successfully at studentdash, but removed from dashboard due to creating issues with plugins

// Create a new line chart object where as first parameter we pass in a selector
// that is resolving to our chart container element. The Second parameter is the actual data object.
// new Chartist.Line('.ct-chart', $scope.data, $scope.plugIns).
//      on('draw', function(context) {
//  if (context.type === 'point') {
//    var meta = Chartist.deserialize(context);
//    context.element.replace(new Chartist.Svg('image', {
//      height: 22,
//      width: 22,
//      x: context.x - (32 / 2),
//      y: context.y - (32 / 2),
//      'xlink:href': $scope.data.series[0].imageUrl 
//      //adding it to the series object, property 'imageUrl' has been added to the object after the data values
//    }));
//  }
//});

//thresholds line chart working example - chartist
//new Chartist.Line('.ct-chart1', {
//  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//  series: [
//    [5, -4, 3, 7, 20, 10, 3, 4, 8, -10, 6, -8]
//  ]
//}, {
//  showArea: true,
//  axisY: {
//    onlyInteger: true
//  },
//  plugins: [
//    Chartist.plugins.ctThreshold({
//      threshold: 4
//    })
//  ]
//});
 


//Previous working code for chartist line chart - using axis title plugins. 
//To use for reference in troubleshooting why the current implementation data set doesn't render plugins

//this controller covers handling of the unit scores data - used by Chartist line chart
.controller("student_unit_avgscore_chart", function ($scope) {

  $scope.data = {
  labels: [],
  series: [[]]
  };
     
  $scope.unitData = UnitObject; 

// Create a new line chart object where as first parameter we pass in a selector
// that is resolving to our chart container element. The Second parameter is the actual data object.
new Chartist.Line('.ct-chart', $scope.data, {
  chartPadding: {
    top: 20,
    right: 0,
    bottom: 30,
    left: 0
  },
  showArea: true,
  axisY: {
    onlyInteger: true
  },
  plugins: [
    Chartist.plugins.ctAxisTitle({
      axisX: {
        axisTitle: 'Units',
        axisClass: 'ct-axis-title',
        offset: {
          x: 0,
          y: 50
        },
        textAnchor: 'middle'
      },
      axisY: {
        axisTitle: 'Score',
        axisClass: 'ct-axis-title',
        offset: {
          x: 0,
          y: 0
        },
        textAnchor: 'middle',
        flipTitle: false
      }
    }),
    
    Chartist.plugins.ctThreshold({
      threshold: 37
    })
    
  ]
});


//for separate panels for best, worst, latest content - replaced with tabs
         
            .col-sm-2
              div.panel.panel-success
                div.panel-heading Your best content 
                 span.badge {{highContent.length}}
                  | 
                div.panel-body 
                 ul.list-unstyled
                   li.media(ng-repeat="title in highContent") 
                    div.media-left
                     span.glyphicon.glyphicon-star
                    div.media-body
                     | {{title}}

            .col-sm-2
              div.panel.panel-danger
                div.panel-heading Skills to improve 
                 span.badge
                  | {{lowContent.length}}
                div.panel-body 
                 ul.list-unstyled
                   li.media(ng-repeat="title in lowContent") 
                    div.media-left
                     span.glyphicon.glyphicon-repeat
                    div.media-body
                     | {{title}}
                  
            .col-sm-2
              div.panel.panel-primary
                div.panel-heading Recent content 
                div.panel-body 
                 ul.media-list
                   li.media(ng-repeat="item in mostRecent | orderBy:'item.time' | limitTo: 5") 
                    div.media-left
                     span.glyphicon.glyphicon-time
                    div.media-body
                     | {{item.name}}
                     
                     
                     
                  
