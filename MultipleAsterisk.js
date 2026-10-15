for(let index = 1; index <= 5; index++){	
		process.stdout.write("*");
	for(let count = 1; count <= index; count++){
			process.stdout.write("*");						
	}
		for(let counter = 5; counter >= index; counter--){
			process.stdout.write(" ");
		}
			for(let star = 5; star >= index; star--){
				process.stdout.write("*");
			}
				for(let space = 1; space <= index; space++){
					process.stdout.write(" ");
 				}
 					for(let spacer = 1; spacer <= index; spacer++){
 						process.stdout.write(" ");
 					}
 						for(let stars = 5; stars >= index; stars--){
 							process.stdout.write("*");
 						}
 							for(let spaces = 5; spaces >= index; spaces--){
 								process.stdout.write(" ");
 							}	
 								for(let lastStar = 1; lastStar <= index; lastStar++){
 									process.stdout.write("*");
 								}
										console.log("");
}




