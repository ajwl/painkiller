
  var totalData = {
  	"totalpainkillers": {
        "type":"All Painkillers",
        "2009":553.896,
        "2010":547.911,
        "2011":547.029,
        "2012":560.07,
        "2013":581.427,
        "2014":600.516
        },
      
      "totalcough": {
        "type":"All Cough, Cold and Allergy (Hay Fever) Remedies",
        "2009":578.655,
        "2010":592.767,
        "2011":579.537,
        "2012":599.949,
        "2013":609.462,
        "2014":623.889
      },
      
      "totaldigestive": {
        "type":"All Digestive Remedies",
        "2009":305.928,
        "2010":303.975,
        "2011":303.345,
        "2012":307.314,
        "2013":312.165,
        "2014":316.008
      },
  }; 

  var painkillerData = {
  
      "systemic": {
        "type":"Systemic Painkillers",
        "2009":481.383,
        "2010":474.453,
        "2011":470.988,
        "2012":481.698,
        "2013":493.668,
        "2014":503.559
      },
      
      "topical": {
        "type":"Topical Painkillers/Anaesthetic",
        "2009":72.45,
        "2010":73.458,
        "2011":76.041,
        "2012":78.372,
        "2013":87.759,
        "2014":96.894
      },
      
      "calming": {
        "type":"Calming and Sleeping",
        "2009":47.061,
        "2010":46.935,
        "2011":49.959,
        "2012":50.463,
        "2013":53.613,
        "2014":56.196
      }

    };

  var coughData = {

      "allergy":{
        "type": "Antihistamines/Allergy Remedies (Systemic)",
        "2009":68.229,
        "2010":74.844,
        "2011":75.789,
        "2012":75.6,
        "2013":88.641,
        "2014":92.547
      },
      "childrens": {
        "type":"Childrens Cough, Cold and Allergy Remedies",
        "2009":20.16,
        "2010":20.034,
        "2011":19.719,
        "2012":19.467,
        "2013":19.026,
        "2014":19.278
      },
      "combination":  {
        "type":"Combination - Cough, Cold and Allergy (Hay Fever) Remedies",
        "2009":180.873,
        "2010":189.567,
        "2011":187.236,
        "2012":196.749,
        "2013":200.151,
        "2014":204.75
      },
      "cough":  {
        "type":"Cough Remedies",
        "2009":117.81,
        "2010":115.479,
        "2011":107.415,
        "2012":110.628,
        "2013":104.391,
        "2014":106.911
      },
      "decongestants": {
        "type":"Decongestants",
        "2009":61.803,
        "2010":63.693,
        "2011":62.433,
        "2012":64.26,
        "2013":65.079,
        "2014":66.024
      },
      "sweets": {
        "type":"Medicated Confectionery",
        "2009":88.011,
        "2010":86.94,
        "2011":85.554,
        "2012":91.035,
        "2013":91.098,
        "2014":94.059
      },
      "throat": {
        "type":"Throat Medications",
        "2009":41.706,
        "2010":42.21,
        "2011":41.328,
        "2012":42.147,
        "2013":41.139,
        "2014":40.383
      }
  
  };

  var digestiveData = {

    "childrens": {
      "type":"Childrens Digestive Remedies",
      "2009":9.828,
      "2010":9.954,
      "2011":10.206,
      "2012":10.269,
      "2013":10.332,
      "2014":10.395
    },
    
    "diahorrea": {
      "type":"Diarrhoeal Remedies",
      "2009":51.219,
      "2010":50.715,
      "2011":49.959,
      "2012":52.038,
      "2013":54.054,
      "2014":55.377
    },
    "ibs": {
      "type":"IBS Treatments",
      "2009":5.418,
      "2010":5.544,
      "2011":6.93,
      "2012":7.812,
      "2013":8.631,
      "2014":9.513
    },
    "indigestion": {
      "type":"Indigestion and Heartburn Remedies",
      "2009":174.636,
      "2010":172.809,
      "2011":171.675,
      "2012":173.313,
      "2013":175.644,
      "2014":177.66
    },
    "laxatives": {
      "type":"Laxatives",
      "2009":57.708,
      "2010":58.212,
      "2011":57.456,
      "2012":56.574,
      "2013":56.133,
      "2014":55.818
    },
    "motion": {
      "type":"Motion Sickness Remedies",
      "2009":7.119,
      "2010":6.804,
      "2011":7.182,
      "2012":7.371,
      "2013":7.245,
      "2014":7.245
    }
  };

var APP = (function(){
  var chart, 
      buttonRow = document.getElementById("buttons"),
      allChart = document.getElementById("allChart"),
      painkillerChart = document.getElementById("painkillerChart"),
      coughChart = document.getElementById("coughChart"),
      digestiveChart = document.getElementById("digestiveChart");

  //functions 

  //use button click to show/hide right section and send right data to makechart
  var showGraph = function(event){
      if(event.target.id === "all"){
        if(allChart.classList.contains("hidden")){
          allChart.classList.remove("hidden");
        };
        painkillerChart.classList.add("hidden");
        coughChart.classList.add("hidden");
        digestiveChart.classList.add("hidden");
        //initiate chart! 
        makeChart(processData(totalData));
      }
      else if(event.target.id === "painkiller"){
        if(painkillerChart.classList.contains("hidden")){
          painkillerChart.classList.remove("hidden");
        };
        allChart.classList.add("hidden");
        coughChart.classList.add("hidden");
        digestiveChart.classList.add("hidden");
        //initiate chart! 
        makeChart(processData(painkillerData));
      }
      else if(event.target.id === "cough"){
        if(coughChart.classList.contains("hidden")){
          coughChart.classList.remove("hidden");
        };
        allChart.classList.add("hidden");
        painkillerChart.classList.add("hidden");
        digestiveChart.classList.add("hidden");
        //initiate chart! 
        makeChart(processData(coughData));
      }
      else if(event.target.id === "digestive"){
        if(digestiveChart.classList.contains("hidden")){
          digestiveChart.classList.remove("hidden");
        };
        allChart.classList.add("hidden");
        coughChart.classList.add("hidden");
        painkillerChart.classList.add("hidden");
        //initiate chart! 
        makeChart(processData(digestiveData));
      };
  };
  
  //take the chosen object and turn its data into arrays 
  var processData = function(data){
    console.dir(data);
    var datatouse = [];
    console.log("datatouse first time" + datatouse);

    //Sort this data out - for in loop 
    for(var key in data){
      if(data.hasOwnProperty(key)){
        datatouse.push(data[key]["type"]);
        datatouse.push(data[key]["2009"]);
        datatouse.push(data[key]["2010"]);
        datatouse.push(data[key]["2011"]);
        datatouse.push(data[key]["2012"]);
        datatouse.push(data[key]["2013"]);
        datatouse.push(data[key]["2014"]);
      }
    }

    //Break the big datatouse array into sets of 7 and push to finaldata
    var i, j, z, chunk=7, arrname=[],
      numberKeys = Object.keys(data).length;  

    //check if there is anything in finaldata and delete it if there is 
    var finaldata =[];
    console.log("this should be zero" + finaldata.length);
    console.log("datatouse second time" + datatouse);

    for(i=0, j=datatouse.length; i<j; i+=chunk){
      arrname[z] = datatouse.slice(i, i+chunk);
      console.log(arrname[z]);
      finaldata.push(arrname[z]);
    }
    return finaldata;
  };  

  //make chart function 
  var makeChart = function(finaldata){
   console.log("this is the final data" + finaldata);
   //somehow delete existing chart data

   var chart1 = c3.generate({
      bindto: "#chart1",
      data:{
          columns: finaldata,
          groups: [
              ['type', '2009', '2010', '2011', '2012', '2013', '2014']
          ]
      },
      axis:{
          y:{
           label:{
            text: "£ million",
            position: "outer-middle"
            } //label
          },  
          x:{
            type: 'category',
            categories: ['2009', '2010', '2011', '2012', '2013', '2014']
          } //END x

        } // END axis
    }); //END chartgeneration
  };


  //button to show and hide different graphs
  var buttonclick = function(){
    buttonRow.addEventListener(
        "click",
        function(){
          console.log(event.target.id);
          showGraph(event);
        },
        false
      );
  };

   return {
   	init: function(){
   		buttonclick();
   	}
   }; //end return

})();

APP.init(); 

//NOTES AND OLD CODE 
/*
    //chart generation OLD 
    var chart1 = c3.generate({
      bindto: "#chart1",
      data:{
          columns:[
              [totalData.totalpainkillers["type"], 
                totalData.totalpainkillers["2009"], 
                totalData.totalpainkillers["2010"], 
                totalData.totalpainkillers["2011"], 
                totalData.totalpainkillers["2012"], 
                totalData.totalpainkillers["2013"], 
                totalData.totalpainkillers["2014"]
              ],
              [totalData.totalcough["type"], 
                totalData.totalcough["2009"], 
                totalData.totalcough["2010"], 
                totalData.totalcough["2011"], 
                totalData.totalcough["2012"], 
                totalData.totalcough["2013"], 
                totalData.totalcough["2014"]
              ],
              [totalData.totaldigestive["type"], 
                totalData.totaldigestive["2009"], 
                totalData.totaldigestive["2010"], 
                totalData.totaldigestive["2011"], 
                totalData.totaldigestive["2012"], 
                totalData.totaldigestive["2013"], 
                totalData.totaldigestive["2014"]
              ]
          ],
        //type: 'bar'
      },
      axis:{
          y:{
           label:{
            text: "£ million",
            position: "outer-middle"
            } //label
          },  
          x:{
            type: 'category',
            categories: ['2009', '2010', '2011', '2012', '2013', '2014']
          } //END x
        } // END axis
    }); //END chartgeneration
 */   