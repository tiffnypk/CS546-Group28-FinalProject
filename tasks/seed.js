import { dbConnection, closeConnection } from "../config/mongoConnection.js";
import comments from "../data/comments.js";
import courses from "../data/courses.js";
import groups from "../data/groups.js";
import reviews from "../data/reviews.js";
import users from "../data/users.js";
import emails from "../data/emails.js";

const db = await dbConnection();//creating connection

// const aditya = await users.create('Aditya','Gupta','adityagupta@stevens.edu','lololol','anylink.com','cs', 2024)
// console.log(aditya);
const course1 = await courses.create('CS546', 'Web Development', ['Patrick Hill']);
const course2 = await courses.create('CS555', 'Sorting Algs', ['Mordohai??']);
const course3 = await courses.create('CS135', 'Discrete Structures', ['Sandheep Bhatt']);

const email1 = await emails.create('rmiller6@stevens.edu');
const email2 = await emails.create('test@stevens.edu');
const email3 = await emails.create('phill@stevens.edu');


/*ALL FUNCTIONS TESTED IN :
    Courses
    Emails
    Users
*/
let test = undefined;
let user1 = await users.create('testName', 'Robert', 'Miller', 'rmiller6@stevens.edu', 'testTest2@', ['CS555', 'CS546'], 2024);
let user2 = await users.create('HeresThis', 'Me', 'Miller', 'test@stevens.edu', 'testTest2@', ['CS555', 'CS546'], 2024);
let review1 = await reviews.create('CS555', user1._id, "test", 1, "Hill");
let review2 = await reviews.create('CS555', user2._id, "Review 2", 2, "Hill");

try {
    test = await reviews.remove(review1._id.toString());
} catch (error) {
    console.log(error);
}
console.log(test);
await db.dropDatabase();//dropping database
await closeConnection();
console.log("Done!!");
