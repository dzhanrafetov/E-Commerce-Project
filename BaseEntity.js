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
}