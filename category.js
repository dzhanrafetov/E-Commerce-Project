export default class Category{
#id
#categoryName
#advertisements;
constructor(id,categoryName){
this.#id=id;
this.#categoryName=categoryName;
this.#advertisements=[];
}
getId(){
  return this.#id;
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


}