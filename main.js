import User from "./user.js";
import UserDetails from "./userdetails.js";
import Advertisement from "./advertisements.js";
import Category from "./category.js";
// const us1=new User("1","dzhan","3333");
// const us1_details=new UserDetails("1","Dzhan","Rafetov",2004,"Popovo,Bulgaria");
// us1.addUserDetails(us1_details);
// console.log(us1.getUser());

const adv1=new Advertisement("1","Obqva","Opisanie");
const cat1=new Category("1","Tools");

adv1.setCategory(cat1);

console.log(adv1.getCategory().getId());