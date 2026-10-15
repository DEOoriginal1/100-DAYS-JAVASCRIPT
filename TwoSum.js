let numbers = [2, 8, 5, 9, 7, 3, 6];

let target = 9;

for(let count = 0; count <= numbers.length; count++){
	for(let counter = count + 1; counter <= numbers.length; counter++){
		if(numbers[count] + numbers[counter] == target)
		
		console.log([count,counter]);
	}
}




