// from data.js
var tableData = data;

// YOUR CODE HERE!
let tbody = d3.select("tbody");

tableData.forEach((sightings) => {
    const row = tbody.append("tr");
    for (key in sightings){
        const cell = tbody.append("td");
        cell.text(sightings[key]);
    }
});

 const filterButton = d3.select("#filter-btn");

filterButton.on("click",()=> {
    d3.event.preventDefault();

    const inputElement=d3.select("#datetime").property("value");

    console.log(inputElement);

    d3.selectAll("tbody").remove();

    const filteredTable = tableData.filter(sighting => sighting.datetime === inputElement);

    console.log(filteredTable);

    

    filteredTable.forEach((sightings) => {
        const tbody = d3.select("#ufo-table").append("tbody")
        const row = tbody.append("tr");
        for (key in sightings){
            const cell = tbody.append("td");
            cell.text(sightings[key]);
        }
    });

});