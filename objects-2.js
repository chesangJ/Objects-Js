//1 Given an array of objects, each object representing a person with a name and age property,
//  write a function that returns a new array containing the names of all people who are 18 years
//   old or older.

const people = [
    { name: 'Alice', age: 17 },
    { name: 'Eunice', age: 22 },
    { name: 'Charlie', age: 14 },
    { name: 'Max', age: 19 },
  ]
 
  
  function namesOfPeople(people){
    let names=[];
    for(let i =0;i<people.length;i++){
    if(people[i].age>=18){
      names.push(people[i].name)
    }
  }
  return names;
  
  }
  console.log(namesOfPeople(people))

// 2.  Write a function that takes an array of objects, where each object
//    represents a product with a name, price, and category property. The function should 
// return an object that groups
    // the products by their categories, with the category names as keys and the arrays of products as values.
const products = [
  { name: 'Laptop', price: 1200, category: 'Electronics' },
  { name: 'Shirt', price: 25, category: 'Clothing' },
  { name: 'Headphones', price: 80, category: 'Electronics' },
  { name: 'Shoes', price: 60, category: 'Clothing' },
];

function grouping(products){
    let newArray={};
    products.forEach(product => {
        if(!newArray[product.category]){
        newArray[product.category]=[];
        }
        else{newArray[product.category].push(product)}
        
    });
    return newArray
}
console.log(grouping(products))



// 3.Given an array of objects, where each object represents a student with 
// a name and an array of scores, write a function that returns a new array 
// containing the names of all students whose average score is greater than or equal to 85.
const students = [
  { name: 'John', scores: [90, 80, 85] },
  { name: 'Jane', scores: [95, 92, 88] },
  { name: 'Jim', scores: [70, 80, 75] },
  { name: 'Jill', scores: [85, 90, 84] },
];


function highest(students) {
  let highestscore = [];
  for (let i = 0; i < students.length; i++) {
    let sum = 0;
    for (let j = 0; j < students[i].scores.length; j++) {
      sum += students[i].scores[j];
    }
    const average = sum / students[i].scores.length;
    if (average >= 85) {
      highestscore.push(students[i].name);
    }
  }
  return highestscore;
}
console.log(highest(students));


const car = {
  make: 'Ford',
  model: 'Ranger',
  year: 2023,
  displayInfo: function() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  },
  get age(){
    let currentYear=new Date().getFullYear();
    return currentYear-this.year;
  }
};


console.log(car.age)

