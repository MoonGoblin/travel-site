var $ = require("jquery");
//below is from node.js
//var Person = require("./modules/Person");
//below is from ES6:
import Person from "./modules/Person";


class Adult extends Person {
	payTaxes() {
		console.log(this.name + " now owes $0 in taxes.");
	}
}

alert("John Williams is the MAN!!");

//Constructor Function - like a Java class
console.log("Trying a Constructor Function ...");

var john = new Person("John Doe", "blue");

john.greet();

var jane = new Adult("Jane Smith", "orange");

jane.greet();
jane.payTaxes();

//$("h1").remove();

//console.log("Hello there!!");
// console.log("Hello, my name is John Doe and my favorite color is blue.");
// console.log("Hello, my name is Jane Smith and my favorite color is green.");

// console.log("Here you go ...");

// function person(name, favColor) {
// 	console.log("Hello, my name is " + name + " and my favorite color is " + favColor + ".")
// }

// var johnName = "John Doe";
// var johnFavColor = "blue";


// person(johnName, johnFavColor);
// person("Jane Smith", "green");

// console.log("Here you go with a function ...");

// function person(name, favColor) {
// 	console.log("Hello, my name is " + name + " and my favorite color is " + favColor + ".")
// }

// var john = {
// 	name: "John Doe",
// 	favoriteColor: "blue"
// }

// var jane = {
// 	name: "Jane Smith",
// 	favoriteColor: "green"
// }


// person(john.name, john.favoriteColor);
// person("Jane Smith", "green");


// var john = {
// 	name: "John Doe",
// 	favoriteColor: "blue", 
// 	greet: function() {
// 		console.log("Hello, my name is " + john.name + " and my favorite color is " + john.favoriteColor +".");
// 	}
// }

// john.greet();

// //9:56




//console.log(jane.color);
