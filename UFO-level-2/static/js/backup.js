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

// const filterButton = d3.select("#filter-btn");

filterButton.on("click",()=> {
    d3.event.preventDefault();

    const inputElement=d3.select("#datetime").property("value");

    console.log(inputElement);

    d3.selectAll("tbody>tr").remove();

    const filteredTable = tableData.filter(sighting => sighting.datetime === inputElement);

    console.log(filteredTable);

    

    filteredTable.forEach((sightings) => {
        const row = tbody.append("tr");
        for (key in sightings){
            const cell = tbody.append("td");
            cell.text(sightings[key]);
        }
    });

});

    
// from data.js
var tableData = data;

// YOUR CODE HERE!


function table() {
    tableData.forEach((sightings) => {
        let tbody = d3.select("tbody");
        const row = tbody.append("tr");
        for (key in sightings){
            const cell = tbody.append("td");
            cell.text(sightings[key]);
        }
    });
}

 const filterButton = d3.select("#filter-btn");

function searchButton() {
    filterButton.on("click",()=> {
        d3.event.preventDefault();
    
        const inputElement=d3.select("#datetime").property("value");
    
        console.log(inputElement);
    
        //d3.selectAll("tbody>tr").remove();
    
        const filteredTable = tableData.filter(sighting => sighting.datetime === inputElement);
    
        console.log(filteredTable);
    
        
    });

    table();
}

    

   


   

