function createHuman(name, age, height){
	var it = {}
	it.name = name;
	it.age = age;
	it.height = height;
	return it;
}





var Person;


document.querySelector('.submitform').addEventListener('click', function(){
	Person = new createHuman( document.getElementById('name').value, document.getElementById('age').value,document.getElementById('height').value);
	console.log(Person);  
})



function sayHello(){
	alert("hello");
}