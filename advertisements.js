import BaseEntity from "./BaseEntity.js";
export default class Advertisement extends BaseEntity{
  #title
  #description;
  #category;


  constructor(id,title,description){
  super(id);
  this.#title=title;
  this.#description=description;
  this.#category=null;
  }
  setCategory(category){
    this.#category=category;
    category.addAdvertisement(this);
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



 toJSON(){
  return {
   id:super.getId(),
   title:this.#title,
   description:this.#description,
   dateCreated:super.getDate(),
   category:this.#category.toJSON()

  }

 }

 toString(){
  return'Advertisement'+'\n'+
  "id: "+super.getId() +"\n"+
  "title: "+this.#title +"\n"+
  "description: "+this.#description+"\n"+
  "dateCreated: "+super.getDate()+"\n"+
  this.#category.toString() ;
  }
}