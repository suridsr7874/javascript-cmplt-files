// creation of arrays
let array = [10,20,30,40,50];
console.log(array);

// Accessing an array and its properties
console.log(array); // 10

// Access not existed property from an array
console.log(array[3]); // undefined

// Accessing length of an Array
console.log(`Length : ${array.length}`);

// Reverse the Elements
let technologies = ['html','css','javascript','bootstrap'];
console.log(technologies);
technologies.reverse();
console.log(technologies);

// Sort of an Array
technologies = ['html','css','javascript','bootstrap'];
console.log(technologies);
technologies.sort().reverse();
console.log(technologies);

// shift() -> removes an element from the front
technologies = ['html','css','javascript','bootstrap'];
console.log(technologies);
technologies.shift();
console.log(technologies);

// unShift() -> Adds an element to the front
technologies = ['html','css','javascript','bootstrap'];
console.log(technologies);
technologies.unshift('node js');
console.log(technologies);

// pop -> removes an element from the end the array
technologies = ['html','css','javascript','bootstrap'];
console.log(technologies);
technologies.pop();
console.log(technologies);

// push -> Adds an element to the end the array
technologies = ['html','css','javascript','bootstrap'];
console.log(technologies);
technologies.push('node js');
console.log(technologies);

// splice -> Remove / Replace from the array
// Remove all the Elements splice(index)
technologies = ['html','css','javascript','bootstrap'];
console.log(technologies);
technologies.splice(1);
console.log(technologies);

// Remove only specific element splice(index,nofElements)
technologies = ['html','css','javascript','bootstrap'];
console.log(technologies);
technologies.splice(3,3);
console.log(technologies);

// Replace Only one element splice(index,1,replaceElement);
technologies = ['html','css','javascript','bootstrap'];
console.log(technologies);
technologies.splice(2,1,'Node JS');
console.log(technologies);

// Join -> joins all the elements of an Array to String
technologies = ['html','css','javascript','bootstrap'];
console.log(technologies);
let techString = technologies.join(' * ');
console.log(techString);

// Split -> Splits a String to an Array
console.log(techString);
let newTech = techString.split(' * ');
console.log(newTech);

// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
