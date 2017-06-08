angular.module("app", ['ng-fusioncharts'])

.controller('classProgressSummary', function ($scope) {

})


.controller("skillsController1", function ($scope) {
 
  FusionCharts.ready(function(){
    var fusioncharts = new FusionCharts({
    type: 'heatmap',
    renderAt: 'chart-container',
    width: '100%',
    height: '250' ,
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Skills Progress",
            //"subcaption": "...",
            "xAxisName": "Unit checkpoints",
           // "yAxisName": "...",
            "showplotborder": "1",
            "xAxisLabelsOnTop": "1",
            "plottooltext": "<div id='nameDiv' style='font-size: 12px; border-bottom: 1px dashed #666666; font-weight:bold; padding-bottom: 3px; margin-bottom: 5px; display: inline-block; color: #888888;' >$rowLabel :</div>{br}Rating : <b>$dataValue</b>{br}$columnLabel : <b>$tlLabel</b>{br}<b>$trLabel</b>",
            //Cosmetics
            "baseFontColor": "#333333",
            "baseFont": "Helvetica Neue,Arial",
            "toolTipBorderRadius": "2",
            "toolTipPadding": "5",
            "theme": "fint"
        },
        "dataset": [{
            "data": [{
                "rowid": "Listening Skills",
                "columnid": "Unit 1",
                "value": "87",
                "tllabel": "Ready",
                "trlabel": ""
            }, {
                "rowid": "Listening Skills",
                "columnid": "Unit 2",
                "value": "85",
                "tllabel": "",
                "trlabel": ""
            }, {
                "rowid": "Listening Skills",
                "columnid": "Unit 3",
                "value": "93",
                "tllabel": "*"
            }, {
                "rowid": "Listening Skills",
                "columnid": "Unit 4",
                "value": "97",
                "tllabel": "*",
                "trlabel": ""
            }, {
                "rowid": "Listening Skills",
                "columnid": "Unit 5",
                "value": "80",
                "tllabel": "some text",
                "trlabel": ""
            }, {
                "rowid": "Reading Skills",
                "columnid": "Unit 1",
                "value": "92",
                "tllabel": "*",
                "trlabel": ""
            }, {
                "rowid": "Reading Skills",
                "columnid": "Unit 2",
                "value": "83",
                "tllabel": "*",
                "trlabel": ""
            }, {
                "rowid": "Reading Skills",
                "columnid": "Unit 3",
                "value": "83",
                "tllabel": "*"
            }, {
                "rowid": "Reading Skills",
                "columnid": "Unit 4",
                "value": "88",
                "tllabel": "*",
                "trlabel": ""
            }, {
                "rowid": "Reading Skills",
                "columnid": "Unit 5",
                "value": "80",
                "tllabel": "*",
                "trlabel": ""
            }, {
                "rowid": "Writing Skills",
                "columnid": "Unit 1",
                "value": "85",
                "tllabel": "*",
                "trlabel": ""
            }, {
                "rowid": "Writing Skills",
                "columnid": "Unit 2",
                "value": "72",
                "tllabel": "!",
                "trlabel": ""
            }, {
                "rowid": "Writing Skills",
                "columnid": "Unit 3",
                "value": "72",
                "tllabel": "some info"
            }, {
                "rowid": "Writing Skills",
                "columnid": "Unit 4",
                "value": "48",
                "tllabel": "!",
                "trlabel": ""
            }, {
                "rowid": "Writing Skills",
                "columnid": "Unit 5",
                "value": "40",
                "tllabel": "!",
                "trlabel": ""
            }, {
                "rowid": "Speaking Skills",
                "columnid": "Unit 1",
                "value": "40",
                "tllabel": "*",
                "trlabel": ""
            }, {
                "rowid": "Speaking Skills",
                "columnid": "Unit 2",
                "value": "60",
                "tllabel": "!",
                "trlabel": ""
            }, {
                "rowid": "Speaking Skills",
                "columnid": "Unit 3",
                "value": "67",
                "tllabel": ""
            }, {
                "rowid": "Speaking Skills",
                "columnid": "Unit 4",
                "value": "72",
                "tllabel": "*",
                "trlabel": ""
            }, {
                "rowid": "Speaking Skills",
                "columnid": "Unit 5",
                "value": "85",
                "tllabel": "*",
                "trlabel": ""
            }]
        }],
        "colorrange": {
            "gradient": "1",
            "minvalue": "0",
            "code": "E24B1A",
            "startlabel": "Poor",
            "endlabel": "Mastered",
            "color": [{
                "code": "E24B1A",
                "minvalue": "0",
                "maxvalue": "50",
                "label": "Failing"
            }, {
                "code": "F6BC33",
                "minvalue": "50",
                "maxvalue": "75",
                "label": "Need Practice"
            }, {
                "code": "6DA81E",
                "minvalue": "75",
                "maxvalue": "100",
                "label": "Mastered"
            }]
        }
    }
}
);
    fusioncharts.render();
});

  
})


.controller('thresholdChart', function ($scope) {

new Chartist.Line('.threshold-chart', {
  labels: ['Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Unit 5', 'Unit 6', 'Unit 7', 'Unit 8', 'Unit 9', 'Unit 10'],
  series: [
    [50, 20, 30, 70, 80, 10, 55, 45, 80, 45]
  ]
}, {
  showArea: true,
  axisY: {
    onlyInteger: true
  },
  plugins: [
    Chartist.plugins.ctThreshold({
      threshold: 70
    })
  ]
});

})



.controller("bulletCharts", function ($scope) {

$scope.className = "Touchstone Level 1 - UVM Spring 16";



$scope.updateClassData = function(className) {
    if (className == 'Touchstone Level 2A - UVM Autumn 16') {
    $scope.listeningData.value = "15";
    $scope.readingData.value = "35";
    $scope.writingData.value = "45";
    $scope.speakingData.value = "25";
    $scope.classProgressData.value = "40";
    }
    
        if (className == 'Touchstone Level 2B - UVM Spring 17') {
    $scope.listeningData.value = "75";
    $scope.readingData.value = "75";
    $scope.writingData.value = "75";
    $scope.speakingData.value = "75";
    $scope.classProgressData.value = "75";
    }
    
        if (className == 'Viewpoint Level 1 - UVM Spring 16') {
    $scope.listeningData.value = "75";
    $scope.readingData.value = "25";
    $scope.writingData.value = "25";
    $scope.speakingData.value = "55";
    $scope.classProgressData.value = "45";
    }
    
    
    if  (className == 'Touchstone Level 1 - UVM Spring 16') {
    $scope.listeningData.value = "85";
    $scope.readingData.value = "85";
    $scope.writingData.value = "55";
    $scope.speakingData.value = "65";
    $scope.classProgressData.value = "73";
    }
    

    
};

//traffic light LED summary

    $scope.classProgressData = {
        "chart": {
            "caption": "Current Performance vs. CEFR 'B1'",
            "lowerLimit": "0",
            "upperLimit": "100",
            "lowerLimitDisplay": "0",
            "upperLimitDisplay": "100%",
            "numberSuffix": "%",
            "showValue": "1",
            "valueFontSize": "12",
            "showhovereffect": "1",
            "chartBottomMargin": "20",
            "theme": "fint"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "45",
                "code": "#e44a00"
            }, {
                "minValue": "45",
                "maxValue": "70",
                "code": "#f8bd19"
            }, {
                "minValue": "70",
                "maxValue": "100",
                "code": "#6baa01"
            }]
        },
        "value": "73"
    };



//chart 1 - Listening

 $scope.listeningData =

{
    "chart": {
        "theme": "fint",
        "lowerLimit": "0",
        "subCaptionFontSize": "11",
        "upperLimit": "100",
        "caption": "Listening Skills",
        "subcaption": "Actual vs CEFR 'B1'",
        "numberPrefix": "",
        "numberSuffix": "%",
        "chartBottomMargin": "25"
    },
    "colorRange": {
        "color": [
            {
                "minValue": "0",
                "maxValue": "50",
                "code": "#e44a00",
                "alpha": "25"
            },
            {
                "minValue": "50",
                "maxValue": "70",
                "code": "#f8bd19",
                "alpha": "25"
            },
            {
                "minValue": "70",
                "maxValue": "120",
                "code": "#6baa01",
                "alpha": "25"
            }
        ]
    },
    "value": "85",
    "target": "70"
};

  


//Reading skills
$scope.readingData = 

{
    "chart": {
        "theme": "fint",
        "lowerLimit": "0",
        "subCaptionFontSize": "11",
        "upperLimit": "100",
        "caption": "Reading Skills",
        "subcaption": "Actual vs CEFR 'B1'",
        "numberPrefix": "",
        "numberSuffix": "%",
        "chartBottomMargin": "25"
    },
    "colorRange": {
        "color": [
            {
                "minValue": "0",
                "maxValue": "50",
                "code": "#e44a00", 
                "alpha": "25"
            },
            {
                "minValue": "50",
                "maxValue": "70",
                "code": "#f8bd19",
                "alpha": "25"
            },
            {
                "minValue": "70",
                "maxValue": "120",
                "code": "#6baa01",
                "alpha": "25"
            }
        ]
    },
    "value": "85",
    "target": "70"
};


//Writing skills

$scope.writingData = 

{
    "chart": {
        "theme": "fint",
        "lowerLimit": "0",
        "subCaptionFontSize": "11",
        "upperLimit": "100",
        "caption": "Writing Skills",
        "subcaption": "Actual vs CEFR 'B1'",
        "numberPrefix": "",
        "numberSuffix": "%",
        "chartBottomMargin": "25"
    },
    "colorRange": {
        "color": [
            {
                "minValue": "0",
                "maxValue": "50",
                "code": "#e44a00", 
                "alpha": "25"
            },
            {
                "minValue": "50",
                "maxValue": "70",
                "code": "#f8bd19",
                "alpha": "25"
            },
            {
                "minValue": "70",
                "maxValue": "120",
                "code": "#6baa01",
                "alpha": "25"
            }
        ]
    },
    "value": "55",
    "target": "70"
};


//Speaking skills

$scope.speakingData = 

{
    "chart": {
        "theme": "fint",
        "lowerLimit": "0",
        "subCaptionFontSize": "11",
        "upperLimit": "100",
        "caption": "Speaking Skills",
        "subcaption": "Actual vs CEFR 'B1'",
        "numberPrefix": "",
        "numberSuffix": "%",
        "chartBottomMargin": "25"
    },
    "colorRange": {
        "color": [
            {
                "minValue": "0",
                "maxValue": "50",
                "code": "#e44a00", 
                "alpha": "25"
            },
            {
                "minValue": "50",
                "maxValue": "70",
                "code": "#f8bd19",
                "alpha": "25"
            },
            {
                "minValue": "70",
                "maxValue": "120",
                "code": "#6baa01",
                "alpha": "25"
            }
        ]
    },
    "value": "65",
    "target": "70"
};



})



.controller("studentCharts", function ($scope) {

$scope.currentStudent = "Jose Luis";

$scope.individualStudentSkillsSummary = 

{
    "chart": {
        "caption": "Individual Student Performance",
        "bgcolor": "FFFFFF",
        "plotgradientcolor": "",
        "showalternatehgridcolor": "0",
        "showplotborder": "0",
        "divlinecolor": "CCCCCC",
        "showvalues": "0",
        "showcanvasborder": "0",
        "pyaxisname": "Your Performance",
        "syaxisname": "CEFR Benchmark",
        "numbersuffix": "%",
        "labeldisplay": "",
        "slantlabels": "1",
        "canvasborderalpha": "0",
        "legendshadow": "0",
        "legendborderalpha": "0",
        "showborder": "0"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "Listening",
                    "stepSkipped": false,
                    "labelPadding": 0
                },
                {
                    "label": "Speaking",
                    "stepSkipped": false,
                    "labelPadding": 12
                },
                {
                    "label": "Reading",
                    "stepSkipped": false,
                    "labelPadding": 0
                },
                {
                    "label": "Writing",
                    "stepSkipped": false,
                    "labelPadding": 12
                },
                {
                    "label": "Grammar",
                    "stepSkipped": false,
                    "labelPadding": 0
                }
            ]
        }
    ],
    "dataset": [
        {
            "seriesname": "Your Performance",
            "color": "008ee4",
            "data": [
                {
                    "value": "55"
                },
                {
                    "value": "45"
                },
                {
                    "value": "65"
                },
                {
                    "value": "70"
                },
                {
                    "value": "68"
                }
            ]
        },
        {
            "seriesname": "CEFR Benchmark",
            "parentyaxis": "S",
            "renderas": "Line",
            "color": "f8bd19",
            "data": [
                {
                    "value": "70"
                },
                {
                    "value": "70"
                },
                {
                    "value": "70"
                },
                {
                    "value": "70"
                },
                {
                    "value": "70"
                }
            ]
        }
    ]
};

$scope.studentActivity = 

{
    "chart": {
        "formatnumberscale": "0",
        "caption": "Most Popular Activities",
        "showborder": "0"

    },
    "data": [
        {
            "label": "Listening",
            "value": "10"
        },
        {
            "label": "Speaking",
            "value": "12"
        },
        {
            "label": "Writing",
            "value": "18"
        },
        {
            "label": "Grammar",
            "value": "20"
        },
        {
            "label": "Speaking",
            "value": "30"
        },
        {
            "label": "Games",
            "value": "30"
        }
    ]
};


$scope.updateStudent = function(studentName) {
    if  (studentName == 'Brendan Wightman') {
    $scope.individualStudentSkillsSummary.dataset[0].data[0].value = "10";
    $scope.individualStudentSkillsSummary.dataset[0].data[1].value = "10";
    $scope.individualStudentSkillsSummary.dataset[0].data[2].value = "10";
    $scope.individualStudentSkillsSummary.dataset[0].data[3].value = "10";
    $scope.individualStudentSkillsSummary.dataset[0].data[4].value = "10";
    }
    
    if  (studentName == 'Gosia Adamcyzk') {
    $scope.individualStudentSkillsSummary.dataset[0].data[0].value = "70";
    $scope.individualStudentSkillsSummary.dataset[0].data[1].value = "75";
    $scope.individualStudentSkillsSummary.dataset[0].data[2].value = "80";
    $scope.individualStudentSkillsSummary.dataset[0].data[3].value = "90";
    $scope.individualStudentSkillsSummary.dataset[0].data[4].value = "90";

    }
    
    if  (studentName == 'Christoper Burbage') {
    $scope.individualStudentSkillsSummary.dataset[0].data[0].value = "40";
    $scope.individualStudentSkillsSummary.dataset[0].data[1].value = "60";
    $scope.individualStudentSkillsSummary.dataset[0].data[2].value = "50";
    $scope.individualStudentSkillsSummary.dataset[0].data[3].value = "60";
    $scope.individualStudentSkillsSummary.dataset[0].data[4].value = "70";

    }
    
    
    if  (studentName == 'Jose Luis') {
    $scope.individualStudentSkillsSummary.dataset[0].data[0].value = "50";
    $scope.individualStudentSkillsSummary.dataset[0].data[1].value = "50";
    $scope.individualStudentSkillsSummary.dataset[0].data[2].value = "60";
    $scope.individualStudentSkillsSummary.dataset[0].data[3].value = "40";
    $scope.individualStudentSkillsSummary.dataset[0].data[4].value = "70";

    }

};
console.log($scope.individualStudentSkillsSummary.dataset[0].data[0].value);

  
});
