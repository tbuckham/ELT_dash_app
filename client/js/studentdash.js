
// Define the `ClassApp` module
var app = angular.module('app', ['chart.js', 'ng-fusioncharts', 'ngAnimate']);

app.controller("chart1", function ($scope, $http) {
 
 //console.log(ChartObject);
  //$scope.chartData = ChartObject;
  $scope.labels = [];
  $scope.data = [];

  $scope.height_chart = window.innerHeight*0.5;
  $scope.options = {
    responsive: true,
    title: {display: "true", position: "top", text: "Student Average Scores", fontSize: 18},
    //legend: {display: "true", position: "bottom", text: "Average Score", fontSize: 14},
    
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
 
    
app.controller("chart2", function ($scope, $http) {
 
$scope.myDataSource = {

    "chart": {
        "manageResize": "1",
        "origw": "400",
        "origh": "350",
        "autoscale": "1",
        "palette": "2",
        "bgalpha": "0",
        "bgcolor": "FFFFFF",
        "lowerlimit": "0",
        "upperlimit": "100",
        "numbersuffix": "%",
        "showborder": "0",
        "basefontcolor": "FFFFDD",
        "charttopmargin": "5",
        "chartbottommargin": "5",
        "tooltipbgcolor": "009999",
        "gaugefillmix": "{dark-10},{light-70},{dark-10}",
        "gaugefillratio": "3",
        "pivotradius": "8",
        "gaugeouterradius": "120",
        "gaugeinnerradius": "70%",
        "gaugeoriginx": "175",
        "gaugeoriginy": "170",
        "trendvaluedistance": "5",
        "tickvaluedistance": "3",
        "managevalueoverlapping": "1",
        "autoaligntickvalues": "1",
        
    },
    "colorrange": {
        "color": [
            {
                "minvalue": "0",
                "maxvalue": "45",
                "code": "FF654F"
            },
            {
                "minvalue": "45",
                "maxvalue": "80",
                "code": "F6BD0F"
            },
            {
                "minvalue": "80",
                "maxvalue": "100",
                "code": "8BBA00"
            }
        ]
    },
    "dials": {
        "dial": [
            {
                //"value": "64",
                "rearextension": "10",
                "basewidth": "10"
            }
        ]
    },
   "trendpoints": {
        "point": [
            {
                //"startvalue": "",
                "displayvalue": "Class Average Score",
                "usemarker": "1",
                "markerradius": "8",
                "dashed": "1",
                "dashlen": "2",
                "dashgap": "2"
            }
        ]
    },
    "annotations": {
        "origw": "400",
        "origh": "350",
        "autoscale": "1",
        "showBelow": "0",
        "groups": [
            {
                "id": "Grp1",
                "showbelow": "1",
                "showshadow": "1",
                "items": [
                    {
                        "type": "rectangle",
                        "x": "$chartStartX+5",
                        "y": "$chartStartY+5",
                        "tox": "$chartEndX-5",
                        "toy": "$chartEndY-5",
                        "radius": "10",
                        "fillcolor": "009999,333333",
                        "showborder": "0"
                    }
                ]
            }
        ]
    }
};
 
  $scope.chart2Data = ChartObject; //provides all the gradebook objects
  $scope.scores = []; //empty array to hold the individual average score values for subsequent calculation
  
  //push each gradebook score into a $scope.scores array to allow calculating the average
 angular.forEach($scope.chart2Data, function (object) {
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
 console.log(thisAverage);
 var startvalue = thisAverage.toString(); //not sure if we need to convert the number to a string or not...?


 //use the 'startvalue' variable to show a dotted/marked line highlighting the average score
 $scope.myDataSource.dials.dial[0].value = startvalue; //
//$scope.myDataSource.dials.dial.push({ startvalue, });  - pushes the 'startvalue' variable as a new object in 'dials' but doesn't cause the slider to work 

//use the 'startvalue' variable to move the main gauge dial to highlight the average score
$scope.myDataSource.trendpoints.point[0].startvalue = startvalue;
                

console.log($scope.myDataSource.trendpoints.point[0]); // shows the items in the first object in 'point'
console.log($scope.myDataSource.trendpoints.point); // shows all the items in 'point' - to show the average score is provided to the trendpoints data
console.log($scope.myDataSource.dials.dial); // shows all the items in 'dial' - to show the average score is provided to the dial data
  
   //console logs to show the main gradebook data    
  //console.log($scope.chart2Data);



});


app.controller("chart3", function ($scope, $http) {

  $scope.data = {
  labels: [],
  series: [[]]
}, {
  chartPadding: {
    top: 20,
    right: 0,
    bottom: 30,
    left: 0
  },
  axisY: {
    onlyInteger: true
  },
  
  
plugins: [
 Chartist.plugins.ctAxisTitle({
    axisX: {
       axisTitle: 'X title',
       axisClass: 'ct-axis-title',
       offset: {
          x: 0,
          y: 50
       },
       textAnchor: 'middle'
    },
    axisY: {
       axisTitle: 'Y title',
       axisClass: 'ct-axis-title',
       offset: {
          x: 0,
          y: 0
       },
       textAnchor: 'middle',
       flipTitle: false
     }
   })
 ]
};
            
    $scope.unitData = UnitObject; 

// Create a new line chart object where as first parameter we pass in a selector
// that is resolving to our chart container element. The Second parameter
// is the actual data object.
 new Chartist.Line('.ct-chart', $scope.data).
      on('draw', function(context) {
  if (context.type === 'point') {
    var meta = Chartist.deserialize(context);
    context.element.replace(new Chartist.Svg('image', {
      height: 22,
      width: 22,
      x: context.x - (32 / 2),
      y: context.y - (32 / 2),
      'xlink:href': $scope.data.series[0].imageUrl //adding it to the series object, property 'imageUrl' has been added to the object after the data values
    }));
  }
});
    

  angular.forEach($scope.unitData.unitscores, function (object) {
       if (object['calc-percentage-score']) {
        $scope.data.series[0].push(object['calc-percentage-score']);
        $scope.data.labels.push(object['unit-name']);
        $scope.data.series[0].imageUrl = 'img/star_image.png'; //adds the icon URL to the series data
       }
    });

 console.log($scope.data.series);
  console.log($scope.data.labels);
  console.log($scope.data.series[0].imageUrl);

  
});


app.controller("chart4", function ($scope, $http) {
 
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

  console.log($scope.unitData);
 
  
});


app.controller("testFusion", function ($scope) {

$scope.myFusionDataSource = {
   chart: {
       caption: "Harry's SuperMart",
       subCaption: "Top 5 stores in last month by revenue",
       numberPrefix: "$",
       theme: "fint"
   },
   data:[{
       label: "Bakersfield Central",
       value: "880000"
   },
   {
       label: "Garden Groove harbour",
       value: "730000"
   },
   {
       label: "Los Angeles Topanga",
       value: "590000"
   },
   {
       label: "Compton-Rancho Dom",
       value: "520000"
   },
   {
       label: "Daly City Serramonte",
       value: "330000"
   }]
};

});   
