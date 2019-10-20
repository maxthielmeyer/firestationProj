//quick script to enable editing when edit button pressed
function editInfo(){
    document.getElementById("submitButton").style.display = "inline";
    document.getElementById("cancelButton").style.display = "inline";
    document.getElementById("editButton").style.display = "none";
    var x = document.getElementsByClassName("personInfo");
    for (var i=0, len=x.length|0; i<len; i=i+1|0) {
      x[i].disabled = false;}
    }
// script to cancel editing when cancel button pressed
function cancelEdit(){
    document.getElementById("submitButton").style.display = "none";
    document.getElementById("editButton").style.display = "inline";
    document.getElementById("cancelButton").style.display = "none";
    var x = document.getElementsByClassName("personInfo");
    for (var i=0, len=x.length|0; i<len; i=i+1|0) {
      x[i].disabled = true;
    }
    }
