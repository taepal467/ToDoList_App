var button = document.getElementById("add");
var input = document.getElementById("myInput");
var ul = document.querySelector("ul");
var tasks=document.getElementsByTagName("li");

//For input
function inputLength() {
	return input.value.length;
}

//Creating a list element
function createListElement() {
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";

	var btn = document.createElement("button");
		btn.appendChild(document.createTextNode("Delete"));
		li.appendChild(btn);
		btn.onclick = removeParent;
}

//adding after clicking the button
function addListAfterClick() {
		if(inputLength() > 0) {
		createListElement();
	}
}

//adding after pressing enter
function addListAfterKeypress(event){
	if(inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

//Delete Button
ul.onclick=function(event){
 	var target=event.target;
 	target.classList.toggle("done");
 }

 function listLength(){
 	return tasks.length;
 }

 function deleteButton(){
 	var btn=document.createElement("button");
 btn.appendChild(document.createTextNode("Delete"));
 tasks[i].appendChild(btn);
 btn.onclick=removeParent;
 }

 for( i=0;i<listLength();i++){

 deleteButton();
 }

 function removeParent(evt){
 	evt.target.parentNode.remove();
 } 

