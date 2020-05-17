var cats = "Justin";
var dogs = "Snickers";
var bird = "favorite";

function writeHTML(name, className, candy, fav){
  document.querySelector(className).innerHTML = "Hi! My name is "+cats+", and my "+bird+" candy is "+dogs+". ";
  
  cats=name;
  bird=fav;
  dogs=candy;
 
  
  
}
writeHTML("Emily", ".classMan1", "Nerds", "favorite");
writeHTML("Justin", ".classMan2", "Smarties", "least favorite");
writeHTML("Emily", ".classMan3", "Snickers", "least favorite");
writeHTML("jack", ".classMan4");