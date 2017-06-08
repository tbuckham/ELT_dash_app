angular.module('dashboard')
        //factory service to manage the core data requirements to generate the average score vs. class average score (Fusion) gauge chart.
        //replace .factory with .service if we want do a service instead of factory
        .factory('fusionGaugeChart', function() {
  
  var fusionData = {};     
        
  var fusionGaugeData = {


    "chart": {
        "manageresize": "1",
        "origw": "350",
        "origh": "200",
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
        "autoaligntickvalues": "1"
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
                //"value": "72",
                "rearextension": "10",
                "basewidth": "10",
                "displayvalue": "Your score"
            }
        ]
    },
    "trendpoints": {
        "point": [
            {
                //"startvalue": "62",
                "displayvalue": "Class",
                "usemarker": "1",
                "markerradius": "8",
                "dashed": "1",
                "dashlen": "2",
                "dashgap": "2"
            }
        ]
    },
    "annotations": {
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
}
;



fusionData.getData = function () {
    return fusionGaugeData;
};

return fusionData;

})

//factory service to manage the Chartist line chart used for average scores per unit

  .factory('chartistLineChartFactory', function() {
  
  var chartistData = {};     
   
  var chartistLabels = {  
  labels: [],
  series: [[]]
  };
  
  var chartistSettings = {

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
          x: 10,
          y: -5
        },
        textAnchor: 'middle',
        flipTitle: false
      }
    }),
    
    Chartist.plugins.ctThreshold({
      threshold: 37
    })
    
  ]
};

            
chartistData.getData = function () {
    return chartistLabels;
};

chartistData.getOptions = function() {
    return chartistSettings;
};

return chartistData;

})







//factory for generating the 'new' interpretation of progress data (just using scores vs. total items)

.factory('newProgressCalculator', function() {
  
  var progressData = {}; 
  var contentItems = [];
  var itemsCompletedSuccessfully = [];
  var itemsNotCompletedSuccessfully =[];
  var progress = 
  
      
    progressData.contentItems = function(data) {
      contentItems.push(data);
         contentItems = contentItems[0];
         return contentItems;
    };
        

     progressData.progressAverage = function () {
     angular.forEach(contentItems, function (object) {
       if (object['calc-percentage-score'] > 50) {
        itemsCompletedSuccessfully.push(object['content-name']); 
       }
        else if (object['calc-percentage-score'] && object['calc-percentage-score'] < 50) {  
            itemsNotCompletedSuccessfully.push(object['content-name']) ;
        }
       });
        
      progress = Math.round(itemsCompletedSuccessfully.length / contentItems.length * 100);
   
      return progress;
     };



     return progressData;
})





//factory for managing the processing of all content itme data

.factory('contentFactory', function() {
  
  var contentData = {}; 
  
  var contentItems = [];
  
  var itemsCompletedSuccessfully = [];
  var itemsNotCompletedSuccessfully =[];
  
  var notStarted = [];
  
  var currentSkill = []; 
  
  var progress = 
  

      
    contentData.contentItems = function(data) {
      contentItems.push(data);
         contentItems = contentItems[0];
         return contentItems;
    };
    
    
    contentData.currentItem = function(data) {
      
        return contentItems[data];
    };
    
        

    contentData.notStarted = function () {
        angular.forEach(contentItems, function (object) {
        if (object['calc-percentage-score'] === 0) {
             notStarted.push(object['content-name']) ;
        }
    });
        return notStarted;
    };


     contentData.progressAverage = function () {
     angular.forEach(contentItems, function (object) {
       if (object['calc-percentage-score'] > 50) {
        itemsCompletedSuccessfully.push(object['content-name']); 
       }
        else if (object['calc-percentage-score'] && object['calc-percentage-score'] < 50) {  
            itemsNotCompletedSuccessfully.push(object['content-name']) ;
        }
       });
        
      progress = Math.round(itemsCompletedSuccessfully.length / contentItems.length * 100);
   
      return progress;
     };


    
     return contentData;
});

