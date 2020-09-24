// app.js 

// from data.js
// name variables
var tableData = data;
var tblColumns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Table_Reload
var Table_Reload = (Data) => {
	tbody.html("");
		// adds a new row for each row of Data
		Data.forEach(dataRow => { 
			var tblRow = tbody.append("tr");  
			
			// adds columns
			tblColumns.forEach(column => tblRow.append("td").text(dataRow[column]))
		});
};

// Use Table_Reload
Table_Reload