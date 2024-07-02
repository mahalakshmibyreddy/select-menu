


var selectField =document.getElementById("selectField");
var selectText =document.getElementById("selectText");
var options =document.getElementsByClassName("options");
var List =document.getElementById("List");
var arrowIcon=document.getElementById("arrowIcon");

  selectField.onclick= function() {
    List.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
  }    


for(option of options){
    option.onclick= function() {
        selectText.innerHTML= this.textContent;
        List.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate");
    }
}