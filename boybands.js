var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = 5;

// Keep track of which band we're on in the loop
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {

  // Add the band names into the correct <div>
   currentBand = bands[loopTracker];
    var myBands = document.createElement("boy-bands");
    myBands.innerHTML = currentBand;
    bandElement.appendChild(myBands);

    currentVeggie = vegetables[loopTracker];
    var myVeg = document.createElement("vegetables");
    myVeg.innerHTML = currentVeggie;
    veggieElement.appendChild(myVeg);
}