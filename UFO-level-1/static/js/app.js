// from data.js
var details = data;

// Create empty arrays to store the values
var datetime = [];
var city = [];
var state = [];
var country = [];
var shape = [];
var durationMinutes = [];
var comments = [];

// Use map to build arrays
var datetimeMapped = details.map(detail => detail.datetime);
var cityMapped = details.map(detail => detail.city);
var stateMapped = details.map(detail => detail.state);
var countryMapped = details.map(detail => detail.country);
var shapeMapped = details.map(detail => detail.shape);
var durationMapped = details.map(detail => detail.duration);

var tbody = d3.select("tbody");

function buildTable(data) {
  tbody.html('');
  data.forEach(function (sighting) {
  var row = tbody.append("tr");
  Object.entries(sighting).forEach(function ([key, value]) {
    var cell = row.append("td");
    cell.text(value);
  });
})};


function handleClick() {

  
  let date = d3.select("#datetime").property("value");
  let filterData = data;
  
  
  if(date) {
    
    filterData = filterData.filter((row) => row.datetime === date);
  }
  
  console.log(filterData);

    buildTable(filterData);
  }

  d3.selectAll("#filter-btn").on("click", handleClick);
  buildTable(details);

  
