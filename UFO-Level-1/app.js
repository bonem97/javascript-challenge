// app.js 

// from data.js
// name variables
let tableData = data;
let tbody = d3.select("tbody")
let tblColumns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]
 
//function coll_add {
//	tblColumns.forEach(column => 
//		tblRow.append("td").text(dataRow[column]))
//}

// Table_Reload
let Table_Reload = {data.forEach(function(UFOinfo) {
	// append rows and information according to entrances in data
    console.log(UFOinfo);
    let row = tbody.append("tr");
    Object.entries(UFOinfo).forEach(
		function([key, value]) {
    	let cell = row.append("td");
    	cell.text(value);
    })
});

// Use Table_Reload
Table_Reload

function UFO_Finder() {
	// d3.event.PreventDefault();

	tbody.html("");

	let filtered_list = tableData.filter(
		UFO => UFO.datetime === d3.select("#datetime").property("value");
	);
	
	filtered_list.forEach(function(UFOinfo)) {
		Object.entries(UFOinfo).forEach(function([key, value]) {
			tbody.append("tr").append("td").text(value);
		};
	};
}