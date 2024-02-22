//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "human"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail,com",
    fullName: {
        userFullName: {
            firstName: "zympsy",
            lastName: "panda"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const objectName = { obj1, obj2}

console.log(objectName);
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "zympsy@gmail.com"
    },
    {
        id: 2,
        email: "zympsy@gmail.com"
    },
    {
        id: 3,
        email: "zympsy@gmail.com"
    },
]
console.log(users);
console.log(users[2].email);

// console.log(tinderUser);

console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    courseName: "javascript",
    price: "999k",
    courseInstructor: "zympsy"
}

console.log(course.courseInstructor)

const {courseInstructor: instructor,courseName: nameCourse} = course  //object de-structure

// console.log(courseInstructor);
// console.log(instructor);
// console.log(nameCourse);
