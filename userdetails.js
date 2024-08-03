export default class UserDetails{
 #id;
 #firstName;
 #familyName;
 #birthYear;
#address;
 constructor(id,firstName,familyName,birthYear,address){
  this.#id=id;
  this.#firstName=firstName;
  this.#familyName=familyName;
  this.#birthYear=birthYear;
  this.#address=address;
 }

 getId(){
  return this.#id;
 }
 getFirstName(){
  return this.#firstName;
 }
 getFamilyName(){
  return this.#familyName;
 }
 getAddress(){
  return this.#address;
 }
 getBirthYear(){
  return this.#birthYear;
 }

 ageCalculation(){
  return (new Date().getFullYear())- (this.#birthYear);
 }


 getUserDetails(){
  return {
    id:this.#id,
    firstName:this.#firstName,
    familyName:this.#familyName,
    birthYear:this.#birthYear,
    age:this.ageCalculation()
  }
 }

}