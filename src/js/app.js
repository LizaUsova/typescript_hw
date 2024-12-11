import User from "./User.js";
import Student from "./Student.js";

const u = new User({name: 'John', email: 'john@gmail.com'});
u.changePassword('John1997', User.passwordStrength.MEDIUM);

const s = new Student({name: 'Alice', email: 'alice@gmail.com'});

console.log(u);
console.log(s);