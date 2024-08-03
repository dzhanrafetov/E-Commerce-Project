import BaseEntity from "./BaseEntity.js";

export default class Category extends BaseEntity{
#id
#categoryName
#advertisements;

constructor(id,categoryName){
super(id);
this.#categoryName=categoryName;
this.#advertisements=[];
}

getCategoryName(){
  return this.#categoryName;
}
getAdvertisement(){
  return this.#advertisements;
}
addAdvertisement(advertisement){
 this.#advertisements.push(advertisement);
}

toJSON(){
  return {
    id:super.getId(),
    categoryName:this.#categoryName
  }
}
toString(){
  return "Category"+'\n'+
          "id: " +super.getId()+"\n"+
          "name: "+this.#categoryName+"\n"
}
}