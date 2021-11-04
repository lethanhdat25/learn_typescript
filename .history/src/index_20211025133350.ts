// type keys = 'color' | 'name';
// type Shape = {
//     [key in keys]:string;
// }
// const Circle:Shape = {
//     name:'circle',
//     color:'res'
// }
// type Student=[string|number,number];
// const great=(user:Student)=>{
//     console.log(user)
// };
// console.log(Circle)
// great(["asdfasdf",1231]);
// class Student {
//     fullName: string;
//     constructor(public firstName: string, public middleInitial: string, public lastName: string) {
//         this.fullName = firstName + " " + middleInitial + " " + lastName;
//     }
// }
//
// interface Person {
//     firstName: string;
//     lastName: string;
// }
//
// function greeter(person : Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }
//
// let user = new Student("Jane", "M.", "User");
// console.log(greeter(user))
interface Hasprint{
    print:()=>string
}
