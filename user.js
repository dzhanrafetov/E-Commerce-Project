import BaseEntity from "./BaseEntity.js";

 export default class User extends BaseEntity{

  #username;
  #password;
  #userdetails;


  constructor(id, username, password) {
    super(id);
    this.#username = username;
    this.#password = password;
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
        "userDetails: "+this.#userdetails.map( userdetail => userdetail.toString())+"\n"

  }
  toJSON() {
    return {
      id: super.getId(),
      username: this.#username,
      password: this.#password,
      dateCreated:super.getDate(),
      userdetails: this.#userdetails.map( (userdetail) => userdetail.toJSON())
    }
  }



}
