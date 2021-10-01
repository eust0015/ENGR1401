const QueryString = window.location.search;
const urlParams = new URLSearchParams(QueryString); 
const searchText = urlParams.get("search").toLowerCase();
//alert("Search results for: " + searchText);

found = false;
const home = document.querySelector("#home");
const map = document.querySelector("#map");
const culture = document.querySelector("#culture");
const environment = document.querySelector("#environment");
const amenities = document.querySelector("#amenities");
const camping = document.querySelector("#camping");
const transportation = document.querySelector("#transportation");
const emergency = document.querySelector("#emergency");
const searchDescription = document.querySelector("#searchDescription");
const searchResultsArea = document.querySelector("#searchResultsArea");

// Home
if(searchText.search("home") > -1
|| searchText.search("index") > -1
|| searchText.search("main") > -1
|| searchText.search("welcome") > -1
|| searchText.search("start") > -1
|| searchText.search("front") > -1
|| searchText.search("initial") > -1
|| searchText.search("landing") > -1){
    found = true;    
}
else{
    home.style.display = "none";
}

// Map
if(searchText.search("map") > -1
|| searchText.search("direction") > -1
|| searchText.search("route") > -1
|| searchText.search("path") > -1
|| searchText.search("way") > -1){
    found = true;    
}
else{
    map.style.display = "none";
}

// Culture
if(searchText.search("culture") > -1
|| searchText.search("tradition") > -1
|| searchText.search("site") > -1
|| searchText.search("art") > -1
|| searchText.search("society") > -1
|| searchText.search("eduction") > -1
|| searchText.search("life") > -1
|| searchText.search("custom") > -1
|| searchText.search("heritage") > -1
|| searchText.search("lore") > -1
|| searchText.search("knowledge") > -1){
    found = true;    
}
else{
    culture.style.display = "none";
}

// Environment
if(searchText.search("environment") > -1
|| searchText.search("nature") > -1
|| searchText.search("rubbish") > -1
|| searchText.search("trash") > -1
|| searchText.search("waste") > -1
|| searchText.search("dump") > -1
|| searchText.search("fire") > -1
|| searchText.search("bird") > -1
|| searchText.search("fish") > -1
|| searchText.search("animal") > -1){
    found = true;    
}
else{
    environment.style.display = "none";
}

// Amenities
if(searchText.search("amenity") > -1
|| searchText.search("amenities") > -1
|| searchText.search("facility") > -1
|| searchText.search("facilities") > -1
|| searchText.search("comfort") > -1
|| searchText.search("convenience") > -1
|| searchText.search("service") > -1
|| searchText.search("toilet") > -1
|| searchText.search("bathroom") > -1
|| searchText.search("general") > -1
|| searchText.search("store") > -1
|| searchText.search("shop") > -1
|| searchText.search("market") > -1
|| searchText.search("food") > -1
|| searchText.search("water") > -1
|| searchText.search("petrol") > -1
|| searchText.search("fuel") > -1
|| searchText.search("gas") > -1
|| searchText.search("supplies") > -1
|| searchText.search("phone") > -1
|| searchText.search("accomodation") > -1
|| searchText.search("rest") > -1
|| searchText.search("stop") > -1){
    found = true;    
}
else{
    amenities.style.display = "none";
}

// Camping
if(searchText.search("camp") > -1
|| searchText.search("site") > -1
|| searchText.search("tent") > -1
|| searchText.search("ground") > -1
|| searchText.search("area") > -1
|| searchText.search("pitch") > -1
|| searchText.search("base") > -1){
    found = true;    
}
else{
    camping.style.display = "none";
}

// Transportation
if(searchText.search("transport") > -1
|| searchText.search("season") > -1
|| searchText.search("wet") > -1
|| searchText.search("dry") > -1
|| searchText.search("shuttle") > -1
|| searchText.search("vehicle") > -1
|| searchText.search("drive") > -1
|| searchText.search("driving") > -1
|| searchText.search("trip") > -1
|| searchText.search("journey") > -1
|| searchText.search("travel") > -1
|| searchText.search("tour") > -1
|| searchText.search("bus") > -1
|| searchText.search("car") > -1
|| searchText.search("road") > -1
|| searchText.search("dirt") > -1
|| searchText.search("land") > -1
|| searchText.search("2wd") > -1
|| searchText.search("4wd") > -1
|| searchText.search("route") > -1
|| searchText.search("air") > -1
|| searchText.search("sea") > -1){
    found = true;    
}
else{
    transportation.style.display = "none";
}

// Emergency
if(searchText.search("emergency") > -1
|| searchText.search("contact") > -1
|| searchText.search("number") > -1
|| searchText.search("000") > -1
|| searchText.search("911") > -1
|| searchText.search("disaster") > -1
|| searchText.search("police") > -1
|| searchText.search("ambulance") > -1
|| searchText.search("fire") > -1
|| searchText.search("accident") > -1
|| searchText.search("broken") > -1
|| searchText.search("help") > -1){
    found = true;    
}
else{
    emergency.style.display = "none";
}

// No Results
if(found){
    searchDescription.innerText = "Showing search results for: " + searchText;
}
else{
    searchDescription.innerText = "There was no search results found for: " + searchText;
    searchResultsArea.style.display = "none";
}
