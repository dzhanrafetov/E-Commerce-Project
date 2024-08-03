import User from "./User.js";
import UserDetails from "./UserDetails.js";
import Advertisement from "./Advertisements.js";
import Category from "./Category.js";


//------------------ User-UserDetails ---START---------------

const us1 = new User("1", "dzhan", "3333");
const us1_details = new UserDetails("1", "Dzhan", "Rafetov", 2004, "Popovo,Bulgaria");
const us2_details = new UserDetails("2", "Dzhan", "Zekeriev", 2004, "Popovo,Bulgaria");

us1.addUserDetails(us1_details);
us1.addUserDetails(us2_details);

console.log(us1.toJSON());
// console.log(us1.toString());

// console.log(us1.toJSON());

//------------------ User-UserDetails -- END----------------



//------------------ Advertisement-Category ---START---------------

const adv1 = new Advertisement("1", "Obqva", "Opisanie");
const cat1 = new Category("1", "Tools");
// console.log(adv1.toString());

adv1.setCategory(cat1);

//------------------ Advertisement-Category ---END---------------
