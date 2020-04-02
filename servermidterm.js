var express = require('express');
var app = express();
let total=0;

app.use(express.static('public'));
app.set('view engine', 'ejs');

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true }); // for parsing form data
app.use(urlencodedParser);
app.use("/", express.static("public"));

var numberDatabase = [];
var realTotal=0;

var alldatas = [];
app.post('/timeline', function (req, res) {
    

    var number = req.body.number;
    // console.log(number);

    numberDatabase.push(number);
    var realTotal = sum();
    
// loop through the data here
// and send the total to the ejs

  var height;

  if (realTotal > 2048){
    height = "100%";
  }
  else{
    height = realTotal/2048 * 100 + "%";
  }
console.log(realTotal);
console.log(height);
  var passingData = { number: realTotal, height: height};
  res.render("timeline.ejs", passingData);


 

});

function sum(){
  let i=0;
  total += parseInt(numberDatabase[numberDatabase.length-1]);

  console.log(total);
  return total;

}

app.get('/timelinedata', function(req,res){
  var number = 12;
    // console.log(number);

    numberDatabase.push(number);
    var realTotal = sum();
    
// loop through the data here
// and send the total to the ejs

  var height;

  if (realTotal > 2048){
    height = "100%";
  }
  else{
    height = realTotal/2048 * 100 + "%";
  }
console.log(realTotal);
console.log(height);
  var passingData = { number: realTotal, height: height};
res.send(passingData);


 

});



app.listen(80, function () {
  console.log('Example app listening on port 80!')
});

app.get('/', function(req, res) {

//  res.render('start.html', {});




//   var data = req.query.data;
//   var data = {
//     name: req.body.name,
//     country: req.body.country,
//     performance: req.body.performance
//   };

//   var response = "<html><body><b>Listed below are other people's responses!</b><br />"
//   database.push(data);
//   for (var i = 0; i < database.length; i++) {
//     response += database[i] + "<br />";
//   }
//   req.query.get;
//   response += "</body></html>";
//   res.send(response);
});