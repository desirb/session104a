console.log("Executed")
//cannot start a variable with a number, no special characters, camel case declaration, you can use underscores, pascal case is all lowercase letters

var name; //ddeclartion of the variable


name="Britley"; //assigning the variable a value

var names= "Britley Desir"; //declaring and assiging the variable in the same line

var userName= 1031;

//you can declare the same variable twice with var but only the last line will be displayed

//let cannot be declared twice but can change?

//const cannot be declared twice and cannot be changed




console.log(name,userName);

var carName= "Volvo";

var x= 50;
console.log(carName,x);



let band="Metalica", song= "Enter Sandman";

let title;

title= band + " : " + song;

console.log(title.toUpperCase());
console.log(title.length);

let activity= "I am learning JavaScript in this course.";

name= activity.split(" ");
console.log(name);

let interests= "video games, eating, working out"

name= interests.split(",");
console.log(name);

name=activity.includes("JavaScript");
console.log(name);

email= "britley.0317yahoo.com";
name=email.includes("britley.0317@yahoo.com")
console.log(name);