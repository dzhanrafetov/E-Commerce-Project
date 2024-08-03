import BaseEntity from "./BaseEntity.js";
import Roles from "./Roles.js";
 export default class User extends BaseEntity{

  #username;
  #password;
  #role;
  #userdetails;

  constructor(id, username, password, role =Roles.USER) {
    super(id);
    this.#username = username;
    this.#password = password;
    this.#role=role;
    this.#userdetails = [];
  }


  getUsername() {
    return this.#username;
  }
  getPassword() {
    return this.#password;
  }

  addUserDetails(userdetails){
    return this.#userdetails.push(userdetails);
  }
  getUserDetails() {
    return this.#userdetails;
  }
  toString(){
    return "User"+"\n"+
        "id:" +super.getId()+"\n"+
        "username: "+this.#username+"\n"+
        "password: "+this.#password+"\n"+
        "role: "+this.#role+"\n"+
        "userDetails: "+this.#userdetails.map( userdetail => userdetail.toString())+"\n"

  }
  toJSON() {
    return {
      id: super.getId(),
      username: this.#username,
      password: this.#password,
      role:this.#role,
      dateCreated:super.getDate(),
      userdetails: this.#userdetails.map( (userdetail) => userdetail.toJSON())
    }
  }



}
