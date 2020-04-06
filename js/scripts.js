// Business Logic

function ListOfPlaces() {
  this.places = [];
  this.currentId = 0;
}

function Place(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

ListOfPlaces.prototype.addPlace = function (place) {
  // place.id = this.assignId();
  this.places.push(place);
}

var paris = new Place("Paris, France", "Eiffel Tower", "Summer '09", "Saw a homeless person get hit by the bus I was on.");
var barcelona = new Place("Barcelona, Spain", "la Sagrada Familia", "Summer '09", "Watched the human towers.");
var greece = new Place("Thessaloniki, Greece", "Parthenon", "Summer", "Climbed Mt. Olympus");

var florida = new Place("Orlando, Florida", "Busch Gardens", "Summer of 2012", "Had quite a bit of fun at the waterpark");
var washingtonDC = new Place("Washington D.C", "Smithsonian", "Summer of 2014", "Visited most memorials and Smithsonian Musseums." );
var canada = new Place("BC, Canada", "Concert Hall", "Fall of 2009", "Attended a piano concerto with Alfred Brendall performing.");




// Front-end Logic
$(document).ready(function() {
  $("#paris").submit(function(event) {
    $("#parislist").toggle().empty();
    event.preventDefault();
    $("#parislist").append("<li>" + paris.location + "</li>");
    $("#parislist").append("<li>" + paris.landmarks + "</li>");
    $("#parislist").append("<li>" + paris.timeOfYear + "</li>");
    $("#parislist").append("<li>" + paris.notes + "</li>");
  });
  $("#barcelona").submit(function(event) {
    $("#barcelonalist").toggle().empty();
    event.preventDefault();
    $("#barcelonalist").append("<li>" + barcelona.location + "</li>");
    $("#barcelonalist").append("<li>" + barcelona.landmarks + "</li>");
    $("#barcelonalist").append("<li>" + barcelona.timeOfYear + "</li>");
    $("#barcelonalist").append("<li>" + barcelona.notes + "</li>");
  });
  $("#greece").submit(function(event) {
    $("#greecelist").toggle().empty();
    event.preventDefault();
    $("#greecelist").append("<li>" + greece.location + "</li>");
    $("#greecelist").append("<li>" + greece.landmarks + "</li>");
    $("#greecelist").append("<li>" + greece.timeOfYear + "</li>");
    $("#greecelist").append("<li>" + greece.notes + "</li>");
  });
  $("#florida").submit(function(event) {
    $("#floridalist").toggle().empty();
    event.preventDefault();
    $("#floridalist").append("<li>" + florida.location + "</li>");
    $("#floridalist").append("<li>" + florida.landmarks + "</li>");
    $("#floridalist").append("<li>" + florida.timeOfYear + "</li>");
    $("#floridalist").append("<li>" + florida.notes + "</li>");
  });
  $("#washington").submit(function(event) {
    $("#washingtonDClist").toggle().empty();
    event.preventDefault();
    $("#washingtonDClist").append("<li>" + washingtonDC.location + "</li>");
    $("#washingtonDClist").append("<li>" + washingtonDC.landmarks + "</li>");
    $("#washingtonDClist").append("<li>" + washingtonDC.timeOfYear + "</li>");
    $("#washingtonDClist").append("<li>" + washingtonDC.notes + "</li>");
  });
  $("#canada").submit(function(event) {
    $("#canadalist").toggle().empty();
    event.preventDefault();
    $("#canadalist").append("<li>" + canada.location + "</li>");
    $("#canadalist").append("<li>" + canada.landmarks + "</li>");
    $("#canadalist").append("<li>" + canada.timeOfYear + "</li>");
    $("#canadalist").append("<li>" + canada.notes + "</li>");
  });
});