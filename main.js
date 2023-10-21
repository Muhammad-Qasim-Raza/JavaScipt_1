// AlertS CHAPTER #1

alert("Hello, and welcome to my website!");

alert("Error! Please enter a valid password.");

alert("Welcome to JS Land...\nHappy Coding!");

alert("Welcome to JS Land...")

alert("Happy Coding!\nPrevent this page from creating additional dialogs.")

alert("Hello... I can run JS through my web browser's console")

alert("Hello... I can run JS through my web browser's console")


// VARIABLES FOR STRINGS CHAPTER #2

var username;

var myName = "Muhammad Qasim Raza";

var message;
message = "Hello World";
alert("Message: " + message);

var studentName = "Muhammad Qasim Raza";
var age = 21;
var address = "Karachi";
var phoneNumber = "0347 2584939";

var bioData = "Student Name: " + studentName + "\n" +
    "Age: " + age + " years\n" +
    "Address: " + address + "\n" +
    "Phone Number: " + phoneNumber;

alert(bioData);

alert("Pizza\nPizz\nPiz\nPi\nP");

var email = "qasim@example.com";
var message = "My email address is: " + email;
alert(message);

var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);

document.write("Yah! I can write HTML content through JavaScript");

document.write("<br>");

alert("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”")

// VARIABLES FOR NUMBERS CHAPTER #3

var age = 21;
alert("I am " + age + " years old");

var visitCount = parseInt(localStorage.getItem("visitCount") || 0) + 1;
localStorage.setItem("visitCount", visitCount);
document.getElementById("visit-count").textContent = "You have visited this site " + visitCount + " times.";
document.write("<br>");

var birthYear = 2002;
document.write("My birth year is: " + birthYear);
document.write("<br>");
document.write("Data type of birthYear is: " + typeof(birthYear));

document.write("<br>");
document.write("<br>");
var visitorName = prompt("Enter your name:");
var productTitle = prompt("Enter the product title:");
var quantity = +prompt("Enter the quantity you want to order:");
document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on Qasim Clothing store.");

// VARIABLE NAMES: LEGAL & ILLEGAL CHAPTER #4

// 1. Declare 3 variables in one statement
var variable1, variable2, variable3;

// 2. Declare 5 legal and 5 illegal variable names
// Legal variable names
var $myVariable;
var _myVariable;
var myVariable;
var myVariable1;
var my_Variable;

// Illegal variable names
// var 1stVariable; // Cannot start with a number
// var myVariable; // Cannot contain spaces
// var my-Variable; // Cannot contain hyphens
// var my@Variable; // Cannot contain special characters
// var class; // Cannot be a reserved keyword

// 3. Display the rules in the browser
document.write("<h1>Rules for naming JS variables</h1>");
document.write("<p>a) Variable names can only contain letters, numbers, underscores, and dollar signs. For example $my_1stVariable</p>");
document.write("<p>b) Variables must begin with a letter, underscore, or dollar sign. For example $name, _name, or name</p>");
document.write("<p>c) Variable names are case sensitive</p>");
document.write("<p>d) Variable names should not be JS keywords</p>");