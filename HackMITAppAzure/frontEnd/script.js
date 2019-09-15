function findOrg(){
  if(document.getElementById("org-name").value != ""){
    var temp = document.getElementById("org-name").value;
    document.getElementById("header-of-this-page").innerHTML = temp + " Events List";
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