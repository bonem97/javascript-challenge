// app.js 

// from data.js
var tableData = data;
var tblColumns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]


// name variables
var Search_Date = d3.select("#searchDate");
var btn_Search = d3.select("#btnSearch");
var Table_Body = d3.select("tbody");
var btn_Reset = d3.select("#btnReset");

// Table_Reload
var Table_Reload);
	
	// adds a new row for each row of Data
	Data.forEach(dataRow => { 
		var tblRow = tbody.append("tr");  
		
		// adds columns
		tblColumns.forEach(column => tblRow.append("td").text(dataRow[column]))
	});
}