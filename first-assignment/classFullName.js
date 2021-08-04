class Person{
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullname(){
    return this.firstName+" "+this.lastName
  }
}

let mohan = new Person('Mohan', 'Ramu')
console.log(mohan.fullName());