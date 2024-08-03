export default class BaseEntity {

  #id
  #dateCreated
  constructor(id) {
    this.#id = id;
    this.#dateCreated = this.dateCalculation();
  }
  getId() {
    return this.#id;
  }
  dateCalculation(){
    const now=new Date;
    return now;
  }
  getDate() {
    return this.#dateCreated;
  }


  // Method to return a string representation of the object
  toString() {
    return "id" + this.#id + "\n";
  }


  // Method to return a JSON representation of the object
  toJSON() {
    return {
      id: this.#id
    };
  }
}