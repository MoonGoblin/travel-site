class Person {
	constructor(fullName, favColor){
		this.name = fullName;
		this.color = favColor;

	}

	greet() {
		console.log("Hi there, my name is " + this.name + " and my favorite color is " + this.color + ".");
	}
}

// function Person(fullName, favColor) {
// 	this.name = fullName;
// 	this.color = favColor;
// 	this.greet = function() {
// 		console.log("Hello, my name is " + this.name + " and my favorite color is " + this.color + ".");
// 	}
// }

//below is node.js way of doing it
//module.exports = Person;
//below is ES6 way of doing it (the javascript native way)
export default Person;

