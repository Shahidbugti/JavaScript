//There are too many Methods of Arrays in JS .
//Here are few of them.


//PUSH METHOD ===> Used to include new element in Arrays at the end of It.

let arr = [1 , 2];
arr.push(3 , 4);
console.log(arr);

//unshif METHOD ===> Used to add element in array in begging of it.

let arr2 = [1 , 2];
arr2.unshift(3 , 4);
console.log(arr2);


//pop() Method ===> Used to remove elements from end of an array,
let arr3 = [1 , 2];
arr3.pop(2);
console.log(arr3);

//shift() Method -===> Used to remove an element of an array from its begning
let arr4 = [1 , 2];
arr4.shift(1);
console.log(arr4);


//CHANGING AN ARRAY TO STRING 
let array = ["a","b","c","d"];
let arrays = array.toString();
console.log(arrays);

//SLICE() METHOD ===>The slice() method allows you to copy an entire array – or just a portion of it – without mutating it.

let students = ["Shahid","Zahid","Irfan","Noman","Awais","Saad"];
let studentCopy = students.slice();
console.log(studentCopy);//This will copy the whole Array
studentCopy[1] = "Kamran";//This will change the copied array not effecting the Original one because it is containing primative values;
console.log(students);
let fewStudents = students.slice(0,6);
console.log(fewStudents);//This will copy as much parts as i want 

//If array is containing non premeive values;
let albums = [
    {artist: 'Frank Zappa', title: 'Apostrophe'},
    {artist: 'Frank Zappa', title: 'One Size Fits All'}
];
let albumsCopy = albums.slice();
albums[0]["title"]  = "We are in it only for money";//This will change both Copied and original
console.log(albumsCopy);
console.log(albums);

//DEEP COPY OF AN ARRAY ===> Deep copy will be completly diffrent it has nohing to do with original Array
let album = [
    {artist: 'Frank Zappa', title: 'Apostrophe'},
    {artist: 'Frank Zappa', title: 'One Size Fits All'}
];

let albumCopy = JSON.parse(JSON.stringify(albums));
console.log(albumCopy);




//SEARCH Inside an Array
//includes() Method ===>This method will find weather an element is included in Array or not

//Always return answer in Buleons
 let dMinor = ['D', 'E', 'F', 'G', 'A', 'B♭', 'C'];
dMinor.includes('E'); // true
 dMinor.includes('E', 2); // false

//  find() & findLast() Methods ===> Enable to search first or last element that satisfies a certain condition in array;




//fiter() ==> This method provides you a way to filter the array elements that satisfy a certain criterion.
let videos = ["Html","CSS","JavaScript","Java","Hi I am a sudent at iqra university"];
let searchVideos = videos.filter(function(video){
return video.length < 10;
});
console.log(searchVideos);

//sort() method ===> used to sort the elements of an Array in Alphabetical way
let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

numbers.sort(function(x , y) {
  return x - y;
//   return b - a;
});

console.log(numbers); // Sorts the array in ascending numerical order

let fruits = ["Orange", "Banana","Mango","Apple","Cherry"];
fruits.sort();
console.log(fruits);

