// Define Global Variables
var domainTotal = document.getElementById('domains');
var recordTotal = document.getElementById('records');
var gtdTotal = document.getElementById('gtd');
var geoProxConfTotal = document.getElementById('geoProxConf');
var geoProxAppTotal = document.getElementById('geoProxApp');
var geoFilterConfTotal = document.getElementById('geoFilterConf');
var geoFilterAppTotal = document.getElementById('geoFilterApp');
var anameTotal = document.getElementById('aname');
var poolConfTotal = document.getElementById('poolConf');
var poolAppTotal = document.getElementById('poolApp');
var userTotal = document.getElementById('users');
var form = document.getElementById('calcform');
var dnsTotal = 0;
var monthlyDnsTotal = 0;
var monthlyTotal = 0;


// Domain Calculation 
function domainNumber(num) {
  if (num > 0 && num < 2){
    dnsTotal += 5; 
  } else if (num >= 2 && num < 26) {
    var oneDomain = num - 1;
    var total = oneDomain * .5 + 5;
    dnsTotal += total;
  } else if (num > 25){
    var oneDomain = num - 1;
    var twentyfiveDomain = oneDomain - 24;
    var total = twentyfiveDomain * .1 + 17;
    dnsTotal += total;
  } else 
       alert("Please enter number of domains");
};

// Record Calculation
function recordNumber(num) {
  if (num > 100) {
    var newNum = num - 100;
    total = Math.round(newNum/100) * .5;
    dnsTotal += total;
   
  } else
        dnsTotal += 0;  
};

//GTD Calculation
function gtdNumber(num) {
  if (num == 1) {
    dnsTotal += 5; 
  } else if (num > 1 && num < 100) {
    var total = num - 1 + 5;
    dnsTotal += total;
  } else
        dnsTotal += 0;
};

//Geo Proximity Configured
function geoProxConfNumber(num) {
  if (num > .99) {
    var total = num * .01;
    dnsTotal += total;
  } else
        dnsTotal += 0;
};

//Geo Proximity Applied
function geoProxAppNumber(num) {
  if (num > .99) {
    var total = num * .05;
    dnsTotal += total;
  } else
        dnsTotal += 0;
};

//Geo Filter Configured
function geoFilterConfNumber(num) {
  if (num > .99) {
    var total = num * .01;
    dnsTotal += total;
  } else
        dnsTotal += 0;
};

//Geo Filter Applied 
function geoFilterAppNumber(num) {
  if (num > .99) {
    var total = num * .05;
    dnsTotal += total;
  } else
    dnsTotal += 0;
};

//ANAME 
function anameNumber(num) {
  if (num > .99) {
    var total = num * .1;
    dnsTotal += total;
  } else
        dnsTotal += 0;
};

//Pool Configured 
function poolConfNumber(num) {
  if (num > .99) {
    var total = num * .01;
    dnsTotal += total;
  } else
        dnsTotal += 0;
};

//Pool Applied 
function poolAppNumber(num) {
  if (num > .99) {
    var total = num * .1;
    dnsTotal += total;
  } else
        dnsTotal += 0;
};

//Additiona User Accounts
function userNumber(num) {
  if (num > 0 && num <= 10) {
    var total = num * 2;
    dnsTotal += total;
  } else if (num > 10 && num <= 100) {
    var newNum = num - 10;
    var total = newNum * 1 + 20;
    dnsTotal += total;
  } else if (num > 100) {
    var total = (num - 100) * .5 + 110;
    dnsTotal += total;
  } else
        dnsTotal += 0;
};


// First Submit Button (DNS Calc)
buttonTotal.onclick = function(){
  domainNumber(domainTotal.value);
  recordNumber(recordTotal.value);
  gtdNumber(gtdTotal.value);
  geoProxConfNumber(geoProxConfTotal.value);
  geoProxAppNumber(geoProxAppTotal.value);
  geoFilterConfNumber(geoFilterConfTotal.value);
  geoFilterAppNumber(geoFilterAppTotal.value);
  anameNumber(anameTotal.value);
  poolConfNumber(poolConfTotal.value);
  poolAppNumber(poolAppTotal.value);
  userNumber(userTotal.value);
  monthlyDnsTotal = dnsTotal;
  monthlyTotal = monthlyDnsTotal + 10; //  10 is a place holder for the Sonar Total
  document.getElementById("total").innerHTML = "Total:" + " " + "$" + monthlyTotal.toFixed(2);
  dnsTotal = 0;
  return false;
};

// First Clear Button
clearButton.onclick = function(){
  document.getElementById("domains").value="";
  document.getElementById("records").value="";
  document.getElementById("gtd").value="";
  document.getElementById("geoProxConf").value="";
  document.getElementById("geoProxApp").value="";
  document.getElementById("geoFilterConf").value="";
  document.getElementById("geoFilterApp").value="";
  document.getElementById("aname").value="";
  document.getElementById("poolConf").value="";
  document.getElementById("poolApp").value="";
  document.getElementById("users").value="";
  monthlyTotal = monthlyTotal - monthlyDnsTotal;
  document.getElementById("total").innerHTML = "Total:" + " " + "$" + monthlyTotal.toFixed(2);
  return false;
};

//Plus Minus Symbol
function toggleIcon(e) {
  $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);


/*------------------------------------------Constellix Sonar------------------------------------------------------*/
/*var counter = 0;
var checkInput = null;
addCheck.onclick = function() {
    var formTag = document.createElement('form');
    var divA = document.createElement('div');
    var deleteButton = document.createElement('button');
    var divChecksA = document.createElement('div');
    var labelChecks = document.createElement('label');
    var labelChecksText = document.createTextNode("Number Of Checks");
    var divChecksB = document.createElement('div');
    var inputChecks = document.createElement('input');
    formTag.setAttribute("class", "form-horizontal");
    divA.setAttribute("class" , "jumbotron");
    divA.setAttribute("style" , "padding-top:10px;padding-left:10px;");
    deleteButton.setAttribute("id", "sonarDelete");
    deleteButton.setAttribute("class", "btn btn-danger glyphicon glyphicon-remove-sign");
    divChecksA.setAttribute("class" , "form-group");
    labelChecks.setAttribute("for" , "name");
    labelChecks.setAttribute("class" , "col-sm-3 control-label");
    divChecksB.setAttribute("class" , "col-xs-1");
    inputChecks.setAttribute("class" , "form-control col-xs-1");
    inputChecks.setAttribute("id" , "checks" + ++counter);
    inputChecks.setAttribute("type" , "number");
    inputChecks.setAttribute("min" , "1");
    formTag.appendChild(divA);
    divA.appendChild(deleteButton);
    divA.appendChild(divChecksA);
    divChecksA.appendChild(labelChecks);
    labelChecks.appendChild(labelChecksText);
    divChecksA.appendChild(divChecksB);
    divChecksB.appendChild(inputChecks);
    document.getElementById("sonarCalc").appendChild(formTag);
    checkInput = inputChecks;
    return false;
};*/

//Submit Button -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
i = 0;
sonarTotal.onclick = function() {
  while (i <= counter - 1) {
    var checkTotal;
    var smsTotal;
    var pushTotal;
    var typeTotal;
    var intervalTotal;
    var policyTotal;
  
  //Number Of Checks
    checkElement = document.getElementById('checks'+ i);
    if (checkElement != null) {
      checkTotal = checkElement.value;
    } else {
      checkTotal = null;
    };
  //SMS Contacts
    smsElement  = document.getElementById('smsNotify' + i);
    if (smsElement != null) {
      smsValue = smsElement.value * 0.01;
      smsTotal = smsValue;
    } else {
      smsTotal = null;
    };
  //Push Notifications
    pushElement = document.getElementById('pushNotify' + i);
    if (pushElement != null) { 
      pushValue = pushElement.value * 0.001;
      pushTotal = pushValue ;
    } else {
      pushTotal = null;
    };
  //Check Type
    typeElement = document.getElementById('checkType' + i);
    if (typeElement != null) {
      typeTotal = typeElement.value;
    } else {
      typeTotal = null;
    };
  //Check Interval
    intervalElement = document.getElementById('interval' + i);
    if (intervalElement != null) {
      intervalTotal = intervalElement.value;
    } else {
      intervalTotal = null;
    };

      //Check Interval Policy
    policyElement = document.getElementById('intPolicy' + i);
    mon1 = document.getElementById('northAmE' + i).checked ? 1:0;
    mon2 = document.getElementById('northAmW' + i).checked ? 1:0;
    mon3 = document.getElementById('NorthAmC' + i).checked ? 1:0;
    mon4 = document.getElementById('europe' + i).checked ? 1:0;
    mon5 = document.getElementById('asiaPac' + i).checked ? 1:0;
    mon6 = document.getElementById('oceania' + i).checked ? 1:0;
    let policySelection;
    if (policyElement != null) {
      policySelection = policyElement.value;
      console.log(policySelection);
    } else {
      policyTotal = null;
    };

    if (policySelection == "Simultaneous") {
        policyTotal = 1;
      } else if (policySelection == "Once Per Site") {
          policyTotal = eval("mon1 + mon2 + mon3 + mon4 + mon5 + mon6");
        }
    

      //Check Interval Variables

    if (intervalTotal == null) {
      intervalTotal = 0;
    } else if (intervalTotal == "30 sec") {
      intervalTotal = 86.4;
    } else if (intervalTotal == "60 sec") {
        intervalTotal = 43.2;
      } else if (intervalTotal == "5 min") {
      intervalTotal = 8.64;
    } else if (intervalTotal == "10 min") {
      intervalTotal = 4.32;
    } else if (intervalTotal == "30 min") {
      intervalTotal = 1.44;
    } else if (intervalTotal == "12 hrs") {
      intervalTotal = 0.06;
    } else if (intervalTotal == "24 hrs") {
      intervalTotal = 0.03;
    };

    //Check Type Variables
    if (typeTotal == null) {
      typeTotal = 0;
    } else if (typeTotal == "DNS" || typeTotal == "FTP" || typeTotal == "SSH" || typeTotal == "HTTP" || typeTotal == "SMTP" || typeTotal == "TCP") {
      mon1 = document.getElementById('northAmE' + i).checked ? .04:0;
      mon2 = document.getElementById('northAmW' + i).checked ? .04:0;
      mon3 = document.getElementById('NorthAmC' + i).checked ? .04:0;
      mon4 = document.getElementById('europe' + i).checked ? .04:0;
      mon5 = document.getElementById('asiaPac' + i).checked ? .08:0;
      mon6 = document.getElementById('oceania' + i).checked ? .12:0;
      typeTotal = eval("(((mon1 + mon2 + mon3 + mon4) * intervalTotal) + (mon5 * intervalTotal) + (mon6 * intervalTotal)) / policyTotal");
    } else if (typeTotal == "HTTPS"){
        mon1 = document.getElementById('northAmE' + i).checked ? .08:0;
        mon2 = document.getElementById('northAmW' + i).checked ? .08:0;
        mon3 = document.getElementById('NorthAmC' + i).checked ? .08:0;
        mon4 = document.getElementById('europe' + i).checked ? .08:0;
        mon5 = document.getElementById('asiaPac' + i).checked ? .16:0;
        mon6 = document.getElementById('oceania' + i).checked ? .24:0;
        typeTotal = eval("((mon1 + mon2 + mon3 + mon4) * intervalTotal) + (mon5 * intervalTotal) + (mon6 * intervalTotal)");
      } else if (typeTotal == "HTTP Waterfall"){
      mon1 = document.getElementById('northAmE' + i).checked ? 50:0;
      mon2 = document.getElementById('northAmW' + i).checked ? 50:0;
      mon3 = document.getElementById('NorthAmC' + i).checked ? 50:0;
      mon4 = document.getElementById('europe' + i).checked ? 50:0;
      mon5 = document.getElementById('asiaPac' + i).checked ? 100:0;
      mon6 = document.getElementById('oceania' + i).checked ? 150:0;
      typeTotal = eval("((mon1 + mon2 + mon3 + mon4) * intervalTotal) + (mon5 * intervalTotal) + (mon6 * intervalTotal)");
    } else if (typeTotal == "HTTPS Waterfall"){
      mon1 = document.getElementById('northAmE' + i).checked ? 60:0;
      mon2 = document.getElementById('northAmW' + i).checked ? 60:0;
      mon3 = document.getElementById('NorthAmC' + i).checked ? 60:0;
      mon4 = document.getElementById('europe' + i).checked ? 60:0;
      mon5 = document.getElementById('asiaPac' + i).checked ? 160:0;
      mon6 = document.getElementById('oceania' + i).checked ? 160:0;
      typeTotal = eval("((mon1 + mon2 + mon3 + mon4) * intervalTotal) + (mon5 * intervalTotal) + (mon6 * intervalTotal)");
    };
    
    console.log(typeTotal.toFixed(2));
    console.log(intervalTotal);
    console.log(pushTotal);
    console.log(checkTotal);
    console.log(smsTotal);
    console.log(policyTotal);
//Adds +1 to i
    i++;
  };
//Returns i to 0
  i = 0;
  return false;
};



// counter for ID
// divA.setAttribute("style" , "user" + ++counter);

//Adding A New Check
var counter = 0;
$('#addCheck').click(function() {
  $('#group1').after('<form class="form-horizontal">\
                        <div class="jumbotron checkFields" style="padding-top:10px;padding-left:10px;">\
                        <button class="btn btn-danger glyphicon glyphicon-remove-sign" id="sonarDelete"></button>\
                            <div class="form-group">\
                                <label for="name" class="col-sm-3 control-label">Number Of Checks</label>\
                                <div class="col-xs-1">\
                                    <input class="form-control col-xs-1" id="checks'+counter+'" type="number" min="1"></input>\
                                </div>\
                            </div>\
                            <div class="form-group">\
                                <label for="name" class="col-sm-3 control-label">SMS Contacts</label>\
                                <div class="col-xs-1">\
                                    <input class="form-control col-xs-1" id="smsNotify'+counter+'" type="number" min="1"></input>\
                                </div>\
                            </div>\
                            <div class="form-group">\
                                <label for="name" class="col-sm-3 control-label">Push Notifications</label>\
                                <div class="col-xs-1">\
                                    <input class="form-control col-xs-1" id="pushNotify'+counter+'" type="number" min="1"></input>\
                                </div>\
                            </div>\
                            <div class="form-group">\
                                <label for="name" class="col-sm-3 control-label">Check Type</label>\
                                <div class="col-sm-2">\
                                        <select class="form-control" id="checkType'+counter+'">\
                                            <option>HTTP</option>\
                                            <option>HTTPS</option>\
                                            <option>TCP</option>\
                                            <option>DNS</option>\
                                            <option>HTTP Waterfall</option>\
                                            <option>HTTPS Waterfall</option>\
                                        </select>\
                                </div>\
                            </div>\
                            <div class="form-group">\
                                <label for="name" class="col-sm-3 control-label">Check Interval</label>\
                                <div class="col-sm-2">\
                                        <select class="form-control" id="interval'+counter+'" >\
                                            <option>30 sec</option>\
                                            <option>60 sec</option>\
                                            <option>5 min</option>\
                                            <option>10 min</option>\
                                            <option>30 min</option>\
                                            <option>12 hrs</option>\
                                            <option>24 hrs</option>\
                                        </select>\
                                </div>\
                            </div>\
                            <div class="form-group">\
                                <label for="name" class="col-sm-3 control-label">Check Interval Policy</label>\
                                <div class="col-sm-2">\
                                        <select class="form-control" id="intPolicy'+counter+'">\
                                            <option>Simultaneous</option>\
                                            <option>Once Per Site</option>\
                                        </select>\
                                </div>\
                            </div>\
                            <div class="container">\
                                <div class="row">\
                                <label for="name" class="col-sm-3 control-label">Monitoring Locatins</label>\
                                    <div class="form-check col-md-7" id="monLocations '+counter+'">\
                                        <label class="form-check-label"><input type="checkbox" class="form-check-input" id="northAmE'+counter+'"> North America East <br></label>\
                                        <label class="form-check-label"><input type="checkbox" class="form-check-input" id="northAmW'+counter+'"> North America West <br></label>\
                                        <label class="form-check-label"><input type="checkbox" class="form-check-input" id="NorthAmC'+counter+'"> North America Central <br></label>\
                                        <label class="form-check-label"><input type="checkbox" class="form-check-input" id="europe'+counter+'"> Europe <br></label>\
                                        <label class="form-check-label"><input type="checkbox" class="form-check-input" id="asiaPac'+counter+'"> Asia Pasific <br></label>\
                                        <label class="form-check-label"><input type="checkbox" class="form-check-input" id="oceania'+counter+'"> Oceania <br></label>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>\
                         </form>');
  counter ++; 
  return false;          
});




/*sonarTotal.onclick = function(form) {
    for (var i = 1; i <= 3; i++) {
        alert(form[checks+i].value);  // Here's where my problem is..
    }
}*/

//BUTTON ACTION jQuery
$('#sonarCalc').on('click','#sonarDelete',function() {
  $(this).parent().remove();
});

