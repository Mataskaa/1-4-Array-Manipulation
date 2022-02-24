let students = ['Brionne', 'Sergio', 'Navier', 'Omar', 'Ali'];



if (name == 'Ali') {
  console.log('The youngest in FEM');
} else if (name == 'Lance' || name == 'Ahmad') {
  console.log('He is a coach');
} else {
  console.log('Most likely a student!')
}

let number = 3.3;

// console.log(Math.floor(4.44))

console.log(Math.floor(Math.random() * 10));


// Psuedo Code
// How do I acces a student from the array
console.log(students[Math.floor(Math.random() * 5)])
// What numbers can I put - 0,1,2,3,4
// How can I randomely get those numbers?
// What does Math.random do by itself?

let numbers = [65, 77, 12, 7, 9, 26, 80];

let result = numbers[Math.floor(Math.random() * 6)] * 2;
console.log(result);


let tvShows = ["AoT", "HxH", "spongebob", "southpark"];

console.log(tvShows);

tvShows[2] = "squarepants";

console.log(tvShows);

console.log(numbers)



console.log(numbers.shift())

console.log(numbers)


let odd = numbers.filter(num => num % 2)

console.log(odd)

