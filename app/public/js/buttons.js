//quick script to enable editing when edit button pressed
function editInfo(){
    document.getElementById("submitButton").style.display = "inline";
    document.getElementById("cancelButton").style.display = "inline";
    document.getElementById("editButton").style.display = "none";
    var x = document.getElementsByClassName("personInfo");
    for (var i=0, len=x.length|0; i<len; i=i+1|0) {
      x[i].disabled = false;}


      var y = document.getElementsByClassName("deleteNumberButton");
      for (var i=0, len=y.length|0; i<len; i=i+1|0) {
        y[i].style.display = "inline";
      }
      }


function addNum(){
  document.getElementById("addNum").style.display = "inline";
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
    var y = document.getElementsByClassName("deleteNumberButton");
    for (var i=0, len=y.length|0; i<len; i=i+1|0) {
      y[i].style.display = "none";
    }
    }
