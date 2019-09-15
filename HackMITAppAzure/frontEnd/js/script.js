//main script stuff


function zipCodeEntered(){
  if(document.getElementById("zipcode-input").value != ""){
    location.assign("../html/events-in-area.html");
  }
}


/*
var input = document.getElementById("search-query");
input.addEventListener("keyup", function(event) {
  if (event.keyCode == 13 && document.getElementById("search-query").value != "") {
   event.preventDefault();
   document.getElementById("search-button").click();
  }
});*/