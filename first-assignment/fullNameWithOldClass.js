
function Person(firtName, lastName) {
 
    this.firtName = firtName;
    this.lastName =lastName;
  
  this.fullName = function (){
    return this.firtName+" "+this.lastName;
  };
}
const rajesh = new person('Rajeshkumar',"sivaprakasam");
rajesh.fullName()