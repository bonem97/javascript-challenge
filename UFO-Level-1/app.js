// app.js 

// from data.js
// name variables
let tableData = data;
let tbody = d3.select("tbody");
let searchDate = d3.select("#searchdate");
let btnSearch = d3.select("#btnSearch");
let btnReset = d3.select("#btnReset");
let tblColumns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

let Load_Data = (Data) => {
	// Clear the table
	tbody.html("");
	// Fill the table with all data
	Data.forEach(ufos => {
		let row = tbody.append("tr"); 
		// let row_ = row.append("td");
		Object.entries(ufos).forEach(([key, value]) => {
			row.append("td").text(value);  
		});
	});
};

Load_Data(tableData)

btnSearch.on("click", () => {
	d3.event.PreventDefault();

	// tbody.html("");

	let filtered = tableData.filter(
		UFO => UFO.datetime === d3.select("#datetime").property("value")
	);
	
	// Check that the data is being recieved
	console.log(filtered);
	
	// Clear the table and refill it with the relevant data
	Load_Data(filtered);
});