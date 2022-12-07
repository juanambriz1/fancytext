/*
 *	Juan Ambriz
 *	CSC196W
 *	12/7/22
 */

//Cap the text
function caps() {
	alert("Hello, world!");
	var text = document.getElementById("inputText");
	text.style.fontSize = "24pt";
}

//underline and bold 							FANCY
function bold() {
   var text = document.getElementById("inputText");
   text.style.fontWeight = "bold";
   text.style.textDecoration= "underline";
   text.style.color= "blue";
}

//remove underline remove bold and make smaller	CLEANUP
function remove() {
   var text = document.getElementById("inputText");
   text.style.fontSize = "initial";
   text.style.fontWeight = "normal";
   text.style.color = "black";
   text.style.textDecoration= "none";
}

//Make uppercase and add Moo after every period
function addMoo() {
   txt = document.getElementById('inputText');
   txt.value = txt.value.split('.').join('-Moo');
   txt.style.textTransform="uppercase";   
}
