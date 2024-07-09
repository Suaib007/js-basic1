console.log("Hello ji version 3.0");
console.log('Hello ji version 2.0');

// Arrays

// var numbers = [1, 2, 3, 4, 5, 6];
// console.log(numbers);

// let courses = [
//    {no:1, naam:'MrBlack'},
//    {no:2, naam:'Blacksmith'}
// ];

// iteration Array

// let arr=[10,20,30,40,50,60];

// for(let value of arr){
//    console.log(value);
// }

// arr.forEach(number => console.log(number))


// arr.forEach(function(number){
//    console.log(number);
// })

// console.log(courses);

// let course=courses.find(function(course){
//    return course.naam=='MrBlack';
// });

// let course = courses.find(course => course.naam === 'MrBlack');

// function(course){
//    return course.naam === 'MrBlack';
// }

// console.log(course);


// let person='New Life';
// console.log(person);

// let rectangle = {
//    length: 10,
//    breadth: 5,
   
//    draw:function(){
//       console.log("Drawing a rectangle");
//    }
// };

// factory function 

// function createRectangle(length,breadth){
//    let rectangle = {
//       length,
//       breadth,

//       draw:function(){
//          console.log("Drawing a rectangle");
//       }
//    };
//    return rectangle; 
// }

// let createRectangleObj1=createRectangle(4,6);
// let createRectangleObj2=createRectangle(41,6);
// let createRectangleObj3=createRectangle(42,16);
// let createRectangleObj4=createRectangle(43,62);

// Constructor Function -> Pascal Notation
// In Pascal Notation -> First letter of every word is capital

// function Rectangle(len,bre){
//    this.length=len;
//    this.breadth=bre;
//    this.draw=function(){
//       console.log("Drawing a rectangle");
//       }
// }

// let rectangleObject = new Rectangle(12,11);
//  rectangleObject.color='yellow';
//  console.log(rectangleObject);

//  let rectangle = {
//    length: 10,
//    breadth: 5
//  };

//  for-in loop

// for(let key in rectangle){
//    // keys are reflected through key variable
//    // value are reflected through rectangle[key]
//    console.log(key,rectangle[key]);
// }

// for-of loop

// for(let value of Object.entries(rectangle)){
//    console.log(key);
//    }

// if('length' in rectangle){
//    console.log("Color is present");
// }
// else{
//    console.log('color is Absent');
// }


// Oblect Clonning

// iteration
// let src = {
//    a:1,
//    b:2,
//    c:3
// };

// let dest = {};

// for(let key in src){
//    dest[key] = src[key];
//    }
//    console.log(dest);

// src.a++;
// console.log(dest);

// 2nd method Assign

// let src = {
//    a:10,
//    b:20,
//    c:301
// };

// let src2={value:40};

// let dest=Object.assign({},src,src2);
// console.log(dest);
// src.a++;
// console.log(dest);

// let dest={...src};
// console.log(dest);
// src.a++;
// console.log(dest);

// let lastName='BlackSmith';
// let firstName= new String ('Mr.Black');
// console.log(lastName);
// console.log(firstName);
// let message=
// `Hello ${lastName}

// Thanks for the Opportunity

// Regards,
// Mr.Black`;
// console.log(message);

// let words=message.split(' ');
// console.log(words);
// let date = new Date();
// console.log(date);

