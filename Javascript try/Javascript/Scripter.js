var student = {
	 name:"Jacky",
	 age:22,
	 height: 185
	
	
}
	//document.write(student.name);
	console.log(student.age);
	window.alert(student.height);


function array(){
	//creating array
	var myArray = ["Jacky", "The", "Best", "1", "2", "3", "4", "5", "6", "7"];
	
	//printing out the array
	console.log(myArray.toString());
	
	//adding new element to end of array
	myArray[myArray.length] = "12345";
	console.log(myArray.toString());
	
	//splice deletes an element in the array
	console.log(myArray.splice(myArray.length-1,1));
	console.log(myArray.toString());
	
	for (var i = 0; i < array.length; i++){
		console.log(myArray[i]);
	}

}

function agechecker(){
	if (student.age >= 20 && student.age <= 40){
		
		console.log("They are aged between 20 and 40");
	}
	else{
		console.log("They are NOT aged between 20 and 40");
		
	}

	
	
}
//document.getElementById('fizzbuzz').addEventListener('click', fizzBuzz(100, "meow", "woof"));

function oneToTen(){
	//checks if divisible by 2, if so then it will print it out
	for (var i = 1; i <= 10; i++){
		if (i % 2 == 0){
			console.log(i);
		}
	}
}

function getValues(){
var Length = document.getElementById('theLength').value;
var Buzz = document.getElementById('buzzWord').value;
var Fizz = document.getElementById('fizzWord').value;

fizzBuzz(Length, Buzz, Fizz);
}

function fizzBuzz(Length, Buzz, Fizz){
	
	for (var i = 1; i <= Length; i++){
		if (i % 3 == 0 && i % 5 == 0){
			console.log(Buzz+Fizz);
		}
		else if (i % 3 == 0){
			console.log(Fizz);
		}
		else if(i % 5 == 0){
			console.log(Buzz);
		}
		else{
			console.log(i);
		}
	}
}



function grabDemValues(){
	var userInput = document.getElementById('DivisibleThree').value;
	divThree(userInput);
}

function divThree(userInput){
	for (var i = userInput; i >= 1; i--){
		if (i % 3 == 0){
			console.log(i);
			}
			else if ((i+1)%3 == 0){
				console.log(i+1);
			}
			else if ((i-1) %3 == 0){
				console.log(i-1);
			}
	}
	
	
	
	
}


function grabTriple(){
	var input = document.getElementById('TripleFinder').value;
	MrTripleFinder(input);
}

function MrTripleFinder(input){
	var TripleCounter = 0;
	for (var i = 0; i < input.length-2; i++){
		if (input.charAt(i) == input.charAt(i+1) && input.charAt(i) == input.charAt(i+2)){
			TripleCounter++;
		}
	}
	console.log("There are " + TripleCounter + " triples in your string " + input + ".");
}


var idCounter = 1;
function createParagraph(){
	
	var paragrapher = document.getElementById("replaceParagraph").value;
	var para = document.createElement("p");
	para.setAttribute("id", idCounter++);
	if (!!paragrapher){
		var node = document.createTextNode(paragrapher);
		
	}
	else{
		var node = document.createTextNode("This is next paragraph :D");
	}
	
	para.appendChild(node);
	
	var element = document.getElementById("AddedParagraph");
	element.appendChild(para);
	
	document.getElementById("replaceParagraph").value = "";
	

}


function deleteParagraph(){
	//console.log(keepTrack);
	//var elem = document.getElementById(String(keepTrack));
    //elem.parentNode.removeChild(elem);
	//keepTrack--;
	
	var parent = document.getElementById("AddedParagraph");
	var child = document.getElementById(--idCounter);
	parent.removeChild(child);
}


function getJSONFile(){
	var requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json';
	var request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.responseType = "json";
	request.send();
	
	request.onload = function(){
		var requestData = request.response;
		var container = document.getElementById("container");
		
	for (var key in requestData){
		for (var item in requestData[key]){
			console.log(requestData[key][item]);
			var myH1 = document.createElement("h1");
			myH1.innerHTML = item + ":" + requestData[key][item];
			container.appendChild(myH1);
		}
	}
}
}

function searcher(){
	var requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json';
	var request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.responseType = "json";
	request.send();
	request.onload = function(){
		var requestData = request.response;
		var search = document.getElementById("Searcher").value;
	for (var key in requestData){
		for (var item in requestData[key]){
			if (search == requestData[key][item]){
				console.log(requestData[key]);
			}
		}
	}
	}
	
}









	