import BaseEntity from "./BaseEntity.js";
export default class UserDetails extends BaseEntity{
 #firstName;
 #familyName;
 #birthYear;
#address;
 constructor(id,firstName,familyName,birthYear,address){
super(id);
  this.#firstName=firstName;
  this.#familyName=familyName;
  this.#birthYear=birthYear;
  this.#address=address;
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


 toJSON(){
  return {
    id:super.getId(),
    firstName:this.#firstName,
    familyName:this.#familyName,
    birthYear:this.#birthYear,
    age:this.ageCalculation(),
    dateCreated:super.getDate()

  }
 }

 toString(){
 return "\nUserDetails"+"\n"+
 "id: "+ super.getId()+"\n"+
 "firstName: "+ this.#firstName+"\n"+
 "familyName: "+ this.#familyName+"\n"+
 "birthYear: "+ this.#birthYear+"\n"+
 "age: "+ this.ageCalculation()+"\n"+
 "dateCreated: "+ super.getDate()+"\n"

 }

}