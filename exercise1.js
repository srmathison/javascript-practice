



// Complete at least three of these exercises and submit them for a grade.
 
// Javascript:

// Create a script with two variables assigned to two numbers. Add them together and output the result to the console
var a = 50
var b = 35
console.log (a + b);

var c = "dog";
var d =  "cat";
// Try to add two strings together and output the result to an alert
//alert("this  is an alert");
alert(c + d);
// Create a multi-dimensional array related to a subject that interests you. Output two of the items in sub-arrays to the console

// Write a program that checks if a variable is less than 10. If it is, alert the user that their variable is less than 10. If it is not, let the user know what the variable was and that it was greater than 10.
var x = 8;
if (x < 10) {
	alert("variable is less than ten");
}
	else {
		alert(x + ", " + "variable was greater than 10");
	}
// Try running the script and then changing the variable’s value to see how this affects the program output
var x = 14;
if (x < 10) {
	alert("variable is less than ten");
}
	else {
		alert(x + ", " + "variable was greater than 10");
	}
	
// If you have extra time, write a similar program to check if a string stored in a variable is the same as another string
if (city === "bos") {
alert ("same city");
}
else {
alert("not the same city");
} 
// Declare a function that takes a name as an argument and tells the user what name they’ve entered, try running it after it has been declared
function(name) {
	console.log(name);
}
// Declare a function that takes no arguments but prints something to the console, try running it after it has been declared
// function ( {

// })
// Declare a function that, depending upon which virtual “door” was entered, tells the user they’ve received a different “prize” in an alert. Try running it after it has been declared a few times with each door option.
// jQuery

// Create a basic HTML page with no styling that has at least 10 separate elements on it

// Use jQuery to create an animated “show”! Try changing an element’s CSS, hiding, showing, fading, and sliding, and making the page run amok
$(document).ready(function() {
	
		$("body").slideUp(3000);
		$("body").slideDown(3000);
		$("#subhead").fadeOut(2000);
		$("#name").fadeOut(4000);
		$("#name").fadeIn(2000);
		$("p").slideToggle(2000);
	
		
	
});
// Once the “show” works, rig it up to only fire when the user clicks anywhere on the page

// If you finish this exercise, implement jQuery into some of the websites you built last week and try playing around with some other functions: http://api.jquery.com/ (Links to an external site.)

// Extra Credit

// Write pseudo code for a small program. You can come up with whatever problem you wish to solve. Think for instance, the issue of moving an icon to the left after the user clicks on it and then it fades out.

// You may write something like:

