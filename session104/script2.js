//arrays - you can save several elements inside an array

var numbers = [10,2,3,4,5,6];
console.table(numbers);

var months = ["Jan","Feb","Mar","Apr","May"];


months.push("Jan"); //adds new element at the end

months.unshift("Month 0"); //adds new element at the beginning

months[3]= "March"; //targets array element and changes it

// alert(months);

console.table(months);



//exercise: sum the numbers and save it in a variable, calculate the average, display an alert of the avergae

var numbers = [10,2,5,8,9,6];

sum=numbers[0]+numbers[1]+numbers[2]+numbers[3]+numbers[4]+numbers[5];

average=sum / 6;

console.log("The total value for the array is " + sum);

console.log("The average for the array is " + average);

alert("The average is " + average);