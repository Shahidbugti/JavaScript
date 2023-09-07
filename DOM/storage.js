//LOCAL STORAGE
// localStorage.setItem("Name", "Shahid");

const key = prompt("Enter the key you want to set");
const value = prompt("Enter the value you want to set");
localStorage.setItem(key,value);
console.log(`The value at ${key} is ${localStorage.getItem(key)}`);

console.log(localStorage.length)

if(key == 0){
    localStorage.removeItem("key");
}

if(value == 0){
localStorage.clear();
}

