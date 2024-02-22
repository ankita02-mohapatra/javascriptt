//What is array ?
//In java script array is heterogenous type of data structure, In an array we can store different types of data within a single array.
//Like in an same array we can store number ,string, boolean,null,bigint etc.

const myHetArray = ["Ankita" , 1,2,true,244669853355288097n,undefined,45.67]
console.log(myHetArray);

const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman" , "naagraj"]

const myArr2 = myArr(1,2,3,4)
// console.log(myArr[1]);
console.log(myArr2);
console.log(myArr);
console.log(myArr[3]);

//Array methods
console.log(myArr.length);
console.log(myArr.push(7)); //push methods add the element in the last of the index of an array and increase th size of the array.
console.log(myArr);
console.log(myArr.pop()); //It removes the last element from the array snd reduce the size of the array.
console.log(myArr);

console.log(myHeros.unshift("ironman"));
console.log(myHeros);
console.log(myHeros.shift()); //It returns the deleted item.
console.log(myHeros);

console.log(myArr.includes(5));
console.log(myArr.indexOf(3));

console.log(myArr2.indexOf(3));
console.log(myHeros.indexOf("shaktiman"));

let myString = "hello";
console.log(myString.charAt(3));

const newArr = myArr.join()  //join method converts the array into string.

console.log(myArr);
console.log(typeof newArr);

const myn1 = myArr.splice(1,3) //it include the end index element in the array and it returns the new array of spliced items.

console.log(myn1, "slice");
console.log("C" ,myArr);
console.log(myn2 ,"splice");

const months = ['jan' , 'march' ,'April' ,'June'];
months.splice(1,0,'feb');
//insert at index 1
console.log(months);

const marvel_heros = ["thor" , "Ironman" ,"spiderman" ]
const dc_heros = ["superman" , "flash" , "batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros,"marvel_heros");
console.log(marvel-heros[3][0]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros,"allHeros");

const all_new_heros = [...marvel_heros,...dc_heros]  //spread operator

const another_array = [1,2,3[4,5,6],7,[6,7,[4,5]]]
console.log(another_array[5][2][0]);

// console.log(Array.isArray("another_array"));
// console.log(Array.from("zympsy-panda"));
// console.log(Array.from({name: "zympsy"})); //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));