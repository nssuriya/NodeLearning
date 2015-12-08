var fs = require('fs');
var readline = require('readline');
var stream = require('stream');




var instream = fs.createReadStream('WDI_Data.csv');
var outstream1 = fs.createWriteStream("json/landarea.json");
var outstream2 = fs.createWriteStream("json/hectares_person.json");
var outstream3 = fs.createWriteStream("json/hectares.json");
var rl = readline.createInterface(instream,outstream1);

var heading = new Array();
var a=0;
var indiaArable = new Array();


rl.on('line', function(line) {
  array=line.split(",");
  //var flag = false;
//  var indiaArable = {};

  if(array[0]=="Country Name")
    for(i in array){
      heading[i]=array[i];
    }


  if(array[0]=="India" && array[2]=="Arable land (% of land area)"){
    console.log("Entering loop");
    for(i in array){
    var temp = new Object();
    temp["year"]=heading[i];

    temp["value"]=parseFloat(array[i]);

    indiaArable.push(temp);


  }

  }


//Graph2

var africa = ['Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina', 'Burundi',
'Cameroon', 'Cape Verde', 'Central African Republic', 'Chad', 'Comoros',
'Congo', 'Congo', ' Democratic Republic of', 'Djibouti', 'Egypt',
'Equatorial Guinea', 'Eritrea', 'Ethiopia', 'Gabon', 'Gambia', 'Ghana',
'Guinea', 'Guinea-Bissau', 'Ivory Coast', 'Kenya', 'Lesotho', 'Liberia',
'Libya', 'Madagascar', 'Malawi', 'Mali', 'Mauritania', 'Mauritius', 'Morocco',
'Mozambique', 'Namibia', 'Niger', 'Nigeria', 'Rwanda', 'Sao Tome and Principe',
'Senegal', 'Seychelles', 'Sierra Leone', 'Somalia', 'South Africa',
'South Sudan', 'Sudan', 'Swaziland', 'Tanzania', 'Togo', 'Tunisia', 'Uganda',
'Zambia', 'Zimbabwe'];





});

rl.on('close', function(){

   outstream1.write(JSON.stringify(indiaArable));


});
