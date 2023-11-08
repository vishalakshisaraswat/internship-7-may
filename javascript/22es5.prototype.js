// prototype  => to add new property to constructor

//constructor function

function Person() {
    this.name = "Yashi";
    this.age = 30;
  }
  
  //creating object
  
  const p1 = new Person();
  const p2 = new Person();
  
  //adding property to constructor function
  
  // syntax => constructorName.prototype.key = "value"
  
  Person.prototype.gender = "Female";
  
  console.log(p1.name); //John
  console.log(p1.gender);
  
  //to get prototype value of a Person
  console.log(Person.prototype); //{gender: 'Male', constructor: ƒ}