export default class Advertisement{
  #id;
  #title
  #description;
  #category;


  constructor(id,title,description){
  this.#id=id;
  this.#title=title;
  this.#description=description;
  this.#category=null;
  }
  setCategory(category){
    this.#category=category;
    category.addAdvertisement(this);
  }
  getId(){
    return this.#id;
  }
  getTitle(){
    return this.#title;
  }
  getDescription(){
    return this.#description;
  }
   getCategory(){
    return this.#category;
   }


}