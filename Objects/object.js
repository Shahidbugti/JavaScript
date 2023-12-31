//OBJECTS ===> An object is a data type that can take in collections of key-value pairs.
//Content of an object can consist of variables or  functions or both;
//Those variables are called properties while Functions are called Methods
const object1 = {
user: "alex",
nationality: "Nigeria",
profession: "Software Enginneer",
myBio() {
    console.log(`My name is ${this.user}. I'm a         ${this.profession} from ${this.nationality}`)
}
}
console.log(object1.user); //Alex 
console.log(object1.nationality); //Nigeria 
console.log(object1.profession); //Software Engineer 
console.log(object1.myBio()); //My name is alex. I'm a Software Engineer from Nigeria

//ACCESS NEW OBJECT AND NEW PROPERTIES OR METHODS IN JAVASCRIPT

//DOT METHOD

// Create an object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
  };
  
  // Add a new property using dot notation
  person.email = "john@example.com";
  
  // Now the 'person' object has a new property 'email'
  console.log(person);
  

// Bracket method
// Create an object
const student = {
    firstName: "John",
    lastName: "Doe",
    age: 30
  };
  
  // Add a new property using bracket notation
  person["email"] = "john@example.com";
  
  // Now the 'person' object has a new property 'email'
  console.log(person);
  


  //OBJECT CONSTRUCTOR FUNCTION IN JAVASCRIPT
  function Profile(name, age, nationality) { 
    this.name = name; 
    this.age = age; 
    this.nationality = nationality; 
    this.bio = function () { 
        console.log(`My name is ${this.name}. I'm ${this.age} years old. I'm from ${this.nationality}`) 
    } 
};

const oladele = new Profile("Oladele", 50, "Nigeria" );
console.log(oladele.bio()); //My name is Oladele. I'm 50 years old. I'm from Nigeria
