 export default class User {

  #id;
  #username;
  #password;
  #userdetails;


  constructor(id, username, password) {
    this.#id = id;
    this.#username = username;
    this.#password = password;
    this.#userdetails = [];
  }

  getId() {
    return this.#id;
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
  getUser() {
    return {
      username: this.#username,
      password: this.#password,
      userdetails: this.#userdetails.map( (userdetails) => userdetails.getUserDetails())
    }
  }



}
