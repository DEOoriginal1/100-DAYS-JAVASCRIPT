const prompt = require("prompt-sync")();

let repeat = true;

while (repeat){
let number = Number(prompt("Enter a number:  "));

	if (Number.isNaN(number)){
      		console.log("Enter a valid Number"); 	
      			repeat = true;
      					
      	} else{
 	for(let count = 1; count <= 12; count++){
      			let multiplication = number * count;
      				console.log(number + " x " + count + " = " + multiplication);
      				repeat = false;
      				break;
 }
 	break;
 
 }	
 			
 }
 		

