// app.js 

// from data.js
// name variables
let tableData = data;
let tblColumns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

function coll_add {
	tblColumns.forEach(column => 
		tblRow.append("td").text(dataRow[column]))
}

// Table_Reload
let Table_Reload = (Data) => {
	tbody.html("");
		// adds a new row for each row of Data
		Data.forEach(dataRow => { 
			var tblRow = tbody.append("tr");  
			
			// adds columns
			coll_add
		});
};

// Use Table_Reload
Table_Reload